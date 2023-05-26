import React from 'react'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import Pagination from "@mui/material/Pagination";


const ShowRecipe = () => {

    const { currentLinks, updateCurrentLinks } = useContext(UserContext);
    const { currentItems, updateCurrentItems } = useContext(UserContext);
     //----------------------pagination----------------------------//

     const [currentPage, setCurrentPage] = useState(1);

     let totalItems;
     let totalPages;
     let slicedArray;
   
     const itemsPerPage = 3;
   
     totalItems = currentItems.length;
   
     totalPages = Math.ceil(totalItems / itemsPerPage);
   
     const startIndex = (currentPage - 1) * itemsPerPage;
   
     const endIndex = startIndex + itemsPerPage;
   
     slicedArray = currentItems.slice(startIndex, endIndex);
   
     const handlePageChange = (event, pageNumber) => {
       setCurrentPage(pageNumber);
     };
  return (
   <>
     <fieldset>
      <legend >ingredients</legend>
      
   <div class="ShowRecipeContainer">

       {slicedArray.map((e,i)=>{
        return(
       <div id={e.name} className="ingredient_class vegetables" data-target={e.name}>
       <h4>{e.name}</h4>
       <img className="vegetablesimg"  src={require(`../${e.img}`)}/>      
       <div className="pContainerCard vegetablespd" ><p className="vegetablesp">{e.clicked}</p></div>   
       </div>
          )
      })}

    </div>
   
    </fieldset>
    <div className='PaginationCards'>   
    {(
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </div> 


   <div class="cook_now_videos">
        <div class="video-list">
              {currentLinks.map((e)=>{
          return(<iframe src={e} style={{height:"315px" ,width:"560px", marginBottom:"2rem"}} title="YouTube video player" allowFullScreen ></iframe>)
               })}
        </div>
   </div>
   
   
   </>
  )
}

export default ShowRecipe