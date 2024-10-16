// src/pages/Home.js

import React from "react";
import { Link } from "react-router-dom";
import myGif from "../assets/home.gif";

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img className='w-24 m-10' src={myGif} alt='my-gif' />
      <h1 className='text-4xl font-bold text-gray-900 mb-8'>
        Welcome to My Portfolio
      </h1>
      <p className='text-lg text-gray-700 mb-12 text-center'>
        I’m a software engineer passionate about creating beautiful and
        functional web applications.
      </p>

      <div className='flex space-x-6'>
        <Link
          to='/about'
          className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition'>
          About Me
        </Link>
        <Link
          to='/contact'
          className='px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
