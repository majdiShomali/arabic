import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import DyRecipeCardMeal from "../../components/user/DyRecipeCardMeal";
const ProviderProfile = ({userIdApp0}) => {
    
 const [providerRecipes, setProviderRecipes] = useState([])

 const providerAllRecipes = async (req, res) => { 


    try {
        const response = await axios.get(
          `http://localhost:5000/api/providerRecipes/${userIdApp0}`
        );
        console.log(response.data);
        setProviderRecipes(response.data)
      } catch (error) {
        console.error("Error retrieving data:", error);
      }


 }


 useEffect(()=>{
    providerAllRecipes()
 },[])




  return (
    <div class="grid grid-cols-4">
    {providerRecipes.map((e, i) => {     
        return (
          <DyRecipeCardMeal
            key={e.recipeName}
            Name={e.recipeName}
            card={"card"}
            index={i}
            SAMeals={providerRecipes}
            img={e.img}
            cardId={e._id}
          />
        );
    
    })}
  </div>
  )
}

export default ProviderProfile