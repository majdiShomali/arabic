import React from "react";
import { Children, createContext, useState ,useEffect } from "react";
import axios from "axios";
export const KitContext = createContext();
const KitProvider = ( {children} ) => {
  const [UserIdApp,setUserIdApp] =useState("")

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
  
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUserIdApp(response.data.user.id)
     
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, []);
  



  
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
                 EffectStatus,updateEffectStatus
                }}
            >
                {children}
            </KitContext.Provider>
        </>
    )
};
 export default KitProvider;




