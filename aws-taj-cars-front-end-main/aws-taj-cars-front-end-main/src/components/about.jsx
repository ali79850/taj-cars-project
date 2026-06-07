import React from "react";
import StatsCounter from "./StatsCounter";

const About = () => {
  return (
    <div className='bg-gray-900 text-gray-100 pt-10'>
      {/* Hero Section */}
      <div
        className='relative h-80 bg-cover bg-center flex items-center justify-center text-white text-center px-4'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1572742241872-40dabdcd31c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className='bg-black bg-opacity-60 p-6 rounded-lg'>
          <h1 className='text-3xl md:text-4xl font-bold'>About Taj Cars</h1>
          <p className='text-base md:text-lg mt-2'>
            Your trusted partner in high-quality car exports
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className='max-w-6xl mx-auto p-6 md:p-8'>
        <h2 className='text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6 text-gray-200'>
          Who We Are
        </h2>
        <p className='text-gray-400 text-base md:text-lg text-center leading-relaxed'>
          Taj Cars LLC is a premier car export company based in Dubai,
          specializing in brand-new and pre-owned vehicles. With over a decade
          of experience, we ensure seamless documentation, secure shipping, and
          exceptional customer service for car buyers worldwide.
        </p>
      </div>

      {/* Features Section */}
      <div className=' py-8 md:py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4'>
          <div className='p-6 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h3 className='text-lg md:text-xl font-semibold text-gray-200'>
              🚗 Wide Selection
            </h3>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>
              Choose from top brands including Toyota, Nissan, and more.
            </p>
          </div>
          <div className='p-6 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h3 className='text-lg md:text-xl font-semibold text-gray-200'>
              🌍 Global Shipping
            </h3>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>
              We handle export documentation and deliver to your doorstep.
            </p>
          </div>
          <div className='p-6 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <h3 className='text-lg md:text-xl font-semibold text-gray-200'>
              ✅ Trusted Experience
            </h3>
            <p className='text-gray-400 mt-2 text-sm md:text-base'>
              10+ years of expertise in car sales and export solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className='max-w-6xl mx-auto p-6 md:p-8 text-center'>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-200'>
          Our Mission & Vision
        </h2>
        <p className='text-gray-400 mt-4 text-base md:text-lg leading-relaxed'>
          Our mission is to connect car buyers worldwide with high-quality
          vehicles while ensuring a transparent and seamless purchasing
          experience. We envision becoming the most reliable car export service
          in the UAE, delivering excellence in every transaction.
        </p>
      </div>

      {/* Stats Section */}
        <div className='py-8 md:py-12'>
          <h2 className='text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6 text-gray-200'>
            Our Achievements
          </h2>
          <StatsCounter/>
        </div>
    </div>
  );
};

export default About;
