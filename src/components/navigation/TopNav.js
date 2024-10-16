import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Assuming you're using React Router for routing

const TopNav = ({ links }) => {
  return (
    <nav className='bg-gray-800 text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='shrink-0 flex items-center'>
              <h1 className='text-lg font-bold'>Keenan Lombard</h1>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
            {links.map(({ label, route }) => (
              <Link
                key={label}
                to={route}
                className='text-gray-300 my-auto hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

TopNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TopNav;
