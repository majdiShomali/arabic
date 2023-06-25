import React from "react";
import { Children, createContext, useState ,useEffect } from "react";
import axios from "axios";
export const AllContext = createContext();
const AllProvider = ( {children} ) => {
  const [UpdateAll,setUpdateAll] =useState([])
  const [AllDataGet, setAllDataGet] = useState([]);
  const [AllDataGetK, setAllDataGetK] = useState([]);
  const [AllDataRecipesA, setAllDataRecipesA] = useState([]);
  const [userId, setUserId] = useState("");

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
  
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
      let id=response.data.user.id
      setUserId(response.data.user.id)
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${id}`);

            setAllDataGet(response.data)
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
  const fetchUser = async () => {

    try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`);

        setAllDataGetK(response.data)
      } catch (error) {
        console.error("Error retrieving data:", error);
      }

  }

  const fetchRecipesA = async () => {

    try {
        const response = await axios.get("http://localhost:5000/api/recipesA");
        setAllDataRecipesA(response.data)
 
      } catch (error) {
        console.error("Error inserting data:", error);
      }

  }

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, []);
  

  useEffect(() => {
    if (localStorage.auth != null) {
        fetchUser();
      fetchRecipesA();
    }
  }, [UpdateAll]);
  

console.log(AllDataRecipesA)

  







  return (
        <>
            <AllContext.Provider
                value={{
                    AllDataGet,setAllDataGet,
                    AllDataGetK,setAllDataGetK,
                    AllDataRecipesA,setAllDataRecipesA,
                    UpdateAll,setUpdateAll
                }}
            >
                {children}
            </AllContext.Provider>
        </>
    )
};
 export default AllProvider;




