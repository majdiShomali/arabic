import React from "react";
import { Children, createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ( {children} ) => {
  
  const [foodCards, setFoodCards] = useState([]);
  const [foodCardsName, setFoodCardsName] = useState([]);
  const [MyList, setMyList] = useState([]);
  const [MyListN, setMyListN] = useState([]);

  const [currentLinks, setCurrentLinks] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);



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
                 currentItems,updateCurrentItems
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
};
 export default UserProvider;




