import React from "react";
import { Children, createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const UserNewContext = createContext();
const UserNewProvider = ( {children} ) => {
  const [selectedUserNew, setSelectedUserNew] = useState();

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");

      if (token) {
        const response = await axios.get("http://localhost:5000/api/userData", {
          headers: {
            Authorization: token,
          },
        });
      setSelectedUserNew(response.data[0])
      }
    } catch (error) {
      console.error(error);
    //   localStorage.removeItem("auth");
    //   window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };
  useEffect(()=>{
    fetchProtectedData()
  },[])
  return (
        <>
            <UserNewContext.Provider
                value={{
                    selectedUserNew,setSelectedUserNew,
                }}
            >
                {children}
            </UserNewContext.Provider>
        </>
    )
};
 export default UserNewProvider;




