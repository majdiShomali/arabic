import React from "react";
import {createContext, useState } from "react";

export const RecipeContext = createContext();
const RecipeProvider = ( {children} ) => {
  
  const [SidebarIng, setSidebarIng] = useState([]);
  const [SidebarIngName, setSidebarIngName] = useState("");
  const updateSidebarIng = (newValue) => {
    setSidebarIng(newValue);
  };
  const updateSidebarIngName = (newValue) => {
    setSidebarIngName(newValue);
  };

    // const { SidebarIng, updateSidebarIng } = useContext(RecipeContext);



  return (
        <>
            <RecipeContext.Provider
                value={{
  
                    SidebarIng,updateSidebarIng,SidebarIngName,updateSidebarIngName
                }}
            >
                {children}
            </RecipeContext.Provider>
        </>
    )
};
 export default RecipeProvider;




