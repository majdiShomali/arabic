import React from "react";
import { Children, createContext, useState } from "react";

export const KitContext = createContext();
const KitProvider = ( {children} ) => {
  
  const [MyListSideBarCon, setMyListSideBarCon] = useState([]);
  const updateMyListSideBarCon = (newValue) => {
    setMyListSideBarCon(newValue);
  };




  return (
        <>
            <KitContext.Provider
                value={{
  
                 MyListSideBarCon,updateMyListSideBarCon
                }}
            >
                {children}
            </KitContext.Provider>
        </>
    )
};
 export default KitProvider;




