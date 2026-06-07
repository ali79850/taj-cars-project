import CarCard from "./carcard";
import CarFilter from "./CarFilter";
import { useState, useEffect } from "react";
import { getCars } from "../services/car.service";

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-[60vh]'>
      <div className='w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin'></div>
    </div>
  );
};

function CarList() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Current page 
  const carsPerPage = 6; // Number of cars per page

  useEffect(() => {
    getCars()
      .then((data) => {
        setCars(data);
        setFilteredCars(data); 
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    const filtered = cars.filter((car) => {
      return (
        (!filters.make ||
          car.make.toLowerCase().includes(filters.make.toLowerCase())) &&
        (!filters.model ||
          car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
        (!filters.year || car.year.toString() === filters.year) &&
        (!filters.price || car.price <= parseInt(filters.price))
      );
    });
    setFilteredCars(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Calculating the cars to display on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = [...filteredCars].reverse().slice(indexOfFirstCar, indexOfLastCar);

  // Calculation of total pages
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; 
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className='w-full min-h-screen  px-6 py-8 pt-20 bg-gray-900 text-gray-200'>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Car Filter */}
          <div className='bg-gray-800 p-6 rounded-xl shadow-lg'>
            <CarFilter onFilterChange={handleFilterChange} />
          </div>

          {/* Car List */}
          {filteredCars.length === 0 ? (
            <div className='text-center py-10 text-gray-500 text-lg'>
              No car matches that filter.
            </div>
          ) : (
            <div className='flex flex-col gap-8 mt-12'>
              {currentCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className='flex justify-center items-center mt-12 space-x-4'>
            {/* Previous Button */}
            <button
              className={`px-6 py-3 rounded-full text-lg font-semibold ${
                currentPage === 1
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-6 py-3 rounded-full text-lg font-semibold ${
                  currentPage === index + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              className={`px-6 py-3 rounded-full text-lg font-semibold ${
                currentPage === totalPages
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CarList;
