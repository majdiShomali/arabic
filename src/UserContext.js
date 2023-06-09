import React from "react";
import { Children, createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ( {children} ) => {
  const [profileRefresh, setProfileRefresh] = useState();

  const updateProfileRefresh = (newValue) => {
    setProfileRefresh(newValue);
  };



  const [test, setTest] = useState([]);
  const [MyListSideBarCon, setMyListSideBarCon] = useState([]);
  const updateMyListSideBarCon = (newValue) => {
    setMyListSideBarCon(newValue);
  };

  const [foodCards, setFoodCards] = useState([]);
  const [foodCardsName, setFoodCardsName] = useState([]);
  const [MyList, setMyList] = useState([]);
  const [MyListN, setMyListN] = useState([]);

  const [MyListAdminU, setMyListAdminU] = useState([]);
  const [MyListNAdminU, setMyListNAdminU] = useState([]);

  const [currentLinks, setCurrentLinks] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  const [Meals, setMeals] = useState([]);
  const [Drinks, setDrinks] = useState([]);
  const [Sweet, setSweet] = useState([]);

  const [routs, setRouts] = useState([false,true,true]);
  const [SignStatus, setSignStatus] = useState("signUp");
  const [curruntUser, setCurruntUser] = useState({});

  const updateSetCurruntUser = (newValue) => {
    setCurruntUser(newValue);
  };
  const updateTest = (newValue) => {
    setTest(newValue);
  };

  const updateRouts = (newValue) => {
    setRouts(newValue);
  };

  const updateSignStatus = (newValue) => {
    setSignStatus(newValue);
  };

  const updateMyListAdminU = (newValue) => {
    setMyListAdminU(newValue);
  };


  const updateMyListNAdminU = (newValue) => {
    setMyListNAdminU(newValue);
  };

  const updateMeals = (newValue) => {
    setMeals(newValue);
  };
  const updateDrinks = (newValue) => {
    setDrinks(newValue);
  };
  const updateSweet = (newValue) => {
    setSweet(newValue);
  };

  const updateCurrentLinks = (newValue) => {
    setCurrentLinks(newValue);
  };

  const updateCurrentItems = (newValue) => {
    setCurrentItems(newValue);
  };

  const updateValue = (newValue) => {
    setFoodCards(newValue);
  };

  const updateValue1 = (newValue) => {
    setFoodCardsName(newValue);
  };

  const updateMyList = (newValue) => {
    setMyList(newValue);
  };

  const updateMyListN = (newValue) => {
    setMyListN(newValue);
  };

  return (
        <>
            <UserContext.Provider
                value={{
                 foodCards,updateValue,
                 foodCardsName,updateValue1,
                 MyList,updateMyList,
                 MyListN,updateMyListN,
                 currentLinks,updateCurrentLinks,
                 currentItems,updateCurrentItems,
                 Meals,updateMeals,
                 Drinks,updateDrinks,
                 Sweet,updateSweet,
                 MyListAdminU,updateMyListAdminU,
                 MyListNAdminU,updateMyListNAdminU,
                 routs,updateRouts,
                 SignStatus,updateSignStatus,
                 curruntUser,updateSetCurruntUser,
                 test,updateTest,
                 MyListSideBarCon,updateMyListSideBarCon,
                 profileRefresh,updateProfileRefresh
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
};
 export default UserProvider;




