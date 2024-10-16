// src/components/Card.js

import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, heading, subheading, text }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 hover:shadow-xl cursor-pointer'>
      <img className='w-full h-48 object-cover' src={image} alt={heading} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{heading}</div>
        {subheading && (
          <div className='text-gray-600 text-sm mb-2'>{subheading}</div>
        )}
        <p className='text-gray-700 text-base'>{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Card;
