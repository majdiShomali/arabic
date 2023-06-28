import { Link } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from 'react-router-dom';
import TotalRating from '../TotalRating';
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

function DyRecipeCardMeal({ card , Name ,index ,SAMeals,cardId,img,rate} ) {
const navigate = useNavigate()
  const { currentLinks, updateCurrentLinks } = useContext(UserContext);
  const { currentItems, updateCurrentItems } = useContext(UserContext);

  function ShowVideosMeals(index,slicedArrayMeals){
    navigate(`/ShowRecipe/${cardId}`);
    console.log(cardId)
    // let currentVideos0=   slicedArrayMeals[index].links.map((e)=>{ 
    //    return e
    //      })
    //      let currentItems=   slicedArrayMeals[index].Items.map((e)=>{ 
    //          return e
    //            })

              
        //  updateCurrentItems(currentItems)
        //  updateCurrentLinks(currentVideos0)
         }

  return (
    <div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-60">


    <div>
      <img
        className="w-full h-40 "
        src={`http://localhost:5000/${img}`}
        alt="Recipe Title"
      />
    </div>
    <div className="p-4">
      <h2 className="text-2xl text-[#E8CC95]">{Name}</h2>
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


              <Button
                className=" w-full mt-2 border  border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                variant="text"
                onClick={()=>ShowVideosMeals(index,SAMeals)}
              >
                Show recipe
              </Button>

    </div>
    <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#7b6f5b] text-gray-800 rounded-full pt-1 pb-1 pl-1 pr-1 text-xs uppercase">
    <TotalRating rating={rate} />
    </div>
  </div>
  );
}

export default DyRecipeCardMeal;


{/* <>
<DynamicComponent
Name={e.Name}
card={card}
index={i}
SAMeals={slicedArrayMeals}
/>
</> */}