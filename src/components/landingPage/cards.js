import React, { Component } from "react";
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
        <div className="w-full md:w-full mx-8 shadow shadow-gray-500 p-5 rounded-lg bg-white  transform transition duration-300 ">
          <div className="relative flex ">

          <select
                className="px-4 py-3 ml-2 w-48 md:w-60 text-right rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance mr-5"
                value={yourSelectedStateValueType}
                onChange={(e) => {
                  setOptionType(e.target.value);
                  handleFilterChange(
                    e.target.value,
                    yourSelectedStateValueAddress
                  );
                }}
              >
                <option value=""> جميع الوصفات</option>
                <option value="Meal">الاكلات</option>
                <option value="Drink">المشروبات</option>
                <option value="Sweet">الحلويات</option>
              </select>
              {nation === "all" ? (
                <select
                  className="px-4 py-3 w-48 text-right md:w-60 rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-[#E8AA42] focus:bg-white focus:ring-0 text-sm appearance"
                  value={yourSelectedStateValueAddress}
                  onChange={(e) => {
                    setOptionAddress(e.target.value);
                    handleFilterChange(
                      yourSelectedStateValueType,
                      e.target.value
                    );
                  }}
                >
                  <option value="">جيمع المطابخ</option>
                  <option value="jordanian">الاردنية</option>
                  <option value="egyptian ">المصرية </option>
                </select>
              ) : null}



          
            <input
              type="text"
              placeholder="ابحق عن اسم الوصفة"
              className="px-8 py-3 w-full rounded-md bg-gray-100 text-right border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={searchTermUsers}
              onChange={(e) => {
                setSearchTermUsers(e.target.value);
                filterDataByNameUsers(e.target.value);
              }}
            />

             

              
           



          </div>
       
       
        </div>
      </div>

 
      <div className="mt-10">
   
        <div className="flex flex-wrap items-center justify-center">
        {isLoading === false ? 
        <>
          {slicedArrayMeals?.map((e, i) => {
            return (
              <>
              <DyRecipeCardMeal
              key={e._id}
              Name={e.recipeName}
              card={e.img}
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
