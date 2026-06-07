import React, { useState } from "react";
import { sendMessage } from "../services/car.service";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendMessage(contactData);
      toast.success("Message sent successfully!");
      setContactData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full px-4 py-10 bg-gradient-to-br from-black via-gray-900 to-black text-gray-200'>
      <Toaster/>
      {/* Hero Section */}
      <div
        className='relative bg-cover bg-center h-[450px] sm:h-[500px] flex items-center justify-center text-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className='bg-black bg-opacity-70 p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto'>
          <h1 className='text-3xl sm:text-5xl font-extrabold leading-tight text-white'>
            Contact Us
          </h1>
          <p className='mt-4 text-base sm:text-lg text-gray-300'>
            Get in touch with Taj Cars LLC for all your vehicle needs.
          </p>
        </div>
      </div>

     {/* Contact Information */}
<div className="max-w-6xl mx-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
  
  {/* Contact Info Card */}
  <div className="bg-gray-600 p-6 shadow-lg hover:shadow-2xl rounded-lg transition-all duration-300">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
      Our Address
    </h2>
    <p className="flex items-center mt-4 text-sm md:text-base text-gray-100">
      <FaMapMarkerAlt className="text-red-500 mr-3" />
      The Meydan Hotel - Grandstand, 6th floor, Al Meydan Rd - Nad Al Sheba 1, Dubai
    </p>
    <p className="flex items-center mt-4 text-sm md:text-base text-gray-100">
      <FaPhone className="text-green-500 mr-3" />
      +971527463341
    </p>
    <p className="flex items-center mt-4 text-sm md:text-base text-gray-100">
      <FaEnvelope className="text-blue-500 mr-3" />
      <a href="mailto:info@tajcarsllc.com" className="hover:underline">
        Mail Us
      </a>
    </p>
    <p className="flex items-center mt-4 text-sm md:text-base text-gray-100">
      <FaWhatsapp className="text-green-500 mr-3" />
      <a
        href="https://wa.me/+971527463341"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:underline"
      >
        WhatsApp us
      </a>
    </p>
    <p className="flex items-center mt-4 text-sm md:text-base text-gray-100">
      <FaInstagram className="text-red-500 mr-3" />
      <a
        href="https://www.instagram.com/direct/t/17847950031141742"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-500 hover:underline"
      >
        Message us
      </a>
    </p>
  </div>

  {/* Map Iframe */}
  <div className="shadow-lg hover:shadow-2xl rounded-lg overflow-hidden h-full transition-all duration-300">
    <iframe
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.318540820342!2d55.307485!3d25.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69ab0b2e6b3b%3A0x8d762d6f6f6b1234!2sThe%20Meydan%20Hotel%20-%20Dubai!5e0!3m2!1sen!2sae!4v1642345678901!5m2!1sen!2sae"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Taj Cars Location"
    ></iframe>
  </div>

</div>


      {/* Contact Form */}
      <div className='max-w-4xl mx-auto p-6 md:p-8 bg-gray-600 shadow-md rounded-lg mt-6'>
        <h2 className='text-xl md:text-2xl font-semibold text-center text-gray-100'>
          Send Us a Message
        </h2>
        <form className='mt-6' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            value={contactData.name}
            onChange={handleChange}
            placeholder='Your Name'
            className='w-full p-3 bg-gray-300 outline-none border rounded-md mb-4 text-sm md:text-base text-gray-800'
            required
          />
          <input
            type='email'
            name='email'
            value={contactData.email}
            onChange={handleChange}
            placeholder='Your Email'
            className='w-full p-3 border bg-gray-300 outline-none  rounded-md mb-4 text-sm md:text-base text-gray-800'
            required
          />
          <textarea
            name='message'
            value={contactData.message}
            onChange={handleChange}
            placeholder='Your Message'
            className='w-full p-3 border bg-gray-300 outline-none  rounded-md mb-4 h-32 text-sm md:text-base text-gray-800'
            required
          ></textarea>
          <button
            type='submit'
            className={`w-full py-3 rounded-md transition ${
              loading ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
            } text-white`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
