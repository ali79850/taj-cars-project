import { useState, useEffect } from "react";
import { getCars } from "../services/car.service";

function CarFilter({ onFilterChange }) {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
  });

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    getCars()
      .then((data) => {
        setCars(data);

       
        const uniqueMakes = [
          ...new Set(data.map((car) => car.make).filter(Boolean)),
        ].sort();
        setMakes(uniqueMakes);

        const uniqueModels = [
          ...new Set(data.map((car) => car.model).filter(Boolean)),
        ].sort();
        setModels(uniqueModels);

        const uniqueYears = [
          ...new Set(data.map((car) => car.year).filter(Boolean)),
        ].sort((a, b) => b - a);
        setYears(uniqueYears);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    onFilterChange(filters); // Pass updated filters to parent
  };

  return (
    <div className='bg-gray-800 shadow-lg rounded-lg p-6 mb-6'>
      <h2 className='text-2xl font-bold text-white mb-6'>Filter Cars</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Make Filter */}
        <div>
          <label className='block text-sm font-medium text-gray-300'>
            Make
          </label>
          <select
            name='make'
            value={filters.make}
            onChange={handleInputChange}
            className='mt-1 block px-3 py-2  w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
          >
            <option value=''>All Makes</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        {/* Model Filter */}
        <div>
          <label className='block text-sm font-medium text-gray-300'>
            Model
          </label>
          <select
            name='model'
            value={filters.model}
            onChange={handleInputChange}
            className='mt-1 block w-full px-3 py-2  rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
          >
            <option value=''>All Models</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div>
          <label className='block text-sm font-medium text-gray-300'>
            Year
          </label>
          <select
            name='year'
            value={filters.year}
            onChange={handleInputChange}
            className='mt-1 block w-full px-3 py-2 rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
          >
            <option value=''>All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label className='block text-sm font-medium text-gray-300'>
            Max Price
          </label>
          <input
            type='number'
            name='price'
            value={filters.price}
            onChange={handleInputChange}
            placeholder='e.g., 20000'
            className='mt-1 block w-full px-3 py-2  rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
          />
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className='mt-6 flex justify-end'>
        <button
          onClick={handleApplyFilters}
          className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300'
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default CarFilter;
