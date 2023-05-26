import React, { Component } from 'react'
import card from './landing-img/card.jpg'
import star from './landing-img/star.png'
import fire from './landing-img/fire.png'
import "./cards.css"
// import PaginationNav1Presentation from '../navigation'
import { useState ,useEffect } from 'react';
import Pagination from "@mui/material/Pagination";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

import { Link } from 'react-router-dom'
import DynamicComponent from '../DynamicComponent'
const Cards = () => {
  let localTable =[]

  if(localStorage.table !=[] && localStorage.table !=null && localStorage.table !=undefined ){
    localTable=JSON.parse(localStorage.table)

  }
  const [table, setTable] = useState(localTable);




  const { currentLinks, updateCurrentLinks } = useContext(UserContext);
  const { currentItems, updateCurrentItems } = useContext(UserContext);

  const { Meals, updateMeals   } = useContext(UserContext);
  const { Drinks, updateDrinks } = useContext(UserContext);
  const { Sweet, updateSweet   } = useContext(UserContext);

  //-----------------------search------------------------//
const [searchTermMeals, setSearchTermMeals] = useState('');
const [FilterDataMeals, setFilterDataMeals] = useState([]);

const [searchTermDrinks, setSearchTermDrinks] = useState('');
const [FilterDataDrinks, setFilterDataDrinks] = useState([]);


  useEffect(() => {

    updateMeals(() => {
          const newItems = table.filter(
            (item) => item.Category === "cook_now_container"
          );
          return  (newItems)
          
        });

        setFilterDataMeals(() => {
          const newItems = table.filter(
            (item) => item.Category === "cook_now_container"
          );
          return  (newItems)
          
        });

        updateDrinks(() => {
          const newItems = table.filter(
            (item) => item.Category === "cook_now_container2"
          );
          return  (newItems)
          
        });


        setFilterDataDrinks(() => {
          const newItems = table.filter(
            (item) => item.Category === "cook_now_container2"
          );
          return  (newItems)
          
        });

        updateSweet(() => {
          const newItems = table.filter(
            (item) => item.Category === "cook_now_container3"
          );
          return  (newItems)
          
        });

    },[]);


//-----------------------search------------------------//

const filterDataByNameMeals = (searchTermMeals) => {
  
  const filteredDataMeals = Meals.filter(item =>

    item.Name.toLowerCase().includes(searchTermMeals.toLowerCase())
  );
  setFilterDataMeals(filteredDataMeals);
  setCurrentPageMeals(1)
}

const filterDataByNameDrinks = (searchTermDrinks) => {
  
  const filteredDataDrinks = Drinks.filter(item =>

    item.Name.toLowerCase().includes(searchTermDrinks.toLowerCase())
  );
  setFilterDataDrinks(filteredDataDrinks);
  setCurrentPageDrinks(1)
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

  totalItemsMeals = FilterDataMeals.length;
  totalItemsDrinks = FilterDataDrinks.length;
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

  slicedArrayMeals = FilterDataMeals.slice(startIndexMeals, endIndexMeals);
  slicedArrayDrinks = FilterDataDrinks.slice(startIndexDrinks, endIndexDrinks);
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


  function ShowVideosMeals(index){
    let currentVideos0=   slicedArrayMeals[index].Links.map((e)=>{ 
       return e
         })
         let currentItems=   slicedArrayMeals[index].Items.map((e)=>{ 
             return e
               })
         updateCurrentItems(currentItems)
         updateCurrentLinks(currentVideos0)
         }
 
         function ShowVideosDrinks(index){
             let currentVideos0=   slicedArrayDrinks[index].Links.map((e)=>{ 
                return e
                  })
                  let currentItems=   slicedArrayDrinks[index].Items.map((e)=>{ 
                      return e
                        })
                  updateCurrentItems(currentItems)
                  updateCurrentLinks(currentVideos0)
                  }






  return (
    <>

<fieldset className='AdminFieldset'>
      <legend >
        All Meals:
        <input type='text'placeholder='Search' style={{border:"1px solid black",}}
        
        value={searchTermMeals}
       onChange={(e) =>{
        setSearchTermMeals(e.target.value);
       filterDataByNameMeals(e.target.value);
      }
  }
        
        />
</legend>



    <div className='cardContainer'>
 {
slicedArrayMeals.map((e,i) => {
return(
<>
<DynamicComponent
Name={e.Name}
card={card}
index={i}
SAMeals={slicedArrayMeals}
/>
</>
)
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
      <legend >
        All Drinks:
        <input type='text'placeholder='Search' style={{border:"1px solid black",}}
        
        value={searchTermDrinks}
         onChange={(e) =>{
        setSearchTermDrinks(e.target.value);
       filterDataByNameDrinks(e.target.value);
      }
  }
        
        />
</legend>




    <div className='cardContainer'>
 {
slicedArrayDrinks.map((e,i) => {
return(
<div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-25">
  <div>
    <img
      className="w-full h-22"
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
    onClick={()=>ShowVideosDrinks(i)}>
      <Link to="/ShowRecipe">Show recipe</Link>
    </button>
  </div>
  <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#E8CC95] text-gray rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
    <span>Medium</span>
  </div>
</div>
)
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

export default Cards