import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center p-8 sm:p-10 md:p-12 rounded-lg shadow-lg max-w-lg w-full border border-gray-200">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-lg sm:text-2xl text-gray-700 mb-4">Oops! The page you're looking for does not exist.</p>
        <p className="text-base sm:text-lg text-gray-600 mb-8">It seems like the page has been moved or deleted.</p>
        <Link to="/" className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full text-sm sm:text-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
