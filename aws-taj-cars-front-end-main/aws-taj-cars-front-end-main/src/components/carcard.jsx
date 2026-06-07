import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-2xl transition-shadow duration-300 w-full mb-8'>
      <div className='flex flex-col md:flex-row'>
        
        <div className='md:w-1/3 w-full relative overflow-hidden h-[300px]'>
          <img
            src={car.images?.[0] || "https://via.placeholder.com/400x300"}
            alt={`${car.make} ${car.model}`}
            className='object-cover w-full h-56 md:h-full'
            onClick={() => navigate(`/car/${car._id}`)}
          />
        </div>

        {/* Details Section */}
        <div className='md:w-2/3 w-full p-6 flex flex-col justify-between'>
          <div>
            {/* Title and Price */}
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold text-white'>
                {car.make} {car.model} {car.year}
              </h1>
              <span className='text-green-400 font-bold text-lg'>
                Contact Us for Price
              </span>
            </div>
            <p className='text-gray-400 text-sm'>{car.trim}</p>

            {/* Additional Info */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-300 mt-3'>
              <p>
                <strong>Fuel:</strong> {car.fuel}
              </p>
              <p>
                <strong>Transmission:</strong> {car.transimission}
              </p>
              <p>
                <strong>Mileage:</strong> {car.mileage} km
              </p>
              <p>
                <strong>Engine:</strong> {car.engine}
              </p>
              <p>
                <strong>Color:</strong> {car.color}
              </p>
            </div>

            {/* Description */}
            <p className='text-gray-300 text-sm mt-3'>
              {car.description.length > 100
                ? `${car.description.slice(0, 100)}...`
                : car.description}
            </p>
          </div>

          <div className='flex flex-wrap gap-2 mt-4 text-xs text-gray-300'>
            <span className='bg-gray-700 px-3 py-1 rounded-full border text-green-300'>
              Condition Report ✅
            </span>

            <span className='bg-gray-700 px-3 py-1 rounded-full border text-green-300'>
              Buy it Safety ✅
            </span>
          </div>

          {/* Buttons */}
          <div className='flex gap-4 mt-6'>
            <button
              className='px-6 py-3 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition'
              onClick={() => navigate(`/car/${car._id}`)}
            >
              View Details
            </button>
            <button
              className='px-6 py-3 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition'
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
