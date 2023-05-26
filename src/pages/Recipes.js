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






    <fieldset className='AdminFieldset'>
      <legend >Meals:</legend>
      
    
    <div  class ="cook_now_container cook_now_box"> 
    
    {
slicedArrayMeals.map((e,i)=>{
if(checkIfAllExist(e.ItemsName, MyListN )){

    return(

<div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-25">
  <div>
    <img
      className="w-full h-22"
      // src={require(`../Images/meals/${e.Name}.jpg`)}
      src={card}
      alt="Recipe Title"
    />
  </div>
  <div className="p-4">
    <h2 className="text-2xl text-[#E8CC95]">{e.Name}</h2>
    <div className="flex justify-between mt-2 mb-2 text-gray-500">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-1 lg:text-xl">30m</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-1 lg:text-xl">10</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
        <span className="ml-1 lg:text-xl">1-2</span>
      </div>
    </div>
    <p className="mb-2 text-gray-500">
      A recipe that's quick and easy to make and super tasty!
    </p>
    <button className="text-white bg-[#E8CC95] p-2 rounded-md w-full uppercase"
    onClick={()=>ShowVideosMeals(i)}>
      <Link to="/ShowRecipe">Show recipe</Link>
    </button>
  </div>
  <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#E8CC95] text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
    <span>Medium</span>
  </div>
</div>
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

    <fieldset className='AdminFieldset'>
      <legend >Drinks:</legend>
      
  
    <div  class ="cook_now_container cook_now_box"> 
    
    {
slicedArrayDrinks.map((e,i)=>{
if(checkIfAllExist(e.ItemsName, MyListN )){

    return(
      <div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-25">
  <div>
    <img
      className="w-full h-22"
      // src={require(`../Images/meals/${e.Name}.jpeg`)}
      src={card}
      alt="Recipe Title"
    />
  </div>
  <div className="p-4">
    <h2 className="text-2xl text-green-400">{e.Name}</h2>
    <div className="flex justify-between mt-2 mb-2 text-gray-500">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-1 lg:text-xl">30m</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-1 lg:text-xl">10</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
        <span className="ml-1 lg:text-xl">1-2</span>
      </div>
    </div>
    <p className="mb-2 text-gray-500">
      A recipe that's quick and easy to make and super tasty!
    </p>
    <button className="text-white bg-[#E8CC95] p-2 rounded-md w-full uppercase"
    onClick={()=>ShowVideosDrinks(i)}>
      <Link to="/ShowRecipe">Show recipe</Link>
    </button>
  </div>
  <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#E8CC95] text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
    <span>Medium</span>
  </div>
</div>
        
        
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