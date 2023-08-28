import React, { useEffect, useState } from 'react'
import ToltalRatingReviews from './TotalRatingReviews';
const Reviews = ({ rating ,Recipe }) => {
    console.log({ rating ,Recipe });
 const [ratingPercentages,setRatingPercentages]=useState([])
    useEffect(() => {
        if (Recipe && Recipe.rate) {
          const ratingCounts = Recipe.rate.reduce((acc, curr) => {
            const rating = parseInt(curr); // Parse the rating as an integer
            acc[rating] = (acc[rating] || 0) + 1;
            return acc;
          }, {});
      
          const totalRatings = Recipe.rate.length;
      
          const ratingPercentages = [];
          for (let i = 1; i <= 5; i++) {
            const count = ratingCounts[i] || 0;
            const percentage = count === 0 ? 0 : ((count / totalRatings) * 100).toFixed(2);
            ratingPercentages.push({
              rating: i,
              count,
              percentage,
            });
          }
      
          console.log("ratingCounts, totalRatings, ratingPercentages");
          console.log(ratingPercentages);
          setRatingPercentages(ratingPercentages)
          console.log("ratingCounts, totalRatings, ratingPercentages");
        }
      }, [Recipe]);
  return (
    <div className='px-7 py-5'>
    <ToltalRatingReviews rating={Recipe.rating} Recipe={Recipe }/>
    

    {ratingPercentages?.map((ratePercentage)=>{
      return(

        <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {ratePercentage.rating} star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-yellow-300 rounded" style={{ width: `${ratePercentage.percentage}%` }} />
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {ratePercentage.percentage}%
        </span>
      </div>


      )

    })}
  

 
 
  </div>
  )
}

export default Reviews