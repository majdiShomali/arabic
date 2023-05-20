import React from 'react'
import './Recipes.css'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";

import card from '../components/landingPage/landing-img/card.jpg'
import star from '../components/landingPage/landing-img/star.png'
import fire from '../components/landingPage/landing-img/fire.png'
import { Link } from 'react-router-dom';


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


    const [Meals, setMeals] = useState([]);
    const [Drinks, setDrinks] = useState([]);
    const [Sweet, setSweet] = useState([]);

    useEffect(() => {

        setMeals((prevAccounts) => {
            const newItems = table.filter(
              (item) => item.Category === "cook_now_container"
            );
            return  (newItems)
            
          });
          setDrinks((prevAccounts) => {
            const newItems = table.filter(
              (item) => item.Category === "cook_now_container2"
            );
            return  (newItems)
            
          });
          setSweet((prevAccounts) => {
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


  return (
    <>
    
    <div  class ="cook_now_container cook_now_box"> 
    
    {
Meals.map((e,i)=>{
if(checkIfAllExist(e.ItemsName, MyListN )){

    return(
        <div className="card">
        
        <img src={card} alt={e.Name}/>
        <div className="cardContent">
        <p>{e.Name} Recipe</p>
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
        <p>500 Cal</p>
        </div>
        
        </div>
        
        <div className="cardButtons">
        <button onClick={()=>ShowVideosMeals(i)}><Link to="/ShowRecipe">Show recipe</Link></button>

        </div>
        
        </div>
        
        
        )

}

})


    }
    
    </div>


    <div  class ="cook_now_container cook_now_box"> 
    
    {
Drinks.map((e,i)=>{
if(checkIfAllExist(e.ItemsName, MyListN )){

    return(
      <div className="card">
        
      <img src={card} alt={e.Name}/>
      <div className="cardContent">
      <p>{e.Name} Recipe</p>
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
      <p>500 Cal</p>
      </div>
      
      </div>
        
        <div className="cardButtons">
        <button onClick={()=>ShowVideosDrinks(i)}><Link to="/ShowRecipe">Show recipe</Link></button>
        </div>
        
        </div>
        
        
        )

}

})


    }
    
    </div>

   

    
    </>
  )
}

export default Recipes