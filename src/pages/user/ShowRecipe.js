import React from 'react'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
const ShowRecipe = () => {
  const { id } = useParams();
const [clinks,setClinks]= useState([])
const [cItems,setItems]= useState([])
const [RecipeIngs,setRecipeIngs]= useState([])


console.log(id)
  const oneRecipe = async () => {
    let x
    try {
        const response = await axios.get(`http://localhost:5000/api/recipe/${id}`);
        setItems((response.data[0].Items))
        setClinks(response.data[0].links)
        console.log(response.data[0].ItemsId)

         x =response.data[0].ItemsId
         const requestData = { ItemsId: x };
         console.log(x)
        try {
          const response = await axios.get('http://localhost:5000/api/IngredientMatch', {
            params: {
              ItemsId: JSON.stringify(x),
            },
          });
         
          console.log(response.data)
          setRecipeIngs(response.data)
      }
  
    catch (error) {
      console.error("Error inserting data:", error);
    }

    }

  catch (error) {
    console.error("Error inserting data:", error);
  }
  
  }
  useEffect(()=>{

    oneRecipe()


  },[])

console.log(clinks)
     //----------------------pagination----------------------------//

     const [currentPage, setCurrentPage] = useState(1);

     let totalItems;
     let totalPages;
     let slicedArray;
   
     const itemsPerPage = 4;
   
     totalItems = RecipeIngs.length;
   
     totalPages = Math.ceil(totalItems / itemsPerPage);
   
     const startIndex = (currentPage - 1) * itemsPerPage;
   
     const endIndex = startIndex + itemsPerPage;
   
     slicedArray = RecipeIngs.slice(startIndex, endIndex);
   
     const handlePageChange = (event, pageNumber) => {
       setCurrentPage(pageNumber);
     };
  return (
   <>
  <div className='mt-10  '>
    <div >
   <div className="">

       {slicedArray.map((e,i)=>{
        {console.log(e);}
        return(
       <div key={e.ingredientName} id={e.ingredientName} className=" " data-target={e.ingredientName}>
       <h4>{e.ingredientName}</h4>
       
       <img className=""src={`http://localhost:5000/${e.img}`}/>      
       <div className=" " ><p className="">{e.ingredientFlag}</p></div>   
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
          return(<iframe src={e} className='w-96 h-60' title="YouTube video player" allowFullScreen ></iframe>)
               })}
        </div>
   </div>
   
   </div>
   </>
  )
}

export default ShowRecipe