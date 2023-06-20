import React from 'react'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
const ShowRecipe = () => {
  const { id } = useParams();
const [clinks,setClinks]= useState([])
const [cItems,setItems]= useState([])
  console.log(id);

  const oneRecipe = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/recipe/${id}`);
        console.log(response.data)
        setItems(response.data[0].Items)
        setClinks(response.data[0].links)
    }

  catch (error) {
    console.error("Error inserting data:", error);
  }
  
  }
  useEffect(()=>{

    oneRecipe()


  },[])





    const { currentLinks, updateCurrentLinks } = useContext(UserContext);
    const { currentItems, updateCurrentItems } = useContext(UserContext);
     //----------------------pagination----------------------------//

     const [currentPage, setCurrentPage] = useState(1);

     let totalItems;
     let totalPages;
     let slicedArray;
   
     const itemsPerPage = 4;
   
     totalItems = cItems.length;
   
     totalPages = Math.ceil(totalItems / itemsPerPage);
   
     const startIndex = (currentPage - 1) * itemsPerPage;
   
     const endIndex = startIndex + itemsPerPage;
   
     slicedArray = cItems.slice(startIndex, endIndex);
   
     const handlePageChange = (event, pageNumber) => {
       setCurrentPage(pageNumber);
     };
  return (
   <>
  <div className='mt-10  '>
    <div >
   <div className="ShowRecipeContainer">

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
   
   
    <div className='PaginationCards mt-5 mb-10 '>   
    {(
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </div> 

    </div>
   <div class="cook_now_videos">
        <div class="video-list">
              {clinks?.map((e)=>{
          return(<iframe src={e} style={{height:"315px" ,width:"560px", marginBottom:"2rem"}} title="YouTube video player" allowFullScreen ></iframe>)
               })}
        </div>
   </div>
   
   </div>
   </>
  )
}

export default ShowRecipe