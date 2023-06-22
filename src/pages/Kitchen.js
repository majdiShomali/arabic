import React from "react";
// import "./kitchen.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import AboutUsed from "./aboutPage/AboutUsed";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";
import IngredientsCard from "../components/user/IngredientsCard";
import SidebarMyList from "../components/user/SidebarMyList";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { KitContext } from "../KitchenContext";
import axios from "axios";

const Kitchen = () => {
  let AddPlus = mdiPlus;
  let removMinus = mdiMinus;

  let vegetables_name = [
    "potato",
    "onion",
    "garlic",
    "Broccoli",
    "Cabbage",
    "Bean",
    "Arugula",
    "Carrot",
    "Cauliflower",
    "Celery",
    "Cherry Tomato",
    "Common Beans",
    "Cucumbers",
    "Eggplant",
    "Ginger",
    "Lemon",
    "Lettuce",
    "Mulukhiyah",
    "Mushrooms",
    "Okra",
    "Parsley",
    "pea",
    "radish",
    "red pepper",
    "Spinach",
    "sweet pepper",
    "tomato",
  ];
  let vegetables_img = [];
  let vegetables_type = [];
  let fruit_name = [
    "apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Blackberries",
    "Blueberries",
    "Cherry",
    "Date Palm",
    "Grape",
    "Guava",
    "Kiwi",
    "Lime",
    "Mango",
    "Melon",
    "Nectarines",
    "Olives",
    "Orange",
    "Pear",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Raspberry",
    "Strawberry",
    "watermelon",
  ];
  let fruit_img = [];
  let fruit_type = [];

  arraytoimage(
    "Images/vegetables/",
    vegetables_name,
    vegetables_img,
    vegetables_type,
    "vegetables"
  );
  arraytoimage("Images/fruits/", fruit_name, fruit_img, fruit_type, "fruit");

  function arraytoimage(fruit_name0, item_name, item_img, item_type, type) {
    for (let i = 0; i < item_name.length; i++) {
      item_img[i] = fruit_name0 + item_name[i] + ".png";
    }
    for (let i = 0; i < item_name.length; i++) {
      item_type[i] = type;
    }
  }

  let vegetables_obj = [];

  arraytoobject(
    vegetables_name,
    vegetables_img,
    vegetables_type,
    vegetables_obj,
    "vegetables"
  );

  let fruit_obj = [];
  arraytoobject(fruit_name, fruit_img, fruit_type, fruit_obj, "fruit");

  function arraytoobject(item_name, item_img, item_type, items_obj, type) {
    for (let i = 0; i < item_name.length; i++) {
      let item_obj = {
        name: "name",
        img: "img",
        type: type,
        clicked: "Click to add",
        icon: AddPlus,
      };
      item_obj.name = item_name[i];
      item_obj.img = item_img[i];
      item_obj.type = item_type[i];
      items_obj.push(item_obj);
    }
  }

  localStorage.setItem("vegetables_obj", JSON.stringify(vegetables_obj));
  localStorage.setItem("fruit_obj", JSON.stringify(fruit_obj));

  //------------------------------------------------------//

  const [userId, setUserId] = useState();
  const [userDataMyListId, setUserDataMyListId] = useState();
  const [userAllIngredients, setUserAllIngredients] = useState();
  const [userAllIngredients0, setUserAllIngredients0] = useState();

  let localList = [];
  let localListN = [];

  const [MyList, setMyList] = useState([]);
  const [MyListN, setMyListN] = useState([]);

  const [vegetables, setVegetables] = useState([...vegetables_obj]);
  const [fruit, setFruit] = useState([...fruit_obj]);

  const handleShowUser = async (id) => {



    try {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      const newArrayV = [...vegetables_obj];
      const newArrayF = [...fruit_obj];
      localList = response.data[0].MyList;
      localListN = response.data[0].MyListn;
      setMyList(response.data[0].MyList);
      setMyListN(response.data[0].MyListn);
      setUserDataMyListId(response.data[0].MyListId)
      setUserAllIngredients(response.data[0].AllIngredientsId)
     
      setUserAllIngredients0(() => {
        const newItems = response.data[0].AllIngredientsId.filter((item) => item.ingredientFlag !== true);
        return newItems;
      });
      setFilterDataVegetables0(() => {
        const newItems = response.data[0].AllIngredientsId.filter((item) => item.ingredientFlag !== true);
        return newItems;
      })

      newArrayV.map((e) => {
        if (localListN.includes(e.name)) {
          e.clicked = "Added";
          e.icon = removMinus;
        }
      });

      setVegetables(newArrayV);

      newArrayF.map((e) => {
        if (localListN.includes(e.name)) {
          e.clicked = "Added";
          e.icon = removMinus;
        }
      });

      setFruit(newArrayF);






      
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      console.log(token);
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUserId(response.data.user.id);
        handleShowUser(response.data.user.id);
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
    }
  };
  const { MyListSideBarCon, updateMyListSideBarCon} = useContext(KitContext);

  useEffect(() => {
    fetchProtectedData();
  }, [MyListSideBarCon]);

  //-----------------------search------------------------//
  const [searchTermVegetables, setSearchTermVegetables] = useState("");
  const [FilterDataVegetables, setFilterDataVegetables] = useState([
    ...vegetables_obj,
  ]);

  const [searchTermFruit, setSearchTermFruit] = useState("");
  const [FilterDataFruit, setFilterDataFruit] = useState([...fruit_obj]);

  const filterDataByNameVegetables = (searchTermVegetables) => {
    const filteredDataVegetables = vegetables.filter((item) =>
      item.name.toLowerCase().includes(searchTermVegetables.toLowerCase())
    );
    setFilterDataVegetables(filteredDataVegetables);
    setCurrentPageVegetables(1);
  };

  const filterDataByNameFruit = (searchTermFruit) => {
    const filteredDataFruit = fruit.filter((item) =>
      item.name.toLowerCase().includes(searchTermFruit.toLowerCase())
    );
    setFilterDataFruit(filteredDataFruit);
    setCurrentPageFruit(1);
  };
  //----------------------------------------------------//

  const [currentPageVegetables, setCurrentPageVegetables] = useState(1);
  const [currentPageFruit, setCurrentPageFruit] = useState(1);

  let totalItemsVegetables;
  let totalItemsFruit;

  let totalPagesVegetables;
  let totalPagesFruit;

  let slicedArrayVegetables;
  let slicedArrayFruit;

  const itemsPerPage = 6;

  totalItemsVegetables = FilterDataVegetables.length;
  totalItemsFruit = FilterDataFruit.length;

  totalPagesVegetables = Math.ceil(totalItemsVegetables / itemsPerPage);
  totalPagesFruit = Math.ceil(totalItemsFruit / itemsPerPage);

  const startIndexVegetables = (currentPageVegetables - 1) * itemsPerPage;
  const startIndexFruit = (currentPageFruit - 1) * itemsPerPage;

  const endIndexVegetables = startIndexVegetables + itemsPerPage;
  const endIndexFruit = startIndexFruit + itemsPerPage;

  slicedArrayVegetables = FilterDataVegetables.slice(
    startIndexVegetables,
    endIndexVegetables
  );
  slicedArrayFruit = FilterDataFruit.slice(startIndexFruit, endIndexFruit);

  const handlePageChangeVegetables = (event, pageNumber) => {
    setCurrentPageVegetables(pageNumber);
  };
  const handlePageChangeFruit = (event, pageNumber) => {
    setCurrentPageFruit(pageNumber);
  };

  //--------------------------------

  let arr0 = [...MyList];
  let arr1 = [...MyListN];

  const changeStatusV = async (name, i) => {
    // let userid = JSON.parse(localStorage.userid);
    const newArray = [...vegetables];
    newArray.map((e) => {
      if (name === e.name) {
        if (e.clicked === "Click to add") {
          e.clicked = "Added";
          e.icon = removMinus;
          setMyList((prevArray) => [...prevArray, e]);
          setMyListN((prevArray) => [...prevArray, e.name]);
          arr0.push(e);
          arr1.push(e.name);
        } else {
          e.clicked = "Click to add";
          e.icon = AddPlus;
          removeItem(name);

          arr0 = arr0.filter((item) => item.name !== name);

          arr1 = arr1.filter((item) => item !== name);
        }
      }
    });
    setVegetables(() => {
      return newArray;
    });

    try {
      const updatedUser = {
        // Update the properties of the user as needed
        MyList: arr0,
        MyListn: arr1,
      };

      await axios.put(`http://localhost:5000/api/users/${userId}`, updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const [statusList, setStatusList] = useState(false);

  function updateList() {
    // let userid = JSON.parse(localStorage.userid);
  }

  const changeStatusF = async (name, i) => {
    const newArray = [...fruit];
    newArray.map((e) => {
      if (name === e.name) {
        if (e.clicked === "Click to add") {
          e.clicked = "Added";
          e.icon = removMinus;
          setMyList((prevArray) => [...prevArray, e]);
          setMyListN((prevArray) => [...prevArray, e.name]);
          arr0.push(e);
          arr1.push(e.name);
        } else {
          e.clicked = "Click to add";
          e.icon = AddPlus;
          removeItem(name);
          arr0 = arr0.filter((item) => item.name !== name);

          arr1 = arr1.filter((item) => item !== name);
        }
      }
    });
    setFruit(() => {
      return newArray;
    });

    // let userid = JSON.parse(localStorage.userid);

    try {
      const updatedUser = {
        // Update the properties of the user as needed
        MyList: arr0,
        MyListn: arr1,
      };

      await axios.put(`http://localhost:5000/api/users/${userId}`, updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
    }
    axios
      .put(`http://localhost:4000/contactus00/${userId}`, {
        userlist: arr0,
        userlistn: arr1,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function changeStatus(name, i) {
    const newArrayV = [...vegetables_name];
    const newArrayF = [...fruit_name];

    if (newArrayF.includes(name)) {
      changeStatusF(name, i);
    } else if (newArrayV.includes(name)) {
      changeStatusV(name, i);
    }
  }

  function removeItem(name) {
    setMyList((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item.name !== name);
      return newItems;
    });

    setMyListN((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item !== name);
      return newItems;
    });
  }

  const [SearchType, setSearchType] = useState("");
  const [SearchTerm, setSearchTerm] = useState("");


    const UpdateBeneficiaryId = async (cardId ,ingredientFlag) => {
      let newUsersId = userDataMyListId
      console.log(newUsersId,"userList")
      if(userDataMyListId.includes(cardId)){
        //  setUserAllIngredients() 
          // const newItems = prevAccounts.filter((item) => item._id !== cardId);
         newUsersId = newUsersId.filter(item => item !== cardId);
         console.log(newUsersId,"userListFilterd")
      }else{
        newUsersId.push(cardId)
        console.log(newUsersId,"userListNew")
      }
      
      let newItems=[]
      if(ingredientFlag !== true){
        newItems= userAllIngredients.map((item) =>{
        if(item._id === cardId){
        item.ingredientFlag = true
        }
        return item
          })

        } else {

          newItems= userAllIngredients.map((item) =>{
            if(item._id === cardId){
            item.ingredientFlag = false
            }
            return item
              })


        }


        let newItemsNames = newItems
        .map((item) => {
          if (item.ingredientFlag === true) {
            return item.ingredientName;
          }
          return null;
        })
        .filter((name) => name !== null);
      

      try {
        const updatedBeneficiary = {
            MyListn: newItemsNames,
          AllIngredientsId:newItems
        };
    
        await axios.put(`http://localhost:5000/api/users/${userId}`, updatedBeneficiary);
        // allBeneficiarys();
        fetchProtectedData()
      } catch (error) {
        console.error("Error updating user:", error);
      }



 
      
    };

    const [SearchTerm0, setSearchTerm0] = useState("");
    const [SearchType00, setSearchType00] = useState("");

  //-----------------------search------------------------//
  const [searchTermVegetables0, setSearchTermVegetables0] = useState("");
  const [FilterDataVegetables0, setFilterDataVegetables0] = useState([]);


  const filterDataByNameVegetables0 = (searchTermVegetables0) => {
    const filteredDataVegetables = userAllIngredients0.filter((item) =>
      item.ingredientName.toLowerCase().includes(searchTermVegetables0.toLowerCase())
    );
    setFilterDataVegetables0(filteredDataVegetables);
    // setCurrentPageVegetables(1);
  };


  //----------------------------------------------------//


  const setSearchType0 = (typeValue) => {


    const filteredDataUsers = userAllIngredients0?.filter(
      (item) =>
        item.ingredientType?.toLowerCase().includes(typeValue.toLowerCase()) 
    );
    setFilterDataVegetables0(filteredDataUsers);


};




  return (
    <>


<SidebarMyList MyListnnn={MyList} />

<div
  className="bg-cover bg-center h-screen shadow"
  style={{
    backgroundImage:
      'url("https://zipinventory.com/assets/images/collections/10-restaurant-service-models-1607720498-5934-800-e549f94cb.webp")',
    height: "400px",
    marginBottom: "50px",
  }}
>
  <div className="flex items-center justify-center h-full bg-black bg-opacity-10">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Restaurants</h1>

      <nav className="text-white mb-8">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className="text-amber-500">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>Restaurants</li>
        </ol>
      </nav>
    </div>
  </div>
</div>








<div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8 shadow shadow-black p-5 rounded-lg bg-white border-solid border-1 border-[#0e0d0d] transform transition duration-300 ">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by listing, location, bedroom number..."
              className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={SearchTerm0}
              onChange={(e) => {
                setSearchTerm0(e.target.value);
                setSearchTermVegetables0(e.target.value);
                filterDataByNameVegetables0(e.target.value);

              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-yellow-500 border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance-none mr-5"
                value={SearchType00}
                onChange={(e) => {setSearchType00(e.target.value)
                  setSearchType0(e.target.value)
                
                }}
              >
                <option value="">All Type</option>
                <option value="vegetables">vegetables</option>
                <option value="fruit">fruit</option>
              </select>
            </div>
          </div>
        </div>
      </div>






<div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1">
              {FilterDataVegetables0?.map((e, i) => {
                return (
                 

                  <div
                    key={i}
                    onClick={() => UpdateBeneficiaryId(e._id,e.ingredientFlag)}
                    className={` flex-shrink-0 m-1 relative overflow-hidden ${ e.ingredientType=="vegetables" ?  "bg-[#2bda2b]" : "bg-[#d7e423]" }  rounded-lg max-w-xs shadow-lg w-48 h-60 hover:scale-110 hover:cursor-pointer`}
                  >
                    <svg
                      className="absolute bottom-0 left-0 mb-8"
                      viewBox="0 0 375 283"
                      fill="none"
                      style={{ transform: "scale(1.5)", opacity: "0.1" }}
                    >
                      <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                      />
                      <rect
                        y="107.48"
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 0 107.48)"
                        fill="white"
                      />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                      <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                          background: "radial-gradient(black, transparent 60%)",
                          transform:
                            "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                          opacity: "0.2",
                        }}
                      />
                      <img
                        className="relative w-40 h-32"
                        src={e.img}
                        alt=""
                      />
                    </div>
                    <div className=" text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 -mb-1">{e.ingredientType}</span>
                      <div className="flex justify-between">
                        <span className="block font-semibold ">{e.ingredientName}</span>

          
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>












      {/* <button onClick={()=>{updateList()
        }}>save</button> */}
      {/* <AboutUsed/> */}

      {/* <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8 shadow shadow-black p-5 rounded-lg bg-white border-solid border-1 border-[#0e0d0d] transform transition duration-300 ">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by listing, location, bedroom number..."
              className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={SearchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchTermVegetables(e.target.value);
                filterDataByNameVegetables(e.target.value);
                setSearchTermFruit(e.target.value);
                filterDataByNameFruit(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-yellow-500 border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance-none mr-5"
                value={SearchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="">All Type</option>
                <option value="vegetables">vegetables</option>
                <option value="fruit">fruit</option>
              </select>
            </div>
          </div>
        </div>
      </div> */}

      {SearchType === "" || SearchType === "vegetables" ? (
        <>
{/* <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1">
              {slicedArrayVegetables.map((e, i) => {
                return (
                 

                  <div
                    key={e.name}
                    onClick={() => changeStatusV(e.name, i)}
                    className="flex-shrink-0 m-1 relative overflow-hidden bg-[#44c582] rounded-lg max-w-xs shadow-lg w-48 h-60 hover:scale-110 hover:cursor-pointer"
                  >
                    <svg
                      className="absolute bottom-0 left-0 mb-8"
                      viewBox="0 0 375 283"
                      fill="none"
                      style={{ transform: "scale(1.5)", opacity: "0.1" }}
                    >
                      <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                      />
                      <rect
                        y="107.48"
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 0 107.48)"
                        fill="white"
                      />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                      <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                          background: "radial-gradient(black, transparent 60%)",
                          transform:
                            "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                          opacity: "0.2",
                        }}
                      />
                      <img
                        className="relative w-40 h-32"
                        src={require(`../${e.img}`)}
                        alt=""
                      />
                    </div>
                    <div className=" text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 -mb-1">{e.type}</span>
                      <div className="flex justify-between">
                        <span className="block font-semibold ">{e.name}</span>

                        <Icon
                          style={{
                            backgroundColor:
                              e.icon === mdiPlus ? "green" : "red",
                          }}
                          color="white"
                          className="iconAddOrRemove absolute top-1 right-1 rounded-lg"
                          path={e.icon}
                          size={1}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}

          {/* <div className="flex justify-center mb-5">
            {
              <Pagination
                count={totalPagesVegetables}
                page={currentPageVegetables}
                onChange={handlePageChangeVegetables}
              />
            }
          </div> */}
        </>
      ) : null}

      {SearchType === "" || SearchType === "fruit" ? (
        <>

{/* <div className="grid  lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1">
              {slicedArrayFruit.map((e, i) => {
                return (
                  <div
                    key={e.name}
                    onClick={() => changeStatusF(e.name, i)}
                    className="flex-shrink-0 m-1 relative overflow-hidden bg-[#ccb653] rounded-lg max-w-xs shadow-lg w-48 h-60 hover:scale-110 hover:cursor-pointer"
                  >
                    <svg
                      className="absolute bottom-0 left-0 mb-8"
                      viewBox="0 0 375 283"
                      fill="none"
                      style={{ transform: "scale(1.5)", opacity: "0.1" }}
                    >
                      <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                      />
                      <rect
                        y="107.48"
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 0 107.48)"
                        fill="white"
                      />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                      <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                          background: "radial-gradient(black, transparent 60%)",
                          transform:
                            "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                          opacity: "0.2",
                        }}
                      />
                      <img
                        className="relative w-40 h-32"
                        src={require(`../${e.img}`)}
                        alt=""
                      />
                    </div>
                    <div className=" text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 -mb-1">{e.type}</span>
                      <div className="flex justify-between">
                        <span className="block font-semibold ">{e.name}</span>

                        <Icon
                          style={{
                            backgroundColor:
                              e.icon === mdiPlus ? "green" : "red",
                          }}
                          color="white"
                          className="iconAddOrRemove absolute top-1 right-1 rounded-lg"
                          path={e.icon}
                          size={1}
                        />
                      </div>
                    </div>
                  </div>

                 
                );
              })}
            </div> */}

          {/* <div className="flex justify-center mb-5">
            {
              <Pagination
                count={totalPagesFruit}
                page={currentPageFruit}
                onChange={handlePageChangeFruit}
              />
            }
          </div> */}
        </>
      ) : null}
    </>
  );
};

export default Kitchen;
