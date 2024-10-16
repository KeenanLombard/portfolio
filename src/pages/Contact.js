// src/components/ContactForm.js

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic (e.g., send data to an API)
    console.log("Form Submitted", formData);
    alert("Form Submitted!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-gray-700'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500'
              placeholder='Your Name'
            />
          </div>
          <div>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500'
              placeholder='Your Email'
            />
          </div>
          <div>
            <label className='block text-gray-700'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500'
              rows='4'
              placeholder='Your Message'
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
