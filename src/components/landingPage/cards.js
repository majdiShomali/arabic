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

  const itemsPerPage = 2;

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

<fieldset>
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
<div className="card">
<img src={card} alt=""/>
<div className="cardContent">
<p>{e.Name}</p>
<div className="cardMain1">
<p>Lorem ipsum</p>

<div className="cardRating">
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
</div>
</div>
<div className="cardMain2">
<img src={fire} alt="cal"/>
<p>Lorem</p>
</div>
</div>
<div className="cardButtons">
<button onClick={()=>ShowVideosMeals(i)}><Link to="/ShowRecipe">Show recipe</Link></button>
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
          count={totalPagesMeals}
          page={currentPageMeals}
          onChange={handlePageChangeMeals}
        />
      )}
    </div> 


    <fieldset>
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
<div className="card">
<img src={card} alt=""/>
<div className="cardContent">
<p>{e.Name}</p>
<div className="cardMain1">
<p>Lorem ipsum</p>

<div className="cardRating">
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
</div>
</div>
<div className="cardMain2">
<img src={fire} alt="cal"/>
<p>Lorem</p>
</div>
</div>
<div className="cardButtons">
<button onClick={()=>ShowVideosDrinks(i)}><Link to="/ShowRecipe">Show recipe</Link></button>
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