import React from "react";
import {createContext, useState,useEffect } from "react";
import axios from "axios";
export const DashboardPendingContext = createContext();
const DashboardPendingProvider = ( {children} ) => {


  const [PendingRecipesLength, setPendingRecipesLength] = useState();
  const [PendingMLength, setPendingMLength0] = useState();
  const [PersonsContext, setPersonsContext] = useState([]);
  const [PersonsApContext, setPersonsApContext] = useState();
  const [SponsorAContext, setSponsorAContext] = useState();
  const [SponsorPContext, setSponsorPContext] = useState();
  const [AcceptIngRefresh, setAcceptIngRefresh ] = useState();
  const [AcceptRecipeRefresh, setAcceptRecipeRefresh ] = useState();
  const [ChatingRefresh, setChatingRefresh ] = useState();



    // const { SponsorAContext, setSponsorAContext } = useContext(DashboardPendingContext);
    // const { SponsorAContext, setSponsorAContext } = useContext(DashboardPendingContext);
    // const { ChatRefresh, updateChatRefresh } = useContext(DashboardPendingContext);

  const updatePendingRecipesLength = (newValue) => {
    setPendingRecipesLength(newValue);
  };
  const setPendingMLength = (newValue) => {
    setPendingMLength0(newValue);
  };

  // const updatePendingMLength = (newValue) => {
  //   setPendingMLength(newValue);
  // };

  // const fetchUsersM = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/usersMessages");

  //    setPendingMLength(() => {
  //     const newItems = response.data.filter((item) => item.messageRead !== true);
  //     return newItems;
  //     });

  //   } catch (error) {
  //     console.error("Error retrieving data:", error);
  //   }
  // };
  
  const allAdmins = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/recipesP");
        setPersonsContext(response.data);
        console.log(response.data)
      console.log(response.data)
      } catch (error) {
        console.error("Error inserting data:", error);
      }

 
      try {
        const response = await axios.get("http://localhost:5000/api/recipesA");
        setPersonsApContext(response.data);
      console.log(response.data)
    //   setFilterDataUsersAp(response.data)
      } catch (error) {
        console.error("Error inserting data:", error);
      }



    };

    const allAdmins0 = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/sponsorP");
            setSponsorPContext(response.data);
            // updatePendingMLength(response.data)
          console.log(response.data)
          } catch (error) {
            console.error("Error inserting data:", error);
          }
        try {
            const response = await axios.get("http://localhost:5000/api/sponsorA");
            setSponsorAContext(response.data);      
          console.log(response.data)
          } catch (error) {
            console.error("Error inserting data:", error);
          }





        };

     
      useEffect(() => {
        allAdmins0();
        // fetchUsersM()
      }, [AcceptIngRefresh,ChatingRefresh]);
  useEffect(() => {
    allAdmins();
  }, [AcceptRecipeRefresh]);

console.log(PersonsContext)

    // const { PendingRecipesLength, updatePendingRecipesLength } = useContext(DashboardPendingContext);

    // const { SponsorAContext, setSponsorAContext } = useContext(DashboardPendingContext);
    // const { SponsorPContext, setSponsorPContext } = useContext(DashboardPendingContext);
    // const { AcceptRecipeRefresh, setAcceptRecipeRefresh } = useContext(DashboardPendingContext);
   
   
    // const { PendingMessageLength, updatePendingMessageLength } = useContext(DashboardPendingContext);
    // const { PendingMLength, updatePendingMLength } = useContext(DashboardPendingContext);



  return (
        <>
            <DashboardPendingContext.Provider
                value={{
                    PendingRecipesLength,updatePendingRecipesLength,
                    PersonsContext,setPersonsContext,
                    PersonsApContext,setPersonsApContext,
                    SponsorAContext,setSponsorAContext,
                    SponsorPContext,setSponsorPContext,
                    AcceptIngRefresh,setAcceptIngRefresh,
                    AcceptRecipeRefresh,setAcceptRecipeRefresh,
                    PendingMLength,setPendingMLength,
                    ChatingRefresh,setChatingRefresh
                   

                }}
            >
                {children}
            </DashboardPendingContext.Provider>
        </>
    )
};
 export default DashboardPendingProvider;




