import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import {RecipeContext} from "../../RecipeContext";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import TotalRating from "../TotalRating";
import Rating from "../../components/Rating";
import axios from "axios"
import Icon from "@mdi/react";
import Swal from "sweetalert2";

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
import { AllContext } from "../../AllDataContext";
function DyRecipeCardMeal({
  card,
  Name,
  index,
  SAMeals,
  cardId,
  img,
  rate,
  rating,
  Recipe,
}) {
   console.log(Recipe)
  const navigate = useNavigate();
  const { currentLinks, updateCurrentLinks } = useContext(UserContext);
  const { currentItems, updateCurrentItems } = useContext(UserContext);
  const { AllDataRecipesA, setAllDataRecipesA } = useContext(AllContext);
  const {UserAllData, setUserAllData} = useContext(AllContext);
  const {UserIdFinal, setUserIdFinal} = useContext(AllContext);
  const { RecipeRatedRefresh, setRecipeRatedRefresh } = useContext(RecipeContext);
  const {favRefresh,updateFavRefresh} =useContext(AllContext)

  const [tRate, setTrate] = useState(0);
  const [UserIdA, setUserIdA] = useState(0);


  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
  
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let id = response.data.user.id
        setUserIdA(id)
      
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } 
  };

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, []);






  useEffect(() => {
    // const  xx= rate?.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
    // const aaa = rate.length === 0 ? 1 :rate?.length
    setTrate(parseInt(rating));
    //   console.log(AllDataRecipesA)
  }, [AllDataRecipesA,RecipeRatedRefresh]);




  function ShowVideosMeals(index, slicedArrayMeals) {
    navigate(`/ShowRecipe/${cardId}`);
    console.log(cardId);
    // let currentVideos0=   slicedArrayMeals[index].links.map((e)=>{
    //    return e
    //      })
    //      let currentItems=   slicedArrayMeals[index].Items.map((e)=>{
    //          return e
    //            })

    //  updateCurrentItems(currentItems)
    //  updateCurrentLinks(currentVideos0)
  }
  const showSuccessAlert = (message) => {
    Swal.fire({
      title: message,
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {});
  };
const [heartType , setHeartType]=useState(true)

  const handleFAv = async (card) => {
    let UsersIdFavorite = [...(card.UsersIdFavorite || [])];

    const indexToRemove = UsersIdFavorite.indexOf(UserIdA);
    if (indexToRemove !== -1) {
      UsersIdFavorite.splice(indexToRemove, 1);
      showSuccessAlert("removed from favorites")
      setHeartType(true)
    } else {
      UsersIdFavorite.push(UserIdA);
      showSuccessAlert("added to favorites")
      setHeartType(false)
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/updateRecipeFav/${card._id}`,
        { UsersIdFavorite }
      );
      updateFavRefresh(response)
      // dispatch(fetchgamesS());
    } catch (error) {}
  };



  return (
    <div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-60">
                  {(Recipe.UsersIdFavorite.indexOf(UserIdA) === -1)  ? (
                <Icon
                  onClick={() => handleFAv(Recipe)}
                  className="absolute right-2 top-2 hover:scale-110 "
                  title="click to add"
                  color="red"
                  path={mdiHeartOutline}
                  size={1.5}
                />
              ) : (
                <Icon
                  onClick={() => handleFAv(Recipe)}
                  className="absolute right-2 top-2  hover:scale-110"
                  title="click to remove"
                  color="red"
                  path={mdiHeart}
                  size={1.5}
                />
              )}
     
     
     
      <div>
        <img
          className="w-full h-40 "
          src={`http://localhost:5000/${img}`}
          alt="Recipe Title"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
        <h2 className="text-1xl text-[#E8CC95] h-10">{Name}</h2>
        <div className=" bg-[#7b6f5b60] text-gray-800 rounded-full">
      
      {Recipe?.UsersIdRate?.includes(UserIdA) ?
        <TotalRating rating={tRate} />
        : 
        <Rating RecipeId={cardId} UserIdA={UserIdA} Recipe={Recipe} rating={tRate} />
      }
      </div>
      </div>
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
          onClick={() => ShowVideosMeals(index, SAMeals)}
        >
          Show recipe
        </Button>
      </div>
      {console.log(Recipe)}

    </div>
  );
}

export default DyRecipeCardMeal;

{
  /* <>
<DynamicComponent
Name={e.Name}
card={card}
index={i}
SAMeals={slicedArrayMeals}
/>
</> */
}
