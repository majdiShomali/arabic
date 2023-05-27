import React from 'react'
import './Recipes.css'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import  image0 from "../Images/meals/majdi.jpg"
import card from '../components/landingPage/landing-img/card.jpg'
import star from '../components/landingPage/landing-img/star.png'
import fire from '../components/landingPage/landing-img/fire.png'
import { Link } from 'react-router-dom';
import Icon from "@mdi/react";
import { mdiFridge } from "@mdi/js";
import { mdiHamburgerPlus } from "@mdi/js";
import { mdiStove } from "@mdi/js";
import aboutMeal from "../Images/meals/majdi.jpg";
import Pagination from "@mui/material/Pagination";

import DyRecipeCardMeal from '../components/DyRecipeCardMeal'
import DyRecipeCardDrink from '../components/DyRecipeDrinkCard'

const Recipes = () => {

    // const { MyList, updateMyList } = useContext(UserContext);
    // const { MyListN, updateMyListN } = useContext(UserContext);

    // const [currentLinks, setCurrentLinks] = useState([]);
    // const [currentItems, setCurrentItems] = useState([]);

    const { currentLinks, updateCurrentLinks } = useContext(UserContext);
    const { currentItems, updateCurrentItems } = useContext(UserContext);


    let localTable =[]
    let localListN =[]

    if(localStorage.table !=[] && localStorage.table !=null && localStorage.table !=undefined ){
      localTable=JSON.parse(localStorage.table)
      localListN=JSON.parse(localStorage.MyListN)
    }

    const [table, setTable] = useState(localTable);
    const [MyListN, updateMyListN] = useState(localListN);


    // const [Meals, setMeals] = useState([]);
    // const [Drinks, setDrinks] = useState([]);
    // const [Sweet, setSweet] = useState([]);

    const { Meals, updateMeals   } = useContext(UserContext);
    const { Drinks, updateDrinks } = useContext(UserContext);
    const { Sweet, updateSweet   } = useContext(UserContext);

    useEffect(() => {

      updateMeals((prevAccounts) => {
            const newItems = table.filter(
              (item) => item.Category === "cook_now_container"
            );
            return  (newItems)
            
          });
          updateDrinks((prevAccounts) => {
            const newItems = table.filter(
              (item) => item.Category === "cook_now_container2"
            );
            return  (newItems)
            
          });
          updateSweet((prevAccounts) => {
            const newItems = table.filter(
              (item) => item.Category === "cook_now_container3"
            );
            return  (newItems)
            
          });

      },[]);


    function checkIfAllExist(meal_c, my_list_c )  {
    return meal_c.filter(h=> !my_list_c.includes(h)).length===0;  }


    function ShowVideosMeals(index){
   let currentVideos0=   Meals[index].Links.map((e)=>{ 
      return e
        })
        let currentItems=   Meals[index].Items.map((e)=>{ 
            return e
              })
        updateCurrentItems(currentItems)
        updateCurrentLinks(currentVideos0)
        }

        function ShowVideosDrinks(index){
            let currentVideos0=   Drinks[index].Links.map((e)=>{ 
               return e
                 })
                 let currentItems=   Drinks[index].Items.map((e)=>{ 
                     return e
                       })
                 updateCurrentItems(currentItems)
                 updateCurrentLinks(currentVideos0)
                 }
                 const [currentPageMeals, setCurrentPageMeals] = useState(1);
                 const [currentPageDrinks, setCurrentPageDrinks] = useState(1);
                 const [currentPageSweet, setCurrentPageSweet] = useState(1);
               
               
                 let totalItemsMeals;
                 let totalItemsDrinks;
                 let totalItemsSweet;
               
                 let totalPagesMeals;
                 let totalPagesDrinks;
                 let totalPagesSweet;
               
                 let slicedArrayMeals;
                 let slicedArrayDrinks;
                 let slicedArraySweet;
               
                 const itemsPerPage = 4;
               
                 totalItemsMeals = Meals.length;
                 totalItemsDrinks = Drinks.length;
                 totalItemsSweet = Sweet.length;
               
                 totalPagesMeals = Math.ceil(totalItemsMeals / itemsPerPage);
                 totalPagesDrinks = Math.ceil(totalItemsDrinks / itemsPerPage);
                 totalPagesSweet = Math.ceil(totalItemsSweet / itemsPerPage);
               
                 const startIndexMeals = (currentPageMeals - 1) * itemsPerPage;
                 const startIndexDrinks = (currentPageDrinks - 1) * itemsPerPage;
                 const startIndexSweet = (currentPageSweet - 1) * itemsPerPage;
               
                 const endIndexMeals = startIndexMeals + itemsPerPage;
                 const endIndexDrinks = startIndexDrinks + itemsPerPage;
                 const endIndexSweet = startIndexSweet + itemsPerPage;
               
                 slicedArrayMeals = Meals.slice(startIndexMeals, endIndexMeals);
                 slicedArrayDrinks =Drinks.slice(startIndexDrinks, endIndexDrinks);
                 slicedArraySweet = Sweet.slice(startIndexSweet, endIndexSweet);

                 const handlePageChangeMeals = (event, pageNumber) => {
                  setCurrentPageMeals(pageNumber);
                };
                const handlePageChangeDrinks = (event, pageNumber) => {
                  setCurrentPageDrinks(pageNumber);
                };
                const handlePageChangeSweet = (event, pageNumber) => {
                  setCurrentPageSweet(pageNumber);
                };
  return (
    <>


<div className="AboutUsed m-5 px-8">
      <div className="containerr">
        <div className="text">
          <h1 className="text-3xl pb-5 ">All available recipes</h1>
          <p className="aboutP">
          all recipes based in your kitchen ingredients 
          </p>
          <div className="icons">
            <div className="icoon">
              <div>
              <Icon path={mdiFridge} size={2} />
              </div>
              <p>Fridge</p>
            </div>
            <div className="icoon">
              <div>
              <Icon path={mdiHamburgerPlus} size={2} />
              </div>
              <p>Add items</p>
            </div>
            <div className="icoon">
              <div>
              <Icon path={mdiStove} size={2} />
              </div>
              <p>Start cooking</p>
            </div>
          </div>
        </div>
        <div className="imgAbout">
          <img className="img-new" src={aboutMeal} alt="" />
        </div>
      </div>
    </div>






    <fieldset className='AdminFieldset bg-[#f5f5f5]'>
      <legend >Meals:</legend>
      
    
    <div  class ="cook_now_container cook_now_box"> 
    
    {
slicedArrayMeals.map((e,i)=>{
if(checkIfAllExist(e.ItemsName, MyListN )){

    return(
<DyRecipeCardMeal
Name={e.Name}
card={card}
index={i}
SAMeals={slicedArrayMeals}
/>

 )}
})


    }
    
    </div>
    </fieldset>
    <div className='PaginationCards'>   
    {(
        <Pagination
          count={totalPagesMeals}
          page={currentPageMeals}
          onChange={handlePageChangeMeals}
        />
      )}
    </div> 

    <fieldset className='AdminFieldset bg-[#f5f5f5]'>
      <legend >Drinks:</legend>
      
  
    <div  className ="cook_now_container cook_now_box "> 
    
    {
slicedArrayDrinks.map((e,i)=>{
if(checkIfAllExist(e.ItemsName, MyListN )){

    return(
      <DyRecipeCardDrink
      Name={e.Name}
      card={card}
      index={i}
      SADrinks={slicedArrayDrinks}
      />
        
        
        )

}

})


    }
    
    </div>

    </fieldset>

    <div className='PaginationCards'>   
    {(
        <Pagination
          count={totalPagesDrinks}
          page={currentPageDrinks}
          onChange={handlePageChangeDrinks}
        />
      )}
    </div> 
    </>
  )
}

export default Recipes