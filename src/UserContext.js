import React from "react";
import { Children, createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ( {children} ) => {
  
  const [foodCards, setFoodCards] = useState([]);


  const updateValue = (newValue) => {
    setFoodCards(newValue);
  };

  return (
        <>
            <UserContext.Provider
                value={{
                 foodCards,updateValue
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
};
 export default UserProvider;




