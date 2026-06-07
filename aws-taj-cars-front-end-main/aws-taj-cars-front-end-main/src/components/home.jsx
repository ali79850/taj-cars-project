import { useNavigate ,Link} from "react-router-dom";
import FeaturedCars from "./FeaturedCars";
import CarFilter from "./CarFilter";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full  py-10 bg-gradient-to-br from-black via-gray-900 to-black text-gray-200'>
      {/* Hero Section */}
      <div
        className='relative bg-cover bg-center h-[450px] sm:h-[500px] flex  text-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className='bg-black bg-opacity-70 p-8 h-full w-full   shadow-2xl mx-auto'>
          <h1 className='mt-12 text-3xl sm:text-5xl font-extrabold leading-tight text-white'>
            Drive Your Dream Car
          </h1>
          <p className='mt-4 text-base sm:text-lg text-gray-300'>
          Buy luxury vehicles with complete confidence and trusted service.
          </p>
          <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() => navigate("/cars")}
              className='bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-full text-base shadow-lg transition-all'
            >
              Browse Cars
            </button>
          </div>
        </div>
      </div>

          {/* Featured Cars */}
          <div className='mt-20'>
            <FeaturedCars />
          </div>


        {/* Who We Are Section */}
        <div className="py-20 mt-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Who We Are
        </h2>
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl text-center">
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Taj Cars LLC is a premier car export company based in Dubai,
            specializing in brand-new and pre-owned vehicles. Trusted by customers worldwide for our secure shipping, documentation, and exceptional service.
          </p>
          <Link
                to="/about"
                className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg font-semibold transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:text-yellow-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                Learn More →
              </Link>

        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-20 mt-20 bg-gray-900 rounded-3xl shadow-2xl max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Global Car Export",
              desc: "Ship cars worldwide with full documentation.",
            },
            {
              title: "New & Used Cars",
              desc: "Choose from wide selection of high-quality vehicles.",
            },
            {
              title: "Export Documentation",
              desc: "We handle all necessary paperwork for export.",
            },
            {
              title: "Vehicle Modification",
              desc: "Customization services as per your needs.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-xl text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 py-2">
        <Link
                to="/services"
                className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg font-semibold transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:text-yellow-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                Learn More →
              </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 mt-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Browse Cars",
              desc: "Choose your dream car from our online listings.",
            },
            {
              title: "Contact Us",
              desc: "We assist with pricing, documentation & custom needs.",
            },
            {
              title: "Get it Delivered",
              desc: "Complete export and delivery process to your doorstep.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


       
      {/* Why Choose Us */}
      <div className='py-20 mt-20 bg-gray-900 rounded-3xl shadow-2xl max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center text-white mb-12'>
          Why Choose Taj Cars?
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {[
            {
              title: "✅ Certified Vehicles",
              desc: "Each car undergoes a 150-point quality check to ensure top performance.",
            },
            {
              title: "🚗 Wide Range Selection",
              desc: "Explore cars from every leading brand and class, ready to drive home.",
            },
            {
              title: "💰 Best Market Deals",
              desc: "We offer unbeatable prices and flexible finance options for everyone.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-xl'
            >
              <h3 className='text-2xl font-semibold text-white mb-4'>
                {item.title}
              </h3>
              <p className='text-gray-400 text-base'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='max-w-6xl mx-auto text-center mt-24'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>
          Ready to Hit the Road?
        </h2>
        <p className='text-gray-400 mt-4 text-lg'>
          Find your next car at Taj Cars — luxury, reliability, and style await
          you.
        </p>
        <div className='mt-8'>
          <button
            onClick={() => navigate("/cars")}
            className='bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all'
          >
            View Available Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
