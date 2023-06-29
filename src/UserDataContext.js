import React from "react";
import {createContext, useState,useEffect } from "react";
import axios from "axios";

export const UserDataContext = createContext();
const UserDataProvider = ( {children} ) => {
  const [closeNav, setCloseNav] = useState();

  const [UserAllData, setUserAllData] = useState({});

  const updateNav = (newValue) => {
    setCloseNav(newValue);
  };
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
  
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let id = response.data.user.id

        try {
            const response = await axios.get(
              `http://localhost:5000/api/users/${id}`
            ); 
            setUserAllData(response.data[0]);
          } catch (error) {
            console.error("Error retrieving data:", error);
          }
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
  console.log(UserAllData)



//   const updateUserAllData = (newValue) => {
//     setUserAllData(newValue);
//   };


    // const { UserAllData, updateUserAllData } = useContext(UserDataContext);



  return (
        <>
            <UserDataContext.Provider
                value={{
                    UserAllData,setUserAllData,closeNav,updateNav
                }}
            >
                {children}
            </UserDataContext.Provider>
        </>
    )
};
 export default UserDataProvider;




