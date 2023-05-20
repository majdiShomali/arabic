import React from 'react'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";


const ShowRecipe = () => {

    const { currentLinks, updateCurrentLinks } = useContext(UserContext);
    const { currentItems, updateCurrentItems } = useContext(UserContext);

  return (
   <>
   
   <div class="all_items_container">

       {currentItems.map((e,i)=>{
        return(
       <div id={e.name} className="ingredient_class vegetables" data-target={e.name}>
       <h4>{e.name}</h4>
       <img className="vegetablesimg"  src={require(`../${e.img}`)}/>      
       <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{e.clicked}</p></div>   
       </div>
          )
      })}

    </div>
   
   
   <div class="cook_now_videos">
        <div class="video-list">
              {currentLinks.map((e)=>{
          return(<iframe src={e} style={{height:"315px" ,width:"560px", marginBottom:"2rem"}} title="YouTube video player" allowfullscreen ></iframe>)
               })}
        </div>
   </div>
   
   
   </>
  )
}

export default ShowRecipe