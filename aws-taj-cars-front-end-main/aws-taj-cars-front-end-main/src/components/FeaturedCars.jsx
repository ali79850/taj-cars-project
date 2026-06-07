import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCars } from "../services/car.service";

const FeaturedCars = () => {
  const navigate = useNavigate();

  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
  getCars()
    .then((data) => {
      console.log("Cars API Response:", data);
      console.log("Is Array:", Array.isArray(data));

      if (Array.isArray(data)) {
        setFeaturedCars(data.slice(-3));
      } else {
        setFeaturedCars([]);
      }
    })
    .catch((error) => console.log(error));
}, []);

  return (
    <>
      <div className='max-w-6xl mx-auto mt-12 px-4 sm:px-6'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center text-gray-100'>
          Featured Cars
        </h2>
        <p className='text-gray-500 text-center mt-2'>
          Check out our best deals
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 '>
          {featuredCars.map((car, index) => (
            <div
              key={index}
              className='border border-gray-600 rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition transform hover:scale-105'
              onClick={() => navigate(`/car/${car._id}`)}
            >
              <img
                src={car.images?.[0] || "https://via.placeholder.com/400x300"}
                className='w-full h-60 sm:h-64 object-cover rounded-xl mb-4'
                alt={`${car.make} ${car.model}`}
              />
              <h3 className='text-base sm:text-lg font-semibold text-gray-100'>
                {car.make} {car.model} {car.year}
              </h3>
              <p className='text-gray-300 text-sm'>
                {car.trim} | {car.engine}
              </p>
              <p className='text-blue-600 font-bold mt-2 text-sm sm:text-base'>
                Contact Us for Price
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedCars;
