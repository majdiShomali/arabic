import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import DyRecipeCardMeal from "../../components/user/DyRecipeCardMeal";
import Rating from "../../components/Rating";
import ShowRecipeGa from "./ShowRecipeGa";
import { AllContext } from "../../AllDataContext";
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

const ShowRecipe = ({ userIdApp0 }) => {
  const { AllDataGet, setAllDataGet } = useContext(AllContext);
  console.log(AllDataGet[0]?.img);
  console.log(userIdApp0);
  const { id } = useParams();
  const [clinks, setClinks] = useState([]);
  const [cItems, setItems] = useState([]);
  const [RecipeIngs, setRecipeIngs] = useState([]);
  const [Recipe, setRecipe] = useState([]);
  const [RecipeRating, setRecipeRating] = useState(0);

  const oneRecipe = async () => {
    let x;
    try {
      const response = await axios.get(
        `http://localhost:5000/api/recipe/${id}`
      );
      setItems(response.data[0].Items);
      setClinks(response.data[0].links);
      console.log(response.data[0].ItemsId);
      setRecipe(response.data[0]);
      x = response.data[0].ItemsId;
      const requestData = { ItemsId: x };
      console.log(x);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/IngredientMatch",
          {
            params: {
              ItemsId: JSON.stringify(x),
            },
          }
        );

        console.log(response.data);
        setRecipeIngs(response.data);
      } catch (error) {
        console.error("Error inserting data:", error);
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };
  useEffect(() => {
    oneRecipe();
  }, []);

  console.log(Recipe.comments);
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

  const [comment, setComment] = useState("");
  const handleAddComment = async () => {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    try {
      let currentComment = {
        userId: userIdApp0,
        comment: comment,
        img: AllDataGet[0]?.img,
        time: formattedDateTime,
      };

      let allComments = Recipe.comments;
      allComments.push(currentComment);
      const updatedRecipe = {
        comments: allComments,
      };
      const response = await axios.put(
        `http://localhost:5000/api/updateRecipeComment/${Recipe._id}`,
        updatedRecipe
      );
      console.log(response);
      // getComments()
      oneRecipe()
    } catch (error) {}
  };

  const getComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/comment/${userIdApp0}`
      );
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row  h-full w-full overflow-x-hidden ">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 hidden md:block lg:block">
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs ">
                <span className="font-bold">ingredients</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {RecipeIngs.length}
                </span>
              </div>

              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-auto overflow-y-auto ">
                {RecipeIngs?.map((e) => {
                  return (
                    <>
                      <ListItem key={e?.ingredientName}>
                        <ListItemPrefix>
                          <img
                            className="w-10"
                            src={`http://localhost:5000/${e?.img}`}
                          />
                        </ListItemPrefix>
                        {e?.ingredientName}
                      </ListItem>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col lg:flex-col md:flex-col sm:flex-col justify-center items-center">
                  <div className="">
                    {Recipe?.links?.map((e) => {
                      return (
                        <iframe
                          key={e}
                          src={e}
                          className="w-96 h-60"
                          title="YouTube video player"
                          allowFullScreen
                        ></iframe>
                      );
                    })}
                  </div>
                  <div>
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button onClick={handleAddComment}>Add comment</button>
                    <div>
                      {Recipe?.comments?.map((comment) => {
                        return (
                          <>
                            {" "}


                            <div className="flex">
                             <img className="w-5 h-5 rounded-full" src={`http://localhost:5000/${comment?.img}`}/>
                            <p>{comment.comment}</p>

                            </div>
                            
                          </>
                        );
                      })}
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
  );
};

export default ShowRecipe;
