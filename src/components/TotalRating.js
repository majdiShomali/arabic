import React, { useState } from 'react';

const TotalRating = ({ rating ,Recipe }) => {

  const starCount = 5; // Total number of stars

  const filledStars = Math.floor(rating); // Number of filled stars

  // Calculate the number of empty stars
  const emptyStars = starCount - filledStars 

  return (
    <>
    <div class="flex items-center">
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{Recipe?.UsersIdRate?.length}شخص</a>
  </div>
    
    </>
    // <div className="flex items-center">
    //   {/* Render filled stars */}
    //   {Array(filledStars).fill().map((_, index) => (
    //     <svg
    //       key={index}
    //       aria-hidden="true"
    //       className="w-5 h-5 text-yellow-400"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <title>Filled star</title>
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //     </svg>
    //   ))}

     

    //   {/* Render empty stars */}
    //   {Array(emptyStars).fill().map((_, index) => (
    //     <svg
    //       key={index}
    //       aria-hidden="true"
    //       className="w-5 h-5 text-gray-300 dark:text-gray-500"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <title>Empty star</title>
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //     </svg>
    //   ))}
    // </div>
  );



};

export default TotalRating;
