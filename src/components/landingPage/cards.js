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
import { AllContext } from "../../AllDataContext";
import axios from "axios";
import { Link } from "react-router-dom";
import DyRecipeCardMeal from "../user/DyRecipeCardMeal";
import DyPlaceHolder from "../user/DyPlaceHolder";
//---------------------redux-----------------//
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../actions/GetRecipes";
import { fetchFavRecipes } from "../../actions/GetFavRecipes";
import { fetchUserNew } from "../../actions/UserActions";

const Cards = ({ nation }) => {
  const { loading, data, error } = useSelector((state) => state.fetchRecipes);
  // const {
  //   loading: favLoading,
  //   data: favData,
  //   error: favError,
  // } = useSelector((state) => state.fetchFavRecipes);
  // const {
  //   loading: userLoadingNew,
  //   data: userDataNew,
  //   error: userErrorNew,
  // } = useSelector((state) => state.userNew);

  const dispatch = useDispatch();
  const [searchTermMeals, setSearchTermMeals] = useState("");
  const [FilterDataMeals, setFilterDataMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [table, setTable] = useState([]);
  const [NewTable, setNewTable] = useState([]);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    setTable(data);
     if(data.length > 0){
      setIsLoading(false);
     }

  }, [data]);

  let localTable = [];
  const { favRefresh, updateFavRefresh } = useContext(AllContext);

  //-----------------------search------------------------//

  const allRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/recipesA");
      console.log(response.data);
      setTable(response.data);

      // setFilterDataMeals(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      setIsLoading(false); // Set the loading state to false after the save operation is completed
    }
  };

  // useEffect(() => {
  //   allRecipes();

  // }, [dispatch]);
  useEffect(() => {
    if (nation !== "all") {
      const filteredDataUsers = table?.filter((item) =>
        item.nation?.toLowerCase().includes(nation.toLowerCase())
      );
      setNewTable(filteredDataUsers);
      setFilterDataMeals(filteredDataUsers);
    } else {
      setFilterDataMeals(table);
      setNewTable(table);
    }
  }, [table, favRefresh]);

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
  const handlePageChangeMeals = (event, pageNumber) => {
    setCurrentPageMeals(pageNumber);
  };

  const [yourSelectedStateValueType, setOptionType] = useState("");
  const [yourSelectedStateValueAddress, setOptionAddress] = useState("");
  //-----------------------search------------------------//
  const [searchTermUsers, setSearchTermUsers] = useState("");

  const handleFilterChange = (typeValue, addressValue) => {
    const filteredDataUsers = NewTable?.filter(
      (item) =>
        item.category?.toLowerCase().includes(typeValue.toLowerCase()) &&
        item.nation?.toLowerCase().includes(addressValue.toLowerCase())
    );
    setFilterDataMeals(filteredDataUsers);
    console.log(filteredDataUsers);
  };

  const filterDataByNameUsers = (searchTermMeals) => {
    const filteredDataMeals = NewTable.filter((item) =>
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
              {nation === "all" ? (
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
                  <option value="">all nations</option>
                  <option value="jordanian">jordanian</option>
                  <option value="egyptian ">egyptian </option>
                </select>
              ) : null}
            </div>
          </div>
        </div>
      </div>

 
      <div className="mt-10">
   
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 place-items-center">
        {isLoading === false ? 
        <>
          {slicedArrayMeals?.map((e, i) => {
            return (
              <>
              <DyRecipeCardMeal
              key={e._id}
              Name={e.recipeName}
              card={card}
              index={i}
              SAMeals={slicedArrayMeals}
              cardId={e._id}
              img={e.img}
              rate={e.rate}
              rating={e.rating}
              Recipe={e}
            />
              
              </>
            );
          })}
          </>
          :


              <>
          <DyPlaceHolder/>
          <DyPlaceHolder/>
          <DyPlaceHolder/>
          <DyPlaceHolder/>
         </>
        }
       


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

       
      </div>
    </>
  );
};

export default Cards;
