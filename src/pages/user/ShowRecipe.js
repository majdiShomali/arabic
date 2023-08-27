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
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
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
import { locale } from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserNew } from "../../actions/UserActions";
import AddBlog from "../../components/user/AddBlog";
import Reviews from "../../components/Reviews";
const ShowRecipe = ({ userIdApp0 }) => {
  const { AllDataGet, setAllDataGet } = useContext(AllContext);
  const { id } = useParams();
  const [clinks, setClinks] = useState([]);
  const [cItems, setItems] = useState([]);
  const [RecipeIngs, setRecipeIngs] = useState([]);
  const [Recipe, setRecipe] = useState([]);
  const [RecipeRating, setRecipeRating] = useState(0);
  const [Loading, setLoading] = useState(true);

  const {
    loading: userLoadingNew,
    data: userDataNew,
    error: userErrorNew,
  } = useSelector((state) => state.userNew);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (localStorage.auth != null) {
      const token = localStorage.getItem("auth");
      dispatch(fetchUserNew(token));
    }
  }, [dispatch]);

  useEffect(() => {
    setUserData(userDataNew[0]);
  }, [userDataNew]);

  const oneRecipe = async () => {
    let x;
    try {
      // Set loading state to true before making the request
      setLoading(true);

      const response = await axios.get(
        `http://localhost:5000/api/recipe/${id}`
      );
      setItems(response.data[0].Items);
      setClinks(response.data[0].links);
      setRecipe(response.data[0]);
      x = response.data[0].ItemsId;
      const requestData = { ItemsId: x };
      try {
        const response = await axios.get(
          "http://localhost:5000/api/IngredientMatch",
          {
            params: {
              ItemsId: JSON.stringify(x),
            },
          }
        );
        setRecipeIngs(response.data);
      } catch (error) {
        console.error("Error inserting data:", error);
      } finally {
        // Set loading state to false when the request is completed
        setLoading(false);
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      // Set loading state to false regardless of success or error
      setLoading(false);
    }
  };
  useEffect(() => {
    oneRecipe();
  }, []);
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
        firstName: AllDataGet[0]?.firstName,
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
      oneRecipe();
    } catch (error) {}
  };

  const getComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/comment/${userIdApp0}`
      );
    } catch (error) {}
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <div className="flex min-h-screen antialiased text-gray-800">
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

          <div className="flex flex-col flex-auto h-full lg:p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full lg:p-4">
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
               
                </div>
              </div>

              <div className="w-full">
              <Reviews rating={Recipe.rating} Recipe={Recipe }/>
                    <Card className=" bg-white rounded-lg border lg:p-2 my-4 lg:mx-6">
                      <h3 className="font-bold">comments</h3>
                      <div>
                        <div className="flex flex-col h-40 overflow-y-auto">
                          {Recipe?.comments?.map((comment, index) => {
                            return (
                              <>
                                {Loading === true ? (
                                  <Card
                                    key={index}
                                    className=" rounded-md p-3 ml-3 my-3 relative"
                                  >
                                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                  </Card>
                                ) : (
                                  <>
                                    <Card
                                      key={index}
                                      className=" rounded-md p-3 ml-3 my-3 relative"
                                    >
                                      {comment.userId == userIdApp0 ? (
                                        <Icon
                                          className="absolute top-1 right-1 hover:scale-105"
                                          color="red"
                                          path={mdiDelete}
                                          size={1}
                                          title="Delete"
                                        />
                                      ) : null}

                                      <div className="flex gap-3 items-center">
                                        <img
                                          src={`http://localhost:5000/${comment?.img}`}
                                          className="object-cover w-8 h-8 rounded-full 
                                    border-2 border-emerald-400  shadow-emerald-400"
                                        />
                                        <h3 className="font-bold">
                                          {comment.firstName}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                          {comment.time}
                                        </p>
                                      </div>
                                      <p className="text-gray-600 mt-2">
                                        {comment.comment}
                                      </p>
                                    </Card>
                                  </>
                                )}
                              </>
                            );
                          })}
                        </div>

                        {localStorage.auth !== undefined ? (
                          <>
                            <div className="w-full px-3 my-2">
                              <textarea
                                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                name="body"
                                placeholder="Type Your Comment"
                                required=""
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              />
                            </div>
                            <div className="w-full flex justify-between px-3">
                              <div>
                                <input
                                  type="submit"
                                  className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                                  defaultValue="Post Comment"
                                  onClick={handleAddComment}
                                />
                              </div>

                              <div>
                                <AddBlog Recipe={Recipe} userData={userData} />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="flex justify-center">
                            <Link to="/LogIn">
                              <Button
                                className="border mb-10 border-solid border-[#219D80] border-2 text-[#219D80] hover:bg-[#219D80] hover:text-[#ffffff]"
                                variant="text"
                              >
                                LogIn to Add comment
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </Card>
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
