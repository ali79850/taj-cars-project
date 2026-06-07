import React from "react";
import { FaShippingFast, FaCar, FaFileContract, FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-900 text-gray-200 pt-10'>
      {/* Hero Section */}
      <div
        className='relative h-80 bg-cover bg-center flex items-center justify-center text-white text-center px-4'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className='bg-black bg-opacity-70 p-8 rounded-lg'>
          <h1 className='text-3xl md:text-4xl font-bold'>Our Services</h1>
          <p className='text-base md:text-lg mt-2'>
            Premium car export & modification solutions
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className='max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg text-center'>
          <FaShippingFast className='text-4xl text-blue-500 mx-auto' />
          <h3 className='text-lg md:text-xl font-semibold mt-4'>
            Global Car Export
          </h3>
          <p className='text-gray-400 mt-2 text-sm md:text-base'>
            We ship brand-new and used cars to destinations worldwide with full
            export documentation.
          </p>
        </div>

        <div className='p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg text-center'>
          <FaCar className='text-4xl text-green-500 mx-auto' />
          <h3 className='text-lg md:text-xl font-semibold mt-4'>
            New & Used Cars
          </h3>
          <p className='text-gray-400 mt-2 text-sm md:text-base'>
            Choose from a wide range of high-quality vehicles ready for export.
          </p>
        </div>

        <div className='p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg text-center'>
          <FaFileContract className='text-4xl text-purple-500 mx-auto' />
          <h3 className='text-lg md:text-xl font-semibold mt-4'>
            Export Documentation
          </h3>
          <p className='text-gray-400 mt-2 text-sm md:text-base'>
            We handle all paperwork and legal requirements for hassle-free
            shipments.
          </p>
        </div>

        <div className='p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg text-center'>
          <FaTools className='text-4xl text-red-500 mx-auto' />
          <h3 className='text-lg md:text-xl font-semibold mt-4'>
            Vehicle Modification
          </h3>
          <p className='text-gray-400 mt-2 text-sm md:text-base'>
            Custom modifications & fabrications to meet your specific needs.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='bg-gray-900 py-12 text-center'>
        <h2 className='text-2xl md:text-3xl font-semibold text-white'>
          How It Works
        </h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6'>
          <div className='p-6 border border-gray-700 rounded-lg shadow-md bg-gray-800 text-gray-200'>
            <h3 className='text-lg md:text-xl font-semibold'>
              Step 1: Browse Cars
            </h3>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>
              Choose your preferred car from our online listings.
            </p>
          </div>
          <div className='p-6 border border-gray-700 rounded-lg shadow-md bg-gray-800 text-gray-200'>
            <h3 className='text-lg md:text-xl font-semibold'>
              Step 2: Contact Us
            </h3>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>
              Get in touch for pricing, documentation, and custom requirements.
            </p>
          </div>
          <div className='p-6 border border-gray-700 rounded-lg shadow-md bg-gray-800 text-gray-200'>
            <h3 className='text-lg md:text-xl font-semibold'>
              Step 3: Get it Delivered
            </h3>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>
              We complete the export process & deliver the car to your location.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='bg-gray-800 text-white text-center py-8   mx-4 rounded-xl'>
        <h2 className='text-xl md:text-2xl font-semibold'>
          Get Your Dream Car Today!
        </h2>
        <p className='text-sm md:text-base mt-2'>
          Contact us for the best car export deals and vehicle modifications.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className='mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-900 transition'
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Services;
