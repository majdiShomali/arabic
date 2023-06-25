import React from "react";
import { Children, createContext, useState ,useEffect } from "react";
import axios from "axios";
export const KitContext = createContext();
const KitProvider = ( {children} ) => {


  const [MyListSideBarCon, setMyListSideBarCon] = useState([]);
  const [MyListSideBarConNames, setMyListSideBarConNames] = useState([]);
  const [SidebarIngName0, setSidebarIngName0] = useState("");
  const [EffectStatus, setEffectStatus] = useState("");
  const updateEffectStatus = (newValue) => {
    setEffectStatus(newValue);
  };

  const updateMyListSideBarCon = (newValue) => {
    setMyListSideBarCon(newValue);
  };

  const updateMyListSideBarConNames = (newValue) => {
    setMyListSideBarConNames(newValue);
  };

  const updateSidebarIngName0 = (newValue) => {
    setSidebarIngName0(newValue);
  };



  return (
        <>
            <KitContext.Provider
                value={{ 
                 MyListSideBarCon,updateMyListSideBarCon,
                 SidebarIngName0,updateSidebarIngName0,
                 MyListSideBarConNames,updateMyListSideBarConNames,
                 EffectStatus,updateEffectStatus,
                }}
            >
                {children}
            </KitContext.Provider>
        </>
    )
};
 export default KitProvider;




