import React, { useState,useContext,useEffect } from "react";
import axios from "axios";
import {AllContext} from "../AllDataContext"
import TotalRating from "./TotalRating";
import Swal from "sweetalert2";
import {RecipeContext} from "../RecipeContext";
const Rating = ({ RecipeId, Recipe ,UserIdA,rating }) => {
console.log(RecipeId, Recipe ,UserIdA,rating )


  console.log(RecipeId,Recipe)
  const starCount = 5; // Total number of stars
  const [filledStars, setFilledStars] = useState(0);
  const [RatingStatus, setRatingStatus] = useState(false);
  const { AllDataGet,setAllDataGet} = useContext(AllContext);
  const {UserAllData, setUserAllData} = useContext(AllContext);
    const { RecipeRatedRefresh, setRecipeRatedRefresh } = useContext(RecipeContext);
    const {favRefresh,updateFavRefresh} =useContext(AllContext)

useEffect(()=>{
  if(Recipe?.UsersIdRate?.includes(UserIdA)){
    setRatingStatus(true)
  }
},[filledStars,Recipe,UserAllData])


const showSuccessAlert = (message) => {
  Swal.fire({
    title: `Thank you for rate `,
    icon: "success",
    confirmButtonText: "OK",
  }).then(() => {
  });
};

  const handleStarClick = async (starIndex) => {
    setFilledStars(starIndex + 1);

    let ids = Recipe.UsersIdRate.length > 0 ?  [...Recipe.UsersIdRate,UserIdA]  : [UserIdA]
    let newrate =Recipe.rate.length  > 0   ? [...Recipe.rate,starIndex + 1]      :    [starIndex + 1]  
    const  sum=   newrate.length === 0 ? (newrate[0]) :  newrate?.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
    const  avg = newrate.length === 0 ? 2 :newrate?.length

    try {
      const updatedRecipe = {
        UsersIdRate:ids,
        rate:newrate,
        rating:sum/avg
      };

    const NupdatedRecipe=   await axios.put(`http://localhost:5000/api/recipes/${RecipeId}`, updatedRecipe);
    showSuccessAlert(newrate)
    setRatingStatus(true)
    setRecipeRatedRefresh(NupdatedRecipe)
    updateFavRefresh(NupdatedRecipe)
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
    {RatingStatus === false && localStorage.auth !== undefined ? 
      
      <div className="flex items-center">
      {Array(starCount)
        .fill()
        .map((_, index) => (
          <svg
            key={index}
            aria-hidden="true"
            className={`w-5 h-5 ${
              index < filledStars
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-500"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleStarClick(index)}
          >
            <title>
              {index + 1 <= filledStars ? "Filled star" : "Empty star"}
            </title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
    </div>
  
      :
     <TotalRating rating={rating}/>
    
    // <p className="text-white">thanks for rating</p>
  }
    </>
  );
};

export default Rating;
