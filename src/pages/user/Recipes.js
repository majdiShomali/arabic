import React from "react";
import "./Recipes.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import image0 from "../../Images/meals/majdi.jpg";
import card from "../../components/landingPage/landing-img/card.jpg";
import star from "../../components/landingPage/landing-img/star.png";
import fire from "../../components/landingPage/landing-img/fire.png";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiFridge } from "@mdi/js";
import { mdiHamburgerPlus } from "@mdi/js";
import { mdiStove } from "@mdi/js";
import aboutMeal from "../../Images/meals/majdi.jpg";
import Pagination from "@mui/material/Pagination";

import DyRecipeCardMeal from "../../components/user/DyRecipeCardMeal";
import DyRecipeCardDrink from "../../components/user/DyRecipeDrinkCard";
import axios from "axios";
const Recipes = () => {
  // const { MyList, updateMyList } = useContext(UserContext);
  // const { MyListN, updateMyListN } = useContext(UserContext);

  // const [currentLinks, setCurrentLinks] = useState([]);
  // const [currentItems, setCurrentItems] = useState([]);

  const { currentLinks, updateCurrentLinks } = useContext(UserContext);
  const { currentItems, updateCurrentItems } = useContext(UserContext);

  let localTable = [];
  let localListN = [];

  // if(localStorage.table !=[] && localStorage.table !=null && localStorage.table !=undefined ){
  //   localTable=JSON.parse(localStorage.table)
  //   localListN=JSON.parse(localStorage.MyListN)
  // }

  const [table, setTable] = useState([]);
  const [MyListN, updateMyListN] = useState([]);

  // const [Meals, setMeals] = useState([]);
  // const [Drinks, setDrinks] = useState([]);
  // const [Sweet, setSweet] = useState([]);

  // const { Meals, updateMeals   } = useContext(UserContext);
  // const { Drinks, updateDrinks } = useContext(UserContext);
  // const { Sweet, updateSweet   } = useContext(UserContext);
  const [Meals, updateMeals] = useState([]);
  const [Drinks, updateDrinks] = useState([]);
  const [Sweet, updateSweet] = useState([]);
  const [allRecipesA, setAllRecipesA] = useState([]);
  const [FilterDataMeals, setFilterDataMeals] = useState([]);

  const [userId, setUserId] = useState();
  const fetchProtectedData = async () => {};

  const [userAllIngredients, setUserAllIngredients] = useState();
  const [userAllIngredients0, setUserAllIngredients0] = useState();

  const allRecipes = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let id = response.data.user.id;
        setUserId(response.data.user.id);
        console.log(id);
        try {
          // Send the data to the server using an HTTP POST request
          const response = await axios.get(
            `http://localhost:5000/api/users/${id}`
          );
          console.log(response.data);
          updateMyListN(response.data[0].MyListn);
          setUserAllIngredients(response.data[0].AllIngredientsId);

          setUserAllIngredients0(() => {
            const newItems = response.data[0].AllIngredientsId.filter(
              (item) => item.ingredientFlag !== true
            );
            {
              console.log(newItems);
            }
            return newItems;
          });
        } catch (error) {
          console.error("Error inserting data:", error);
        }
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
    }

    try {
      const response = await axios.get("http://localhost:5000/api/recipesA");
      console.log(response.data);
      setTable(response.data);
      let rrr = response.data;
      setAllRecipesA(rrr)
      setFilterDataMeals(rrr)
      updateMeals((prevAccounts) => {
        const newItems = rrr.filter((item) => item.category === "Meal");
        return newItems;
      });
      updateDrinks((prevAccounts) => {
        const newItems = rrr.filter((item) => item.Category === "Drink");
        return newItems;
      });

      //   updateSweet((prevAccounts) => {
      //     const newItems = rrr.filter(
      //       (item) => item.Category === "cook_now_container3"
      //     );
      //     return  (newItems)

      //   });
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  useEffect(() => {
    allRecipes();
  }, []);

  function checkIfAllExist(meal_c, my_list_c) {
    return meal_c.filter((h) => !my_list_c.includes(h.toLowerCase())).length === 0;
  }

  function ShowVideosMeals(index) {
    let currentVideos0 = Meals[index].Links.map((e) => {
      return e;
    });
    let currentItems = Meals[index].Items.map((e) => {
      return e;
    });
    updateCurrentItems(currentItems);
    updateCurrentLinks(currentVideos0);
  }

  function ShowVideosDrinks(index) {
    let currentVideos0 = Drinks[index].Links.map((e) => {
      return e;
    });
    let currentItems = Drinks[index].Items.map((e) => {
      return e;
    });
    updateCurrentItems(currentItems);
    updateCurrentLinks(currentVideos0);
  }
  const [currentPageMeals, setCurrentPageMeals] = useState(1);
  const [currentPageDrinks, setCurrentPageDrinks] = useState(1);
  const [currentPageSweet, setCurrentPageSweet] = useState(1);

  let totalItemsMeals;
  let totalItemsDrinks;
  let totalItemsSweet;

  let totalPagesMeals;
  let totalPagesDrinks;
  let totalPagesSweet;

  let slicedArrayMeals;
  let slicedArrayDrinks;
  let slicedArraySweet;

  const itemsPerPage = 4;

  totalItemsMeals = Meals.length;
  totalItemsDrinks = Drinks.length;
  totalItemsSweet = Sweet.length;

  totalPagesMeals = Math.ceil(totalItemsMeals / itemsPerPage);
  totalPagesDrinks = Math.ceil(totalItemsDrinks / itemsPerPage);
  totalPagesSweet = Math.ceil(totalItemsSweet / itemsPerPage);

  const startIndexMeals = (currentPageMeals - 1) * itemsPerPage;
  const startIndexDrinks = (currentPageDrinks - 1) * itemsPerPage;
  const startIndexSweet = (currentPageSweet - 1) * itemsPerPage;

  const endIndexMeals = startIndexMeals + itemsPerPage;
  const endIndexDrinks = startIndexDrinks + itemsPerPage;
  const endIndexSweet = startIndexSweet + itemsPerPage;

  slicedArrayMeals = Meals.slice(startIndexMeals, endIndexMeals);
  slicedArrayDrinks = Drinks.slice(startIndexDrinks, endIndexDrinks);
  slicedArraySweet = Sweet.slice(startIndexSweet, endIndexSweet);

  const handlePageChangeMeals = (event, pageNumber) => {
    setCurrentPageMeals(pageNumber);
  };
  const handlePageChangeDrinks = (event, pageNumber) => {
    setCurrentPageDrinks(pageNumber);
  };
  const handlePageChangeSweet = (event, pageNumber) => {
    setCurrentPageSweet(pageNumber);
  };







  const [searchTermUsers, setSearchTermUsers] = useState("");

  const filterDataByNameUsers = (searchTermMeals) => {
    const filteredDataMeals = allRecipesA.filter((item) =>
      item.recipeName.toLowerCase().includes(searchTermMeals.toLowerCase())
    );
    setFilterDataMeals(filteredDataMeals);
    setCurrentPageMeals(1);
  };

  const [yourSelectedStateValueType, setOptionType] = useState("");
  const [yourSelectedStateValueAddress, setOptionAddress] = useState("");


  const handleFilterChange = (typeValue, addressValue) => {


    const filteredDataUsers = allRecipesA?.filter(
      (item) =>
        item.category?.toLowerCase().includes(typeValue.toLowerCase()) &&
        item.category?.toLowerCase().includes(addressValue.toLowerCase())
    );
    setFilterDataMeals(filteredDataUsers);
  
}

  return (
    <>


<div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8 shadow shadow-black p-5 rounded-lg bg-white border-solid border-1 border-[#0e0d0d] transform transition duration-300 ">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by listing, location, bedroom number..."
              className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={searchTermUsers}
              onChange={(e) => {
                setSearchTermUsers(e.target.value);
                filterDataByNameUsers(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-1  md:grid-cols-3 sm:grid-cols-1  gap-4 mt-4 ">
              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance mr-5"
                value={yourSelectedStateValueType}
                onChange={(e) => {
                  setOptionType(e.target.value);
                  handleFilterChange(
                    e.target.value,
                    yourSelectedStateValueAddress
                  );
                }}
              >
                <option value=""> Type</option>
                <option value="Meal">Meals</option>
                <option value="Drink">Drinks</option>
                <option value="Sweet">Sweets</option>
              </select>

              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-[#E8AA42] focus:bg-white focus:ring-0 text-sm appearance"
                value={yourSelectedStateValueAddress}
                onChange={(e) => {
                  setOptionAddress(e.target.value);
                  handleFilterChange(
                    yourSelectedStateValueType,
                    e.target.value
                  );
                }}
              >
                <option value="">all donation Case</option>
                <option value="Stray Animals">Stray Animals</option>
                <option value="injured animals">injured animals</option>
              </select>
            </div>


          </div>
        </div>
      </div>









      <div class="cook_now_container cook_now_box">
        {FilterDataMeals.map((e, i) => {
          {console.log(e.ItemsName, MyListN)}
          if (checkIfAllExist(e.ItemsName, MyListN)) {
            return (
              <DyRecipeCardMeal
              key={e.recipeName}
                Name={e.recipeName}
                card={card}
                index={i}
                SAMeals={slicedArrayMeals}
                img={e.img}
                cardId={e._id}
              />
            );
          }
        })}
      </div>

      {/* <div className="AboutUsed m-5 px-8">
        <div className="containerr">
          <div className="text">
            <h1 className="text-3xl pb-5 ">All available recipes</h1>
            <p className="aboutP">
              all recipes based in your kitchen ingredients
            </p>
            <div className="icons">
              <div className="icoon">
                <div>
                  <Icon path={mdiFridge} size={2} />
                </div>
                <p>Fridge</p>
              </div>
              <div className="icoon">
                <div>
                  <Icon path={mdiHamburgerPlus} size={2} />
                </div>
                <p>Add items</p>
              </div>
              <div className="icoon">
                <div>
                  <Icon path={mdiStove} size={2} />
                </div>
                <p>Start cooking</p>
              </div>
            </div>
          </div>
          <div className="imgAbout">
            <img className="img-new" src={aboutMeal} alt="" />
          </div>
        </div>
      </div> */}

      {/* <fieldset className="AdminFieldset bg-[#f5f5f5]">
        <legend>Meals:</legend>

        <div class="cook_now_container cook_now_box">
          {slicedArrayMeals.map((e, i) => {
            if (checkIfAllExist(e.ItemsName, MyListN)) {
              return (
                <DyRecipeCardMeal
                  Name={e.Name}
                  card={card}
                  index={i}
                  SAMeals={slicedArrayMeals}
                  img={e.img}
                  cardId={e._id}
                />
              );
            }
          })}
        </div>
      </fieldset> */}
      {/* <div className="PaginationCards">
        {
          <Pagination
            count={totalPagesMeals}
            page={currentPageMeals}
            onChange={handlePageChangeMeals}
          />
        }
      </div> */}

      {/* <fieldset className="AdminFieldset bg-[#f5f5f5]">
        <legend>Drinks:</legend>

        <div className="cook_now_container cook_now_box ">
          {slicedArrayDrinks.map((e, i) => {
            if (checkIfAllExist(e.ItemsName, MyListN)) {
              return (
                <DyRecipeCardDrink
                  Name={e.Name}
                  card={card}
                  index={i}
                  SADrinks={slicedArrayDrinks}
                  img={e.img}
                />
              );
            }
          })}
        </div>
      </fieldset> */}

      {/* <div className="PaginationCards">
        {
          <Pagination
            count={totalPagesDrinks}
            page={currentPageDrinks}
            onChange={handlePageChangeDrinks}
          />
        }
      </div> */}
    </>
  );
};

export default Recipes;
