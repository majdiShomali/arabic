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
            const response = await axios.get("http://localhost:5000/api/paymentAdminP");
            setSponsorPContext(response.data);
            // updatePendingMLength(response.data)
          console.log(response.data)
          } catch (error) {
            console.error("Error inserting data:", error);
          }
        try {
            const response = await axios.get("http://localhost:5000/api/paymentAdminA");
            setSponsorAContext(response.data);      
          console.log(response.data)
          } catch (error) {
            console.error("Error inserting data:", error);
          }





        };

        const [allPaymentsP, setAllPaymentsP] = useState([]);
        const [allPaymentsA, setAllPaymentsA] = useState([]);
   
        const FallPaymentsP = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/paymentAdminP");
                setAllPaymentsP(response.data);      
              } catch (error) {
                console.error("Error inserting data:", error);
              }   
            };
        const FallPaymentsA = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/paymentAdminA");
                setAllPaymentsA(response.data);      
              } catch (error) {
                console.error("Error inserting data:", error);
              }   
            };
    
         
          useEffect(() => {
            FallPaymentsA();
            FallPaymentsP();
          }, []);



     
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
    // const { allPaymentsA, setAllPaymentsA } = useContext(DashboardPendingContext);



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
                    ChatingRefresh,setChatingRefresh,
                    allPaymentsP,setAllPaymentsP,
                    allPaymentsA,setAllPaymentsA
                   

                }}
            >
                {children}
            </DashboardPendingContext.Provider>
        </>
    )
};
 export default DashboardPendingProvider;




