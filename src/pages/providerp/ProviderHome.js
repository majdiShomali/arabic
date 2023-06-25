import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { RecipeContext } from "../../RecipeContext";
import Pagination from "@mui/material/Pagination";
import Swal from "sweetalert2";
import Icon from "@mdi/react";
import { mdiFridge } from "@mdi/js";
import { mdiHamburgerPlus } from "@mdi/js";
import { mdiStove } from "@mdi/js";
import aboutMeal from "../../Images/meals/majdi.jpg";
import SidebarMyList from "../../components/user/SidebarMyList"
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";

import SideBarRecipe from "../../components/providerc/SideBarRecipe";
const ProviderHome = ({userIdApp0}) => {



  const [img, setImg] = useState("");

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    console.log(img);
  };
  const onLoad = (fileString) => {
    setImg(fileString);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  // const [userId ,setUserId] = useState()
  // const [providerRecipes ,setProviderRecipes] = useState([])
  // const [ingredientsApi ,setIngredientsApi] = useState([])
  // const [userDataMyListId, setUserDataMyListId] = useState();
  // const [MyList, setMyList] = useState([]);
  // const [MyListN, setMyListN] = useState([]);
  const [userAllIngredients, setUserAllIngredients] = useState();
  // const [filterDataVegetables0, setFilterDataVegetables0] = useState();
  // const [filterDataVegetables1, setFilterDataVegetables1] = useState();
  const [FilterDataMeals, setFilterDataMeals] = useState([]);

  const fetchProtectedData = async () => {
 
    try {
      const response = await axios.get(
        `http://localhost:5000/api/Ingredients`
      );
      updateSidebarIng([])
      // setIngredientsApi(response.data)
    } catch (error) {
      console.error("Error retrieving data:", error);
    }


    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userIdApp0}`);

      // setMyList(response.data[0].MyList);
      // setMyListN(response.data[0].MyListn);
      // setUserDataMyListId(response.data[0].MyListId)
      setUserAllIngredients(response.data[0].AllIngredientsId)
      setFilterDataMeals(response.data[0].AllIngredientsId)
      // setFilterDataVegetables1(() => {
      //   const newItems = response.data[0].AllIngredientsId.filter((item) => item.ingredientFlag !== false);
      //   {console.log(newItems);}
      //   return newItems;
      // });
      // setFilterDataVegetables0(() => {
      //   const newItems = response.data[0].AllIngredientsId.filter((item) => item.ingredientFlag !== true);
      //   {console.log(newItems);}
      //   return newItems;
      // })

 
      
    } catch (error) {
      console.error("Error retrieving data:", error);
    }


        try {
          const response = await axios.get(
            `http://localhost:5000/api/providerRecipes/${userIdApp0}`
          );
          // setProviderRecipes(response.data)
          setTable(response.data)

        } catch (error) {
          console.error("Error retrieving data:", error);
        }






 








      }
 









  // const allRecipes = async () => {
   
  //   try {
  //     // Send the data to the server using an HTTP POST request
  //     const response = await axios.get("http://localhost:5000/api/recipes");
  //     console.log(response.data);
  //      setTable(response.data)
  //   } catch (error) {
  //     console.error("Error inserting data:", error);
  //   }




  // };


  // useEffect(() => {

  //   allRecipes()

  // },[])




  let AddPlus = mdiPlus;
  let removMinus = mdiMinus;

  const [MyListAdmin, setMyListAdmin] = useState([]);
  const [MyListNAdmin, setMyListNAdmin] = useState([]);
  const [MyListIdAdmin, setMyListIdAdmin] = useState([]);

  const [foodCards, setFoodCards] = useState([]);
  const [foodCardsName, setFoodCardsName] = useState([]);

  // let vegetables_name = [
  //   "potato",
  //   "onion",
  //   "garlic",
  //   "Broccoli",
  //   "Cabbage",
  //   "Bean",
  //   "Arugula",
  //   "Carrot",
  //   "Cauliflower",
  //   "Celery",
  //   "Cherry Tomato",
  //   "Common Beans",
  //   "Cucumbers",
  //   "Eggplant",
  //   "Ginger",
  //   "Lemon",
  //   "Lettuce",
  //   "Mulukhiyah",
  //   "Mushrooms",
  //   "Okra",
  //   "Parsley",
  //   "pea",
  //   "radish",
  //   "red pepper",
  //   "Spinach",
  //   "sweet pepper",
  //   "tomato",
  // ];
  // let vegetables_img = [];
  // let vegetables_type = [];

  // let fruit_name = [
  //   "apple",
  //   "Apricot",
  //   "Avocado",
  //   "Banana",
  //   "Blackberries",
  //   "Blueberries",
  //   "Cherry",
  //   "Date Palm",
  //   "Grape",
  //   "Guava",
  //   "Kiwi",
  //   "Lime",
  //   "Mango",
  //   "Melon",
  //   "Nectarines",
  //   "Olives",
  //   "Orange",
  //   "Pear",
  //   "Pineapple",
  //   "Pomegranate",
  //   "Pomelo",
  //   "Raspberry",
  //   "Strawberry",
  //   "watermelon",
  // ];
  // let fruit_img = [];
  // let fruit_type = [];

  // arraytoimage(
  //   "Images/vegetables/",
  //   vegetables_name,
  //   vegetables_img,
  //   vegetables_type,
  //   "vegetables"
  // );
  // arraytoimage("Images/fruits/", fruit_name, fruit_img, fruit_type, "fruit");

  // function arraytoimage(fruit_name0, item_name, item_img, item_type, type) {
  //   for (let i = 0; i < item_name.length; i++) {
  //     item_img[i] = fruit_name0 + item_name[i] + ".png";
  //   }
  //   for (let i = 0; i < item_name.length; i++) {
  //     item_type[i] = type;
  //   }
  // }

  // let vegetables_obj = [];
  // arraytoobject(
  //   vegetables_name,
  //   vegetables_img,
  //   vegetables_type,
  //   vegetables_obj,
  //   "vegetables"
  // );

  // let fruit_obj = [];
  // arraytoobject(fruit_name, fruit_img, fruit_type, fruit_obj, "fruit");

  // function arraytoobject(item_name, item_img, item_type, items_obj, type) {
  //   for (let i = 0; i < item_name.length; i++) {
  //     let item_obj = {
  //       name: "name",
  //       img: "img",
  //       type: type,
  //       clicked: "Click to add",
  //       icon: AddPlus,
  //     };
  //     item_obj.name = item_name[i];
  //     item_obj.img = item_img[i];
  //     item_obj.type = item_type[i];
  //     items_obj.push(item_obj);
  //   }
  // }

  // const newArrayV = [...vegetables_obj];
  // const newArrayF = [...fruit_obj];
  // const newArrayAll = newArrayV.concat(newArrayF);

  // const [items, setItems] = useState(newArrayAll);

  //-----------------------search------------------------//
  // const [searchTerm, setSearchTerm] = useState("");
  // const [FilterData, setFilterData] = useState([...userAllIngredients]);

  // const filterDataByName = (searchTerm) => {
  //   const filteredData = items.filter((item) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilterData(filteredData);
  //   setCurrentPage(1);
  // };

  //----------------------pagination----------------------------//

  const [currentPage, setCurrentPage] = useState(1);

  let totalItems;
  let totalPages;
  let slicedArray;

  const itemsPerPage = 6;

  totalItems = FilterDataMeals?.length;

  totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  slicedArray = FilterDataMeals?.slice(startIndex, endIndex);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };



  //--------------------------------------------------------------------------------------//

  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [currentLinks, setCurrentLinks] = useState([]);

  const [table, setTable] = useState([]);

  const [yourSelectedStateValue, setOption] = useState("Meal");

  const [ButtonStatus, setButtonStatus] = useState("create");
  const [ButtonStatusId, setButtonStatusId] = useState();

  const CreateNew = async() => {
    let link_name001;
    let link_name002;
    let link_name003;

    if (link1 != "") {
      link_name001 = "https://www.youtube.com/embed/".concat(
        link1.replace("https://youtu.be/", "")
      );
    } else {
      link_name001 = link1;
    }

    if (link2 != "") {
      link_name002 = "https://www.youtube.com/embed/".concat(
        link2.replace("https://youtu.be/", "")
      );
    } else {
      link_name002 = link2;
    }
    if (link3 != "") {
      link_name003 = "https://www.youtube.com/embed/".concat(
        link3.replace("https://youtu.be/", "")
      );
    } else {
      link_name003 = link3;
    }

      let tableObj = {
        recipeName: name,
        providerId:userIdApp0,
        category: yourSelectedStateValue,
        names: [name1, name2, name3],
        links: [link_name001, link_name002, link_name003],
        Items: foodCards,
        ItemsName: foodCardsName,
        img:img,
        ItemsId:MyListIdAdmin
      };

    // const userData = {
    //   recipes: tableObj,
    // };
  
    try {
      // Send the data to the server using an HTTP POST request
      const response = await axios.post(
        "http://localhost:5000/api/recipes",
        tableObj
      );
      console.log(response.data)  
    } catch (error) {
      console.error("Error inserting data:", error);
    }




      setName("");
      setName1("");
      setName2("");
      setName3("");
      setLink1("");
      setLink2("");
      setLink3("");
      setMyListAdmin([]);
      setMyListNAdmin([]);
      setMyListIdAdmin([]);
      setFoodCards([]);
      setFoodCardsName([]);
      // let NewItems = [...items];
      // NewItems.map((et) => {
      //   et.clicked = "Click to add";
      // });
      // setItems(NewItems);

      
      // allRecipes()

  }

  function ShowVideos(index) {
    table[index].Links.map((e) => {
      setCurrentLinks((prevArray) => [...prevArray, e]);
    });
  }


  const DeleteRecipe = async (Id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${Id}`);
      // fetchUsers(); // Refresh the user list after deleting a user
      // allRecipes()
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  


  function UpdateRecipe(e, id) {

    e.ItemsName.map((name)=>{
      UpdateBeneficiaryId(name)
    })





    let link_name001;
    let link_name002;
    let link_name003;
    if (e.links[0] != "") {
      link_name001 = "https://youtu.be/".concat(
      e.links[0].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name001 = "";
    }

    if (e.links[1] != "") {
      link_name002 = "https://youtu.be/".concat(
        e.links[1].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name002 = "";
    }

    if (e.links[2] != "") {
      link_name003 = "https://youtu.be/".concat(
        e.links[2].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name003 = "";
    }

    setName(e.recipeName);
    setName1(e.names[0]);
    setName2(e.names[1]);
    setName3(e.names[2]);
    setLink1(link_name001);
    setLink2(link_name002);
    setLink3(link_name003);
    console.log(e.ItemsName)
    setMyListAdmin(e.Items);
    //  updateSidebarIng(e.Items)
    setMyListNAdmin(e.ItemsName);
    setMyListIdAdmin(e.ItemsId);
    setImg(e.img)


    // setUserAllIngredients((prevAccounts) => {
    //   const newItems = prevAccounts.filter((item) => item.ingredientFlag !== false);
    //   return newItems;
    // });


    // let NewItems = [...userAllIngredients];
    // NewItems.map((et) => {

    //   if (e.ItemsName.includes(et.ingredientName)) {
    //     et.ingredientFlag = true;
    //   }
    // });


    // setUserAllIngredients((prevAccounts) => {
    //   const newItems = NewItems.filter((item) => item.ingredientFlag !== true);
    //   return newItems;
    // });

   
    setButtonStatus("update");
    setButtonStatusId(id);
  }

  const UpdateNow =async ()=> {

    let link_name001;
    let link_name002;
    let link_name003;


    if (link1 != "") {
      link_name001 = "https://www.youtube.com/embed/".concat(
        link1.replace("https://youtu.be/", "")
      );
    } else {
      link_name001 = link1;
    }

    if (link2 != "") {
      link_name002 = "https://www.youtube.com/embed/".concat(
        link2.replace("https://youtu.be/", "")
      );
    } else {
      link_name002 = link2;
    }
    if (link3 != "") {
      link_name003 = "https://www.youtube.com/embed/".concat(
        link3.replace("https://youtu.be/", "")
      );
    } else {
      link_name003 = link3;
    }




    try {

      const updatedRecipe = {
        recipeName: name,
        category: yourSelectedStateValue,
        names:[name1,name2,name3],
        links: [link_name001,link_name002,link_name003],
        Items: MyListAdmin,
        ItemsName: MyListNAdmin,
        img:img
      }
      
console.log(updatedRecipe)
      await axios.put(`http://localhost:5000/api/recipes/${ButtonStatusId}`, updatedRecipe);
      // fetchUsers(); // Refresh the user list after updating a user
    } catch (error) {
      console.error("Error updating user:", error);
    }


  }


  function removeItem0(name,ingredientId) {
    setMyListAdmin((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item.ingredientName !== name);
      return newItems;
    });


    updateSidebarIng((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item.ingredientName !== name);
      return newItems;
    });

    setFoodCards((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item.ingredientName !== name);
      return newItems;
    });
    setMyListNAdmin((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item !== name);
      return newItems;
    });
    setMyListIdAdmin((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item !== ingredientId);
      return newItems;
    });
console.log(MyListIdAdmin)
    setFoodCardsName((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item !== name);
      return newItems;
    });
  }

 
  const { SidebarIngName, updateSidebarIngName}= useContext(RecipeContext);
  const { SidebarIngId, updateSidebarIngId}= useContext(RecipeContext);
   const { RecipeStatus, updateRecipeStatus } = useContext(RecipeContext);
    // const { RecipeElement, updateRecipeElement } = useContext(RecipeContext);

  useEffect(() => {
if(SidebarIngName !== ""){
  console.log(SidebarIngName)
  UpdateBeneficiaryId(SidebarIngName,SidebarIngId)
  
}
  },[SidebarIngName])

//   useEffect(() => {
//     updateSidebarIngName("")
// },[])

useEffect(()=>{
  console.log("222222222222222222222222222222")

  if(SidebarIngName === ""){   
    fetchProtectedData()
  }
},[])

  const UpdateBeneficiaryId = async (ingredientName,ingredientId) => {

console.log(ingredientId)
    const newArrayAll = [...userAllIngredients];
    newArrayAll.map((e) => {
      
      if (ingredientName.toLowerCase() == e.ingredientName.toLowerCase()) {

        console.log(ingredientName,e.ingredientFlag)
      }
      if (ingredientName.toLowerCase() == e.ingredientName.toLowerCase()) {
        if (e.ingredientFlag == false) {
              e.ingredientFlag = true;           
              setMyListAdmin((prevArray) => [...prevArray, e]);
              updateSidebarIng((prevArray) => [...prevArray, e])
              setMyListNAdmin((prevArray) => [...prevArray, e.ingredientName]);
              setMyListIdAdmin((prevArray) => [...prevArray, e._id]);
              setFoodCards((prevArray) => [...prevArray, e]);
              setFoodCardsName((prevArray) => [...prevArray, e.ingredientName]); 
               console.log(MyListIdAdmin)
        } else {
             e.ingredientFlag = false;
              removeItem0(ingredientName,ingredientId);      
        }
      }
    
    });
    // setItems(() => {
    //   return newArrayAll;
    // });

  //  setUserAllIngredients((prevAccounts) => {
  //     const newItems = newArrayAll.filter((item) => item.ingredientFlag !== true);
  //     return newItems;
  //   });

  setUserAllIngredients((prevAccounts) => {
    const newItems = [...prevAccounts];
    const trueItems = newItems.filter((item) => item.ingredientFlag === true);
    const falseItems = newItems.filter((item) => item.ingredientFlag !== true);
    return [...falseItems, ...trueItems];
  });

  updateRecipeStatus(false)


  };



  const { SidebarIng, updateSidebarIng } = useContext(RecipeContext);


  const [searchTermUsers, setSearchTermUsers] = useState("");
  const filterDataByNameUsers = (searchTermMeals) => {
    const filteredDataMeals = userAllIngredients?.filter((item) =>
      item.ingredientName.toLowerCase().includes(searchTermMeals.toLowerCase())
    );
    setFilterDataMeals(filteredDataMeals);
    console.log(filteredDataMeals)
    // setCurrentPageMeals(1);
  };

  const [yourSelectedStateValueType, setOptionType] = useState("");
  const [yourSelectedStateValueAddress, setOptionAddress] = useState("");

  const handleFilterChange = (typeValue, addressValue) => {
    const filteredDataUsers = userAllIngredients?.filter(
      (item) =>
        item.ingredientType?.toLowerCase().includes(typeValue.toLowerCase()) &&
        item.ingredientType?.toLowerCase().includes(addressValue.toLowerCase())
    );
    setFilterDataMeals(filteredDataUsers);
};
  return (
    <>
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
              value={searchTermUsers}
              onChange={(e) => {
                setSearchTermUsers(e.target.value);
                filterDataByNameUsers(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-1  md:grid-cols-3 sm:grid-cols-1  gap-4 mt-4 ">
              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance mr-5"
                value={yourSelectedStateValueType}
                onChange={(e) => {
                  setOptionType(e.target.value);
                  handleFilterChange(
                    e.target.value,
                    yourSelectedStateValueAddress
                  );
                }}
              >
                <option value=""> All ingredients</option>
                <option value="vegetables">vegetables</option>
                <option value="fruit">fruit</option>
              </select>

              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-[#E8AA42] focus:bg-white focus:ring-0 text-sm appearance"
                value={yourSelectedStateValueAddress}
                onChange={(e) => {
                  setOptionAddress(e.target.value);
                  handleFilterChange(
                    yourSelectedStateValueType,
                    e.target.value
                  );
                }}
              >
                <option value="">all donation Case</option>
                <option value="Stray Animals">Stray Animals</option>
                <option value="injured animals">injured animals</option>
              </select>
            </div>


          </div>
        </div>
      </div>



<SideBarRecipe/>
<div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1">
              {slicedArray?.map((e, i) => {
                return (
                 <>
            {e.ingredientFlag === false ?<>
                                  
              <div
                    key={e.id}
                    onClick={() => UpdateBeneficiaryId(e.ingredientName,e._id)}
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
                        
            </> : null}
                
                  </>
                );
              })}
            </div>

     <div className="w-full flex justify-center">
        {
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        }
      </div> 




    {/* <SidebarMyList/> */}



    {/* <div className="flex">
        {MyListAdmin?.map((e, i) => {
          return (
            <div
            key={e.ingredientName}
            onClick={() => UpdateBeneficiaryId(e.ingredientName)}
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
      </div> */}







    
      {/* <div className="flex">
        {MyListAdmin?.map((e, i) => {
          return (
            <div
            key={e.name}
            onClick={() => changeStatus(e.name, i)}
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
                src={require(`../../${e.img}`)}
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
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                filterDataByName(e.target.value);
              }}
            />
          </div>


        </div>
      </div> */}




{/* 
      <fieldset className="">
        <legend>
          All ingredients:

        </legend>

        <div className="flex">
          {slicedArray.map((e, i) => {
            return (
              <div
                onClick={() => changeStatus(e.name, i)}
                id={e.name}
                className="ingredient_class vegetables"
                data-target={e.name}
              >
                <h4>{e.name}</h4>
                <Icon className="iconAddOrRemove" path={e.icon} size={1} />
                <img className="vegetablesimg" src={require(`../../${e.img}`)} />
                <div className="pContainerCard vegetablespd">
                  <p className="vegetablesp">{e.clicked}</p>
                </div>
              </div>


              <div
              key={e.name}
              onClick={() => changeStatus(e.name, i)}
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
                  src={require(`../../${e.img}`)}
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
        </div>
      </fieldset> */}

      {/* <div className="w-full flex justify-center">
        {
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        }
      </div> */}

      <div className=" mb-4 mt-4">
        <Card color="transparent" shadow={false}>
     
            <div className="flex justify-center">

  <form className="mt-4 mb-2">
    <div className="mb-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Meal Name"
      />
    </div>

    <div className="mb-4 flex lg:flex-row sm:flex-col">
      <Input
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        label="Name 1"
      />
      <Input
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        label="Name 2"
      />
      {/* <Input
        value={name3}
        onChange={(e) => setName3(e.target.value)}
        label="Name 3"
      /> */}
    </div>

    <div className="mb-4 flex lg:flex-row sm:flex-col">
      <Input
        value={link1}
        onChange={(e) => setLink1(e.target.value)}
        label="Youtube link 1"
      />
      <Input
        value={link2}
        onChange={(e) => setLink2(e.target.value)}
        label="Youtube link 2"
      />
      {/* <Input
        value={link3}
        onChange={(e) => setLink3(e.target.value)}
        label="Youtube link 3"
      /> */}
    </div>


                <div>
                  <label className="font-medium">Case Image</label>

                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                    placeholder="Table Image"
                    name="guest_num"
                    onChange={(e) => {
                      onChange(e);
                    }}
                    accept="image/*"
                  />
                </div>


    <div>
      <select
        value={yourSelectedStateValue}
        onChange={(e) => setOption(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="Meal">Meals</option>
        <option value="Drink">Drinks</option>
        <option value="Sweet">Sweets</option>
      </select>
    </div>

    {ButtonStatus === "create" ? (
      <Button
        onClick={() => CreateNew()}
        className="mt-6 bg-[#E8CC95] w-full"
      >
        Create
      </Button>
    ) : (
      <Button
        onClick={() => UpdateNow()}
        className="mt-6 bg-[#E8CC95] w-full"
      >
        Update
      </Button>
    )}
  </form>
</div>
        </Card>
      </div>




      <div class="grid grid-cols-4 justify-items-center items-center">
    {table?.map((e, i) => {     
        return (

          <>
              <div key={e.recipeName} className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-25">
    <div>
      <img
        className="w-full h-72 "
        src={e.img}
        alt="Recipe Title"
      />
    </div>
    <div className="p-4">
      <h2 className="text-2xl text-[#E8CC95]">{e.recipeName}</h2>
      <div className="flex justify-between mt-2 mb-2 text-[#158467]">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-1 lg:text-xl">30m</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1 lg:text-xl">10</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span className="ml-1 lg:text-xl">1-2</span>
        </div>
      </div>
      <p className="mb-2 text-gray-800">
        A recipe that's quick and easy to make and super tasty!
      </p>
  
      <div className="flex justify-around">


                <Button
                   className="mr-5 border mb-10 border-solid border-[#d1aa36] border-2 text-[#060606] hover:bg-[#c9ac39] hover:text-[#ffffff]"
                   variant="text"
                              
                   onClick={()=>UpdateRecipe(e,e._id)}>Edit  </Button>


                  <Button
                   className="mr-5 border mb-10 border-solid border-[#eb2b2b] border-2 text-[#060606] hover:bg-[#e84242] hover:text-[#ffffff]"
                   variant="text"
                              
                   onClick={()=>DeleteRecipe(e._id)}>delete </Button>
      </div>


    </div>
    <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#E8CC95] text-gray-800 rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
      <span>Medium</span>
    </div>
  </div>

          </>
   
        );
    
    })}
  </div>





      {/* //--------------------------------------------------------------------------// */}

      {/* <div id="crud">
        <div className="outputs">

          <div id="table_div">
            <table id="table_body">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>category</th>
                  <th>view</th>
                  <th>update</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {table.map((e, i) => {
                  return (
                    <tr key={i}>
                           
                      <th>{e._id}</th>
                      <th>{e.recipeName}</th>
                      <th>{e.category}</th>
                      <th>
                        {" "}
                        <button onClick={() => ShowVideos(i)}>view</button>{" "}
                      </th>
                      <th>
                        {" "}
                        <button onClick={() => UpdateRecipe(e, e._id)}>
                          update
                        </button>{" "}
                      </th>
                      <th>
                        {" "}
                        <button onClick={() => DeleteRecipe(e._id)}>
                          delete
                        </button>{" "}
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="cook_now_videos">
        <div class="video-list">
          {currentLinks.map((e) => {
            return (
              <iframe
                src={e}
                style={{ height: "315px", width: "560px" }}
                title="YouTube video player"
                allowfullscreen
              ></iframe>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default ProviderHome;
