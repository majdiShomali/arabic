import React, { Component } from "react";
import card from "./landing-img/card.jpg";
import star from "./landing-img/star.png";
import fire from "./landing-img/fire.png";
import "./cards.css";
// import PaginationNav1Presentation from '../navigation'
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import DyRecipeCardMeal from "../user/DyRecipeCardMeal";
import DyRecipeCardDrink from "../user/DyRecipeDrinkCard";
const Cards = () => {
  let localTable = [];

  //-----------------------search------------------------//
  const [searchTermMeals, setSearchTermMeals] = useState("");
  const [FilterDataMeals, setFilterDataMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [table, setTable] = useState([]);

  const allRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/recipesA");
      console.log(response.data);
      setTable(response.data);

      setFilterDataMeals(response.data);

    } catch (error) {
      console.error("Error inserting data:", error);
    }finally {
      setIsLoading(false); // Set the loading state to false after the save operation is completed
    }
  };

  useEffect(() => {
    allRecipes();

  }, []);



  const [currentPageMeals, setCurrentPageMeals] = useState(1);
  
  let totalItemsMeals;
 
  let totalPagesMeals;
 
  let slicedArrayMeals;

  const itemsPerPage = 4;

  totalItemsMeals = FilterDataMeals.length;

  totalPagesMeals = Math.ceil(totalItemsMeals / itemsPerPage);

  const startIndexMeals = (currentPageMeals - 1) * itemsPerPage;

  const endIndexMeals = startIndexMeals + itemsPerPage;
 
  slicedArrayMeals = FilterDataMeals.slice(startIndexMeals, endIndexMeals);
  console.log(FilterDataMeals);
  const handlePageChangeMeals = (event, pageNumber) => {
    setCurrentPageMeals(pageNumber);
  };
 
  const [yourSelectedStateValueType, setOptionType] = useState("");
  const [yourSelectedStateValueAddress, setOptionAddress] = useState("");
  //-----------------------search------------------------//
  const [searchTermUsers, setSearchTermUsers] = useState("");


  const handleFilterChange = (typeValue, addressValue) => {


    const filteredDataUsers = table?.filter(
      (item) =>
        item.category?.toLowerCase().includes(typeValue.toLowerCase()) &&
        item.category?.toLowerCase().includes(addressValue.toLowerCase())
    );
    setFilterDataMeals(filteredDataUsers);
  
};


const filterDataByNameUsers = (searchTermMeals) => {
  const filteredDataMeals = table.filter((item) =>
    item.recipeName.toLowerCase().includes(searchTermMeals.toLowerCase())
  );
  setFilterDataMeals(filteredDataMeals);
  setCurrentPageMeals(1);
};


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
                <option value=""> All Recipes</option>
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




      {isLoading ? 
 
 <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
 
 
 
 
 : null}





      <div className="mt-10">
        {/* <fieldset className="AdminFieldset bg-[#f5f5f5]"> */}
          {/* <legend>
            All Meals:
            <input
              type="text"
              placeholder="Search"
              style={{ border: "1px solid black" }}
              value={searchTermMeals}
              onChange={(e) => {
                setSearchTermMeals(e.target.value);
                filterDataByNameMeals(e.target.value);
              }}
            />
          </legend> */}

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-5">
            {slicedArrayMeals?.map((e, i) => {
              return (
                <>
                  <DyRecipeCardMeal
                    key={e._id}
                    Name={e.Name}
                    card={card}
                    index={i}
                    SAMeals={slicedArrayMeals}
                    cardId={e._id}
                    img={e.img}
                  />
                </>
              );
            })}
          </div>
        {/* </fieldset> */}
        <div className="PaginationCards">
          {
            <Pagination
              count={totalPagesMeals}
              page={currentPageMeals}
              onChange={handlePageChangeMeals}
            />
          }
        </div>

        {/* <fieldset className="AdminFieldset bg-[#f5f5f5]">
          <legend>
            All Drinks:
            <input
              type="text"
              placeholder="Search"
              style={{ border: "1px solid black" }}
              value={searchTermDrinks}
              onChange={(e) => {
                setSearchTermDrinks(e.target.value);
                filterDataByNameDrinks(e.target.value);
              }}
            />
          </legend>

          <div className="cardContainer">
            {slicedArrayDrinks?.map((e, i) => {
              return (
                <DyRecipeCardDrink
                  Name={e.Name}
                  card={card}
                  index={i}
                  SADrinks={slicedArrayDrinks}
                />
              );
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
      </div>
    </>
  );
};

export default Cards;
