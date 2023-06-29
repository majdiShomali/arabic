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
  const [LastUpdatedDataUser, setLastUpdatedDataUser] = useState([]);

  const [AllIngredientsUser0,setAllIngredientsUser0] =useState(null)
  const [AllIngredientsBase,setAllIngredientsUserBase] =useState(null)
  // const {AllIngredientsBase,setAllIngredientsUserBase} =useState(null)

  const [ChatRefresh0, setChatRefresh ] = useState();

  const updateChatRefresh = (newValue) => {
    setChatRefresh(newValue);
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
      let id=response.data.user.id
      setUserId(response.data.user.id)
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${id}`);
             let allget =response.data
            setAllDataGet(response.data)



            try {
              const response = await axios.get("http://localhost:5000/api/Ingredients");
               setAllIngredientsUser0(response.data);
               setAllIngredientsUserBase(response.data)
              let allIng=response.data


              let NewAllIngredientsUser0 = allIng?.map((e) => {
                if (allget[0]?.MyListId.includes(e._id)) {
                  e.ingredientFlag  = true;
                }   
                return e;
              });
            
            
              setLastUpdatedDataUser(NewAllIngredientsUser0)
            


              console.log(response.data)
            } catch (error) {
              console.error("Error retrieving data:", error);
            }








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


  const fetchIng = async () => {

    // try {
    //   const response = await axios.get("http://localhost:5000/api/Ingredients");
    //    setAllIngredientsUser0(response.data);
    //   console.log(response.data)
    // } catch (error) {
    //   console.error("Error retrieving data:", error);
    // }
  };

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, [ChatRefresh0]);
  

  useEffect(() => {
    if (localStorage.auth != null) {
        fetchUser();
      fetchRecipesA();
      fetchIng()
    }
  }, [UpdateAll,ChatRefresh0]);
  


  





  return (
        <>
            <AllContext.Provider
                value={{
                    AllDataGet,setAllDataGet,
                    AllDataGetK,setAllDataGetK,
                    AllDataRecipesA,setAllDataRecipesA,
                    UpdateAll,setUpdateAll,
                    AllIngredientsUser0,setAllIngredientsUser0,
                    LastUpdatedDataUser,setLastUpdatedDataUser,
                    AllIngredientsBase,setAllIngredientsUserBase,
                    ChatRefresh0,updateChatRefresh

                }}
            >
                {children}
            </AllContext.Provider>
        </>
    )
};
 export default AllProvider;




