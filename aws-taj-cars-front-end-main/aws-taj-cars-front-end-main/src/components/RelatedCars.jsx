import { useEffect, useState } from "react";
import { getCars } from "../services/car.service";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function RelatedCars({ currentCarId }) {
  const [relatedCars, setRelatedCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCars()
      .then((data) => {
        const filteredCars = data.filter((car) => car._id !== currentCarId);
        const limitedCars = filteredCars.slice(0, 15);
        setRelatedCars(limitedCars);
      })
      .catch((error) => console.log(error.message));
  }, [currentCarId]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (relatedCars.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-100">
        Explore More Cars
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Discover other amazing vehicles
      </p>

      <div className="mt-6 ">
        <Slider {...sliderSettings}>
          {relatedCars.map((car) => (
            <div
              key={car._id}
              className="p-4 cursor-pointer"
              onClick={() => navigate(`/car/${car._id}`)}
            >
              <div className="border border-gray-600 rounded-xl shadow-md p-4 hover:shadow-lg transition transform hover:scale-105 bg-gray-800 ">
                <img
                  src={car.images?.[0] || "https://via.placeholder.com/400x300"}
                  alt={car.make}
                  className="w-full h-60 sm:h-64 object-cover rounded-xl mb-4 "
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-100">
                  {car.make} {car.model} {car.year}
                </h3>
                <p className="text-gray-300 text-sm">
                  {car.trim} | {car.engine}
                </p>
                <p className="text-blue-600 font-bold mt-2 text-sm sm:text-base">
                  Contact Us for Price
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RelatedCars;
