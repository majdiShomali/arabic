import React from "react";
import {createContext, useState } from "react";

export const RecipeContext = createContext();
const RecipeProvider = ( {children} ) => {
  
  const [SidebarIng, setSidebarIng] = useState([]);
  const [SidebarIngName, setSidebarIngName] = useState("");
  const [SidebarIngId, setSidebarIngId] = useState("");
  const [RecipeElement, setRecipeElement] = useState({});
  const [RecipeStatus, setRecipeStatus] = useState(true);

  const updateRecipeStatus = (newValue) => {
    setRecipeStatus(newValue);
  };
  const updateSidebarIngId = (newValue) => {
    setSidebarIngId(newValue);
  };
  const updateSidebarIng = (newValue) => {
    setSidebarIng(newValue);
  };
  const updateSidebarIngName = (newValue) => {
    setSidebarIngName(newValue);
  };
  const updateRecipeElement = (newValue) => {
    setRecipeElement(newValue);
  };

    // const { RecipeStatus, updateRecipeStatus } = useContext(RecipeContext);



  return (
        <>
            <RecipeContext.Provider
                value={{

                    SidebarIng,updateSidebarIng,
                    SidebarIngName,updateSidebarIngName,
                    RecipeElement,updateRecipeElement,
                    RecipeStatus,updateRecipeStatus,
                    SidebarIngId,updateSidebarIngId
                    
                }}
            >
                {children}
            </RecipeContext.Provider>
        </>
    )
};
 export default RecipeProvider;




