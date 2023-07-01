import React from 'react'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import DyRecipeCardMeal from '../../components/user/DyRecipeCardMeal';
import Rating from '../../components/Rating';
import ShowRecipeGa from './ShowRecipeGa';


import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Button,
} from "@material-tailwind/react";

const ShowRecipe = ({userIdApp0}) => {
  console.log(userIdApp0)
  const { id } = useParams();
const [clinks,setClinks]= useState([])
const [cItems,setItems]= useState([])
const [RecipeIngs,setRecipeIngs]= useState([])
const [Recipe,setRecipe]= useState([])
const [RecipeRating,setRecipeRating]= useState(0)


  const oneRecipe = async () => {
    let x
    try {
        const response = await axios.get(`http://localhost:5000/api/recipe/${id}`);
        setItems((response.data[0].Items))
        setClinks(response.data[0].links)
        console.log(response.data[0].ItemsId)
        setRecipe(response.data[0])
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

console.log(Recipe)
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
   <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1">

       {slicedArray.map((e,i)=>{
        {console.log(e);}
        return(
      //  <div key={e.ingredientName} id={e.ingredientName} className=" " data-target={e.ingredientName}>
      //  <h4>{e.ingredientName}</h4>
       
      //  <img className=""src={`http://localhost:5000/${e.img}`}/>      
      //  <div className=" " ><p className="">{e.ingredientFlag}</p></div>   
      //  </div>


<div
key={e.ingredientName}
// onClick={() => handleUpdate(e._id , e)}
className={` flex-shrink-0 m-1 relative overflow-hidden ${ e.ingredientType=="vegetables" ?  "bg-[#2bda2b]" : "bg-[#d7e423]" }  rounded-lg max-w-xs shadow-lg w-48 h-60 hover:scale-110 hover:cursor-pointer`}
>
<svg
  className="absolute bottom-0 left-0 mb-8"
  viewBox="0 0 375 283"
  fill="none"
  style={{ transform: "scale(1.5)", opacity: "0.1" }}
>
  <rect
    x="159.52"
    y={175}
    width={152}
    height={152}
    rx={8}
    transform="rotate(-45 159.52 175)"
    fill="white"
  />
  <rect
    y="107.48"
    width={152}
    height={152}
    rx={8}
    transform="rotate(-45 0 107.48)"
    fill="white"
  />
</svg>
<div className="relative pt-10 px-10 flex items-center justify-center">
  <div
    className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
    style={{
      background: "radial-gradient(black, transparent 60%)",
      transform:
        "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
      opacity: "0.2",
    }}
  />
  <img
    className="relative w-40 h-32"
    src={`http://localhost:5000/${e.img}`}
    alt=""
  />
</div>
<div className=" text-white px-6 pb-6 mt-6">
  <span className="block opacity-75 -mb-1">{e.ingredientType}</span>
  <div className="flex justify-between">
    <span className="block font-semibold ">{e.ingredientName}</span>


  </div>
</div>
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

 {/* ;;;;; */}
<div className=' w-full flex lg:flex-row md:flex-col sm:flex-col justify-center items-center '>
 <div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-60">
<div>
  <img
    className="w-full h-40 "
    src={`http://localhost:5000/${Recipe.img}`}
    alt="Recipe Title"
  />
</div>
<div className="p-4">
  <h2 className="text-2xl text-[#E8CC95]">{Recipe.recipeName}</h2>
  <div className="flex justify-between mt-2 mb-2 text-[#158467]">
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
  <p className="mb-2 mt-2 text-gray-800 text-sm">
    A recipe that's quick and easy to make and super tasty!
  </p>

  {/* <button className="text-white bg-[#E8CC95] p-2 rounded-md w-full uppercase"
 onClick={()=>ShowVideosMeals(index,SAMeals)}>Show recipe
  </button> */}



</div>
<div className="absolute top-0 right-0 mt-2 mr-2 bg-[#7b6f5b] text-gray-800 rounded-full pt-1 pb-1 pl-1 pr-1 text-xs uppercase">
<Rating RecipeId={Recipe._id} userIdApp0={userIdApp0} Recipe={Recipe} />
</div>




</div>


<div className="">
        <div className="">
              {clinks?.map((e)=>{
          return(<iframe key={e} src={e} className='w-96 h-60' title="YouTube video player" allowFullScreen ></iframe>)
               })}
        </div>
   </div>

   </div>
 {/* ;;;;; */}
    </div>
 
   
   </div>


   <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row  h-full w-full overflow-x-hidden">

            
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 display:none">
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {/* {reporters.length} */}
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-auto overflow-y-auto">
                {
                  // console.log(RecipeIngs[0].ingredientName)

                  RecipeIngs?.map((e) => {
                    return (
                      <>
                        <ListItem key={e?.ingredientName}>
                          <ListItemPrefix>
                            <img
                              className="w-10"
                            //   src={`http://localhost:5000/${e?.img}`}
                            />
                          </ListItemPrefix>
                          {e?.ingredientName}
                        </ListItem>
                      </>
                    );
                  })
                }
              </div>
            </div>
          </div>



          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="">
                    <div className="">
                      <iframe
                        // src={Recipe?.links[0]}
                        className="w-96 h-60"
                        title="YouTube video player"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>







   {/* <ShowRecipeGa Recipe={Recipe} RecipeIngs={RecipeIngs}/> */}
   </>
  )
}

export default ShowRecipe