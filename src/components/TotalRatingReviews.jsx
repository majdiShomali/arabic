import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const TotalRatingReviews = ({ rating ,Recipe }) => {

const [filledStars,setfilledStars]=useState()
const [emptyStars,setemptyStars]=useState()
  useEffect(()=>{
    if(rating){
      const starCount = 5; 
      const  filledStars = Math?.floor(Number(rating));  
      setfilledStars(filledStars)
      const emptyStars = starCount - filledStars 
      setemptyStars(emptyStars)
       console.log(filledStars);

    }
  },[rating])

  return (
      <div className="flex items-center">
      {/* Render filled stars */}
      {Array(filledStars).fill().map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Filled star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

     

      {/* Render empty stars */}
      {Array(emptyStars).fill().map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          className="w-5 h-5 text-gray-300 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Empty star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
          <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <div href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"> <span>شخص</span>  {Recipe?.UsersIdRate?.length}</div>
    </div>
  )
}

export default TotalRatingReviews