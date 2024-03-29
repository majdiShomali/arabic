import React from "react";
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import Icon from '@mdi/react';
import { mdiAccountMultipleOutline ,
  mdiCashRegister,
  mdiSilverwareForkKnife ,
  mdiTableFurniture,
  mdiNotebookEditOutline ,
} from '@mdi/js';

import { AllContext } from "../../AllDataContext";


const Statistics = () => {

  const {AllIngredientsBase,setAllIngredientsUserBase} =useContext(AllContext)

  // const [users ,setUsers] = useState([])
  // const [restaurant ,setRestaurant] = useState([])
  // const [payment ,setPayment] = useState()
  // const [ordersData ,setOrdersData] = useState([])
  // const [restaurantTables ,setRestaurantTables] = useState([])
  // const [pendingTables ,setPendingTables] = useState([])
  
  


  const [persons, setPersons] = useState([]);
  const [allRecipe, setAllRecipe] = useState([]);


  const allUsers = async () => {
    const token = localStorage.getItem("auth");
    try {
      // Send the data to the server using an HTTP POST request
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: token,
        },
      });

      console.log(response.data);
      setPersons(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };


  const allRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes");
        setAllRecipe(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error inserting data:", error);
      }
    };


    const [TEarning, setTEarning] = useState(0);
    const [searchTermUsers, setSearchTermUsers] = useState("");
    const [FilterDataUsers, setFilterDataUsers] = useState([]);
  
    const allPayments = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/paymentAdmin");

            let Earning = 0;
            Earning = response.data.reduce((total, item) => {
              return total + parseInt(item.pricePayed);
            }, Earning);

            setTEarning(Earning);
          } catch (error) {
            console.error("Error inserting data:", error);
          }

        };

     
      useEffect(() => {
        allPayments();
      }, []);


  useEffect(() => {
    allRecipes();
  }, []);




  useEffect(() => {
    allUsers();
  }, []);


   useEffect(()=>{
  
  
    // axios.get('http://localhost:5000/records')
    // .then((response) => {
    //   setUsers(response.data)
    // })
    // .catch((error) => console.log(error.message))
  
  
    //   axios.get('http://localhost:5000/restaurants')
    //   .then((response) => {
    //     setRestaurant(response.data);
    //   })
    //   .catch((error) => console.log(error.message))
  
  
    //   axios.get('http://localhost:5000/paymentData')
    //   .then((response) => {
    //     setPayment(response.data);
    //   })
    //   .catch((error) => console.log(error.message))
  
      
    //   axios.get('http://localhost:5000/ordersData')
    //   .then((response) => {
    //     setOrdersData(response.data);
    //   })
    //   .catch((error) => console.log(error.message))
  
    //   axios.get('http://localhost:5000/restaurantTables')
    //   .then((response) => {
    //     setRestaurantTables(response.data.restaurantTables);
    //     setPendingTables(response.data.pendingTables);
    //   })
    //   .catch((error) => console.log(error.message))
  
      
  
  }, []);
  
//   console.log(users)
//   console.log(restaurant)
//   console.log(payment)
//   console.log(ordersData)
//   console.log(restaurantTables)
  











  return (
    <div className="mt-3 flex flex-wrap gap-6 p-10">
     
     
      <div className="!z-5 relative flex flex-col rounded-[20px] bg-[#E8AA42] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700 ">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon className="text-[#219D80]" path={mdiCashRegister} size={1} />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">Total Earning </p>
          <h4 className="text-xl font-bold text-[#219D80] dark:text-white">
            {TEarning} <span className="text-[#219D80]">$</span>
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex flex-col rounded-[20px] bg-[#E8AA42] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon className="text-[#219D80]" path={mdiAccountMultipleOutline} size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">
            Total Users 
          </p>
          <h4 className="text-xl font-bold text-[#219D80] dark:text-white">
            {persons?.length} 
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex flex-col rounded-[20px] bg-[#E8AA42] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon className="text-[#219D80]" path={mdiSilverwareForkKnife} size={1} />
            

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">Total Recipes</p>
          <h4 className="text-xl font-bold text-[#219D80] dark:text-white">
             {allRecipe?.length} 
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex flex-col rounded-[20px] bg-[#E8AA42] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon className="text-[#219D80]" path={mdiTableFurniture} size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">Ingredients</p>
          <h4 className="text-xl font-bold text-[#219D80] dark:text-white">
             {AllIngredientsBase?.length}
          </h4>
        </div>
      </div>
      {/* <div className="!z-5 relative flex flex-col rounded-[20px] bg-[#E8AA42] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon className="text-[#219D80]" path={mdiNotebookEditOutline} size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">Total orders</p>
          <h4 className="text-xl font-bold text-[#219D80] dark:text-white">
          </h4>
        </div>
      </div> */}
      {/* <div className="!z-5 relative flex flex-col rounded-[20px] bg-[#E8AA42] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon className="text-[#219D80]" path={mdiAccountMultipleOutline} size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">
            Pending Tables
          </p>
          <h4 className="text-xl font-bold text-[#219D80] dark:text-white">
          </h4>
        </div>
      </div> */}
    </div>
  );
};

export default Statistics;
