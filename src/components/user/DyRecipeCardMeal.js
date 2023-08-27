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

//---------------------redux-----------------//
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../actions/GetRecipes';
import { fetchFavRecipes } from '../../actions/GetFavRecipes';
import { fetchUserNew } from '../../actions/UserActions';


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

const { loading, data, error } = useSelector((state) => state.fetchRecipes);
const { loading: favLoading, data: favData, error: favError } = useSelector((state) => state.fetchFavRecipes);
const { loading: userLoadingNew, data: userDataNew, error: userErrorNew } = useSelector((state) => state.userNew);

const dispatch = useDispatch();
useEffect(() => {
  if(localStorage.auth != null){ 
    const token = localStorage.getItem("auth");
    dispatch(fetchUserNew(token));
}
}, [dispatch]);

useEffect(() => {
  setUserIdA(userDataNew[0]?._id)
}, [userDataNew]);

  const navigate = useNavigate();
  const { AllDataRecipesA, setAllDataRecipesA } = useContext(AllContext);
  const { RecipeRatedRefresh, setRecipeRatedRefresh } = useContext(RecipeContext);

  const [tRate, setTrate] = useState(0);
  const [UserIdA, setUserIdA] = useState(0);



  useEffect(() => {
    setTrate(parseInt(rating));
  }, [AllDataRecipesA,RecipeRatedRefresh]);




  function ShowVideosMeals(index, slicedArrayMeals) {
    navigate(`/ShowRecipe/${cardId}`);
 
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
      dispatch(fetchFavRecipes(UserIdA));
      dispatch(fetchRecipes());


    } catch (error) {}
  };



  return (
    <div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-60 mx-5 my-2">
             {(localStorage.auth !== undefined) ?
              <>
             {(Recipe.UsersIdFavorite.indexOf(UserIdA) === -1 )  ? (
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
              </>
                 :null
            } 
     
      <div>
        <img
          className="w-full h-40 "
          src={`http://localhost:5000/${img}`}
          alt="Recipe Title"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mt-1 mb-2 h-10">
        <div className="  text-gray-800 rounded-full flex items-center">
      
      {Recipe?.UsersIdRate?.includes(UserIdA) ?
        <TotalRating rating={tRate} Recipe={Recipe} />
        : 
        <Rating RecipeId={cardId} UserIdA={UserIdA} Recipe={Recipe} rating={tRate} />
      }
      </div>
      <div className="flex items-center">
      <h2 className="text-1xl text-end text-[#E8CC95]  text-center text-center">{Name}</h2>
      </div>
      </div>
        {/* <div className="flex justify-between mt-2 mb-2 text-[#158467]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            <span className="ml-1 lg:text-md">30m</span>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            <span className="ml-1 lg:text-md">10</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="ml-1 lg:text-md">1-2</span>
          </div>
        </div> */}
        <p className="mb-2 h-20 mt-2  text-right text-gray-800 text-sm ">
          {Recipe?.description}
        </p>
 

        <Button
          className=" w-full mt-2 border  border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
          variant="text"
          onClick={() => ShowVideosMeals(index, SAMeals)}
        >
          اعرض الوصفة
        </Button>
      </div>
      

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
