import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DyRecipeCardMeal from "../../components/user/DyRecipeCardMeal";
import { RecipeContext } from "../../RecipeContext";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const ProviderProfile = ({ userIdApp0 }) => {
  const [user, setUser] = useState([]);
  const [providerRecipes, setProviderRecipes] = useState([]);
  const { RecipeElement, updateRecipeElement } = useContext(RecipeContext);

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [userImg, setUserImg] = useState("");

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };
  const onLoad = (fileString) => {
    setImg(fileString);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const providerAllRecipes = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/providerRecipes/${userIdApp0}`
      );
      setProviderRecipes(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${userIdApp0}`
      );
      setUser(response.data);
      setName(response.data[0].firstName);
      setUserImg(response.data[0].img);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    providerAllRecipes();
  }, []);

  //  updateRecipeElement

  const handleUpdate = (e) => {
    updateRecipeElement(e);
  };

  const [EditProfileStatus, setEditPrifileStatus] = useState(false);

  const handleEdit = async () => {
    setEditPrifileStatus(!EditProfileStatus);
  };

  const handleEditPlus = async () => {
    try {
      const updatedRecipe = {
        firstName: name,
        img: img,
      };
      console.log(updatedRecipe);
      await axios.put(
        `http://localhost:5000/api/users/${userIdApp0}`,
        updatedRecipe
      );
      // fetchUsers(); // Refresh the user list after updating a user
      providerAllRecipes();
      setEditPrifileStatus(!EditProfileStatus);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <div className="p-5 m-5">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">
            My Profile
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
        </h1>
        <div className="p-8 bg-white shadow mt-4">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-amber-500 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              
    {  userImg === "" ?            <svg
                                    xmlns="https://source.unsplash.com/MP0IUfwrn0A"
                                    className="h-24 w-24"
                                    viewBox="0 0 20 20"
                                    fill="white"
                                    
                                    
                                >
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    />
                                </svg>

:
                <img className="w-full h-full rounded-full" src={userImg} />


}
              </div>{" "}
            </div>{" "}
            <br /> <br />
          </div>
          {user.length !== 0 && (
            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">
                {user[0]?.firstName}
              </h1>
              <h3 className="font-light text-gray-600 mt-3">
                {user[0]?.email}
              </h3>
              <h3 className="mt-1 text-gray-500">{user[0]?.role}</h3>
              <br />
              <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">
            
                {EditProfileStatus === false ? (
                  <Button
                    className="mr-5 border mb-10 border-solid border-[#d1aa36] border-2 text-[#060606] hover:bg-[#c9ac39] hover:text-[#ffffff]"
                    variant="text"
                    onClick={() => handleEdit()}
                  >
                    Edit
                  </Button>
                ) : (
                  <form className="mt-4 mb-2">
                    <div className="mb-4 flex lg:flex-row sm:flex-col">
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Name 1"
                      />
                    </div>

                    <div>
                      <label className="font-medium">Case Image</label>

                      <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        placeholder="Table Image"
                        name="guest_num"
                        onChange={(e) => {
                          onChange(e);
                        }}
                        accept="image/*"
                      />
                    </div>

                    <Button
                      onClick={() => handleEditPlus()}
                      className="mt-6 bg-[#E8CC95] w-full"
                    >
                      Update
                    </Button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 m-5">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">
            All Recipe
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
        </h1>
        <div className="p-8 bg-white shadow mt-4">
          {" "}
          {user.length !== 0 && (
            <>
              <div class="grid grid-cols-4">
                {providerRecipes.map((e, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-25"
                      >
                        <div>
                          <img
                            className="w-full h-72 "
                            src={e.img}
                            alt="Recipe Title"
                          />
                        </div>
                        <div className="p-4">
                          <h2 className="text-2xl text-[#E8CC95]">
                            {e.recipeName}
                          </h2>
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
                          <p className="mb-2 text-gray-800">
                            A recipe that's quick and easy to make and super
                            tasty!
                          </p>
                          <Link to="/">
                            <button
                              className="text-white bg-[#E8CC95] p-2 rounded-md w-full uppercase"
                              onClick={() => handleUpdate(e)}
                            >
                              update recipe
                              {/* <Link className=" text-gray-800" to="/ShowRecipe">Show recipe</Link> */}
                            </button>{" "}
                          </Link>
                        </div>
                        <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#E8CC95] text-gray-800 rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                          <span>Medium</span>
                        </div>
                      </div>
                    </>
        
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProviderProfile;
