import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCarById } from "../services/car.service";
import Slider from "react-slick";
import RelatedCars from "./RelatedCars";
import StepsToBuy from "./StepstoBuy";
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-[60vh]'>
      <div className='w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin'></div>
    </div>
  );
};

function SingleCarPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  
  useEffect(() => {
    getCarById(id)
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [id]);



  if (loading) return <Loader />;
  if (!car) return <div className='text-center py-10'>Car not found.</div>;

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleWhatsappClick = () => {
    const message = `Hello, I am interested in the ${car.make} ${car.model} listed on your website.`;
    window.open(`https://wa.me/+971527463341?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <div className=' bg-gray-900 text-gray-200 min-h-screen p-10'>
      <div className='max-w-7xl mx-auto px-6 py-12' aria-hidden={isModalOpen}>
        {/* Header Section */}
        <div className='text-center mb-10 p-10 bg-gray-800 shadow-md rounded-xl'>
          <h1 className='text-3xl md:text-4xl font-bold text-white'>
            {car.make} {car.model} {car.trim}
          </h1>
          <p className='text-lg md:text-xl text-gray-300 mt-2'>
            {car.year} | {car.transimission} | {car.fuel}
          </p>
        </div>

        {/* Main Content */}
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Image Section */}
          <div className='md:w-1/2 w-full'>
            <img
              src={car.images?.[0] || "https://via.placeholder.com/400x300"}
              alt={`${car.make} ${car.model}`}
              className='rounded-xl w-full object-cover h-72 md:h-[400px] shadow-lg'
            />
          </div>

          {/* Details Section */}
          <div className='md:w-1/2 w-full bg-gray-600 rounded-xl shadow-lg p-6 space-y-6'>
            
              <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-blue-400 tracking-wide drop-shadow-lg">
                    Contact Us for <span className="text-green-400">Price</span>
                  </h2>
                  <span className="text-xs md:text-sm bg-yellow-400 text-gray-900 font-semibold px-4 py-1 rounded-full shadow-md ml-4">
                    Best Deal!
                  </span>
                </div>
              <p className='text-gray-200 text-sm md:text-base mt-2'>
                {car.description}
              </p>
            

            {/* Specifications */}
            <div className='grid grid-cols-2 gap-4 text-sm md:text-base text-gray-200'>
              <p>
                <strong>Engine:</strong> {car.engine}
              </p>
              <p>
                <strong>Mileage:</strong> {car.mileage.toLocaleString()} km
              </p>
              <p>
                <strong>Model Year:</strong> {car.year}
              </p>
              <p>
                <strong>Color:</strong> {car.color}
              </p>
              <p>
                <strong>Fuel:</strong> {car.fuel}
              </p>
              <p>
                <strong>Transmission:</strong> {car.transimission}
              </p>
            </div>

            {/* Posted Date */}
            <p className='text-xs md:text-sm text-gray-400'>
              Posted on: {new Date(car.createdAt).toLocaleDateString()}
            </p>

            {/* Buttons */}
            <div className='flex gap-4 mt-6'>
              <button
                className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
              <button
                className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'
                onClick={handleWhatsappClick}
              >
                Whatsapp us
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {car.images?.length > 1 && (
          <div className='mt-12'>
            <h2 className='text-2xl font-bold text-white-400 mb-6'>Gallery</h2>
            <Slider {...sliderSettings}>
              {car.images.map((image, index) => (
                <div
                  key={index}
                  className='p-2 cursor-pointer'
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt={`Car Image ${index + 1}`}
                    className='rounded-lg object-cover w-full h-40 md:h-48 shadow-md hover:shadow-lg transition'
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Modal for Carousel */}
        {isModalOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
            onClick={() => setIsModalOpen(false)} // Close modal when clicking on the overlay
          >
            <div
              className='relative w-11/12 md:w-3/4 lg:w-1/2'
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              tabIndex={-1} // Make modal focusable
            >
              <button
                className='absolute top-4 right-4 text-white text-2xl'
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <Slider
                {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: currentImageIndex,
                }}
              >
                {car.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Car Image ${index + 1}`}
                      className='rounded-lg object-cover w-full h-[400px] md:h-[500px]'
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}

        {/* Steps to Buy Section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-bold text-white-400 mb-6'>Steps to Buy</h2>
          <StepsToBuy />
        </div>
        {/* Featured Cars Section */}
        <div className='bg-gray-800   rounded-lg py-12 mt-16'>

          <RelatedCars currentCarId={id}  />
        </div>

        {/* Explore More Button */}
        <div className='mt-6 flex justify-center'>
          <button
            onClick={() => navigate("/cars")}
            className='bg-blue-500 px-6 py-4 rounded-md text-white hover:bg-blue-600 text-sm sm:text-base'
          >
            Browse All Cars
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCarPage;
