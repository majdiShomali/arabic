import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { RecipeContext } from "../../RecipeContext";
import Pagination from "@mui/material/Pagination";

import axios from "axios";
import { Card, Input, Button } from "@material-tailwind/react";

import SideBarRecipe from "../../components/providerc/SideBarRecipe";

import { AllContext } from "../../AllDataContext";

import EditRecipe from "./EditRecipe";

//---------------------redux-----------------//
import { useDispatch, useSelector } from "react-redux";
import { addRecipes } from "../../actions/AddRecipe";
import { fetchProviderRecipes } from "../../actions/GetProviderRecipes";
const ProviderHome = ({ userIdApp0 }) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.providerRecipes
  );

  useEffect(() => {
    if (userIdApp0) {
      dispatch(fetchProviderRecipes(userIdApp0));
    }
  }, [dispatch, userIdApp0]);

  const { AllIngredientsBase, setAllIngredientsUserBase } =
    useContext(AllContext);
  const { TableContext, setTableContext } = useContext(AllContext);

  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const [userAllIngredients, setUserAllIngredients] = useState();

  const [FilterDataMeals, setFilterDataMeals] = useState([]);

  const [MyListAdmin, setMyListAdmin] = useState([]);
  const [MyListNAdmin, setMyListNAdmin] = useState([]);
  const [MyListIdAdmin, setMyListIdAdmin] = useState([]);

  const [foodCards, setFoodCards] = useState([]);
  const [foodCardsName, setFoodCardsName] = useState([]);

  //----------------------pagination----------------------------//

  const [currentPage, setCurrentPage] = useState(1);

  let totalItems;
  let totalPages;
  let slicedArray;

  const itemsPerPage = 10;

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

  const [link1, setLink1] = useState("");

  const [description, setDescription] = useState("");

  const [yourSelectedStateValue, setOption] = useState("Meal");
  const [yourSelectedNationValue, setNation] = useState("jordanian");

  const CreateNew = async () => {
    let link_name001;

    if (link1 != "") {
      link_name001 = "https://www.youtube.com/embed/".concat(
        link1.replace("https://youtu.be/", "")
      );
    } else {
      link_name001 = link1;
    }

    console.log(foodCards);
    const formData0 = new FormData();
    formData0.append("recipeName", name);
    formData0.append("providerId", userIdApp0);
    formData0.append("category", yourSelectedStateValue);
    formData0.append("description", description);
    formData0.append("names", JSON.stringify([name1]));
    formData0.append("links", JSON.stringify([link_name001]));
    formData0.append("Items", JSON.stringify(foodCards));
    formData0.append("ItemsName", JSON.stringify(foodCardsName));
    formData0.append("image", productImage);
    formData0.append("ItemsId", JSON.stringify(MyListIdAdmin));
    formData0.append("nation", yourSelectedNationValue);

    dispatch(addRecipes(formData0)).then(() => {
      dispatch(fetchProviderRecipes(userIdApp0));
    });

    setName("");
    setName1("");
    setLink1("");
    setDescription("");
    setMyListAdmin([]);
    setMyListNAdmin([]);
    setMyListIdAdmin([]);
    updateSidebarIng([]);
    setFoodCards([]);
    setFoodCardsName([]);
  };

  const DeleteRecipe = async (Id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/recipes/${Id}`
      );
      dispatch(fetchProviderRecipes(userIdApp0));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  function removeItem0(name, ingredientId) {
    setMyListAdmin((prevAccounts) => {
      const newItems = prevAccounts.filter(
        (item) => item.ingredientName !== name
      );
      return newItems;
    });

    updateSidebarIng((prevAccounts) => {
      const newItems = prevAccounts.filter(
        (item) => item.ingredientName !== name
      );
      return newItems;
    });

    setFoodCards((prevAccounts) => {
      const newItems = prevAccounts.filter(
        (item) => item.ingredientName !== name
      );
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
    console.log(MyListIdAdmin);
    setFoodCardsName((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item !== name);
      return newItems;
    });
  }

  const { SidebarIngName, updateSidebarIngName } = useContext(RecipeContext);
  const { SidebarIngId, updateSidebarIngId } = useContext(RecipeContext);
  const { RecipeStatus, updateRecipeStatus } = useContext(RecipeContext);
  // const { RecipeElement, updateRecipeElement } = useContext(RecipeContext);

  useEffect(() => {
    if (SidebarIngName !== "") {
      console.log(SidebarIngName);
      UpdateBeneficiaryId(SidebarIngName, SidebarIngId);
    }
  }, [SidebarIngName]);

  useEffect(() => {
    setUserAllIngredients(AllIngredientsBase);
    setFilterDataMeals(AllIngredientsBase);
  }, [AllIngredientsBase, TableContext]);

  const UpdateBeneficiaryId = async (ingredientName, ingredientId) => {
    console.log(ingredientId);
    const newArrayAll = [...userAllIngredients];
    newArrayAll.map((e) => {
      if (ingredientId.toLowerCase() == e._id.toLowerCase()) {
      }
      if (ingredientId.toLowerCase() == e._id.toLowerCase()) {
        if (e.ingredientFlag == false) {
          e.ingredientFlag = true;
          setMyListAdmin((prevArray) => [...prevArray, e]);
          updateSidebarIng((prevArray) => [...prevArray, e]);
          setMyListNAdmin((prevArray) => [...prevArray, e.ingredientName]);
          setMyListIdAdmin((prevArray) => [...prevArray, e._id]);
          setFoodCards((prevArray) => [...prevArray, e]);
          setFoodCardsName((prevArray) => [...prevArray, e.ingredientName]);
          console.log(MyListIdAdmin);
        } else {
          e.ingredientFlag = false;
          removeItem0(ingredientName, ingredientId);
        }
      }
    });

    setUserAllIngredients((prevAccounts) => {
      const newItems = [...prevAccounts];
      const trueItems = newItems.filter((item) => item.ingredientFlag === true);
      const falseItems = newItems.filter(
        (item) => item.ingredientFlag !== true
      );
      return [...falseItems, ...trueItems];
    });

    updateRecipeStatus(false);
  };

  const { SidebarIng, updateSidebarIng } = useContext(RecipeContext);

  const [searchTermUsers, setSearchTermUsers] = useState("");
  const filterDataByNameUsers = (searchTermMeals) => {
    const filteredDataMeals = userAllIngredients?.filter((item) =>
      item.ingredientName.toLowerCase().includes(searchTermMeals.toLowerCase())
    );
    setFilterDataMeals(filteredDataMeals);
    console.log(filteredDataMeals);
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

const [updateStatus,setUpdateStatus] =useState(false)
const [selectedId,setSelectedId] =useState("")
  const handleEditIng = (recipe)=>{
    setSelectedId(recipe._id)
    setUpdateStatus(true)
    console.log(recipe);
    recipe?.ItemsId?.map((id ,index)=>{
  UpdateBeneficiaryId(recipe.ItemsName[index],id)
    })
  }

  const HanleupdateNow = async () => {
  const formData={ 
  ItemsName:foodCardsName,
   ItemsId:MyListIdAdmin
  }
    try {
      const response = await axios.put(
       `http://localhost:5000/api/updateIng/${selectedId}`,
       formData
     );
     setUpdateStatus(false)
    //  dispatch(fetchProviderRecipes(userIdApp))
  } catch (error) {
   
  }
  }

  return (
    <>
      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8 shadow shadow-black p-5 rounded-lg bg-white border-solid border-1 border-[#0e0d0d] transform transition duration-300 ">
          <div className="relative flex">
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
          </div>
        </div>
      </div>

      <SideBarRecipe />
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 place-items-center mb-1">
        {slicedArray?.map((e, i) => {
          return (
            <>
              {e.ingredientFlag === false ? (
                <>
                  <div
                    key={e._id}
                    onClick={() => UpdateBeneficiaryId(e.ingredientName, e._id)}
                    className={` mb-4 flex-shrink-0 m-1 relative overflow-hidden ${
                      e.ingredientType == "vegetables"
                        ? "bg-[#219D80]"
                        : "bg-[#E8AA42]"
                    }  rounded-lg max-w-xs shadow-lg w-48 h-60 hover:scale-105 hover:cursor-pointer`}
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
                        className="relative w-40 h-32 hover:scale-125 "
                        src={`http://localhost:5000/${e.img}`}
                        alt=""
                      />
                    </div>
                    <div className=" text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 -mb-1">
                        {e.ingredientType}
                      </span>
                      <div className="flex justify-between">
                        <span className="block font-semibold ">
                          {e.ingredientName}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
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

{!updateStatus ? 
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
                  label="Chef name"
                />
              </div>

              <div className="mb-4 flex lg:flex-row sm:flex-col">
                <Input
                  value={link1}
                  onChange={(e) => setLink1(e.target.value)}
                  label="Youtube link 1"
                />
              </div>

              <textarea
                className="w-full border border-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div className="flex w-full justify-center">
                <div className="mb-2 w-1/2">
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

                <div className="mb-2 w-1/2">
                  <select
                    value={yourSelectedNationValue}
                    onChange={(e) => setNation(e.target.value)}
                    className="w-full border p-2 rounded"
                  >
                    <option value="jordanian">jordanian</option>
                    <option value="egyptian ">egyptian </option>
                  </select>
                </div>
              </div>

              <div className="flex w-full justify-between border p-1 my-2">
                <p className="font-medium w-1/2">Recipe Image</p>

                <input
                  className="file-upload-input  w-1/2"
                  type="file"
                  name="image"
                  onChange={handleProductImageChange}
                  accept="image/*"
                  required
                />
              </div>

              <Button
                className="w-full border mb-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                variant="text"
                onClick={() => CreateNew()}
              >
                Create
              </Button>
            </form>
          </div>
        </Card>
      </div>
: 
<Button
className=" w-full mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
variant="text"
onClick={HanleupdateNow}
>
Update
</Button>

}
      <div class="flex flex-wrap justify-center items-center">
        {data?.map((e, i) => {
          return (
            <>
              <div
                key={e.recipeName}
                className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-80"
              >
                <div>
                  <img
                    className="w-full h-72 "
                    src={`http://localhost:5000/${e.img}`}
                    alt="Recipe Title"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl text-right text-[#E8CC95]">
                    {e.recipeName}
                  </h2>
               
                  <p className="mb-2 h-28 text-gray-800">{e.description}</p>

                  <div className="flex justify-between w-full">
                    <EditRecipe
                      userIdApp={userIdApp0}
                      recipeId0={e._id}
                      recipeName0={e.recipeName}
                      category0={e.category}
                      description0={e.description}
                      names0={e.names}
                      links0={e.links}
                      Items0={e.Items}
                      ItemsName0={e.ItemsName}
                      image0={e.img}
                      ItemsId0={e.ItemsId}
                      nation0={e.nation}
                    />

                    <Button
                      className=" w-32 mx-5  mb-10 border-solid border-[#eb2b2b] border-2 text-[#060606] hover:bg-[#e84242] hover:text-[#ffffff]"
                      variant="text"
                      onClick={() => DeleteRecipe(e._id)}
                    >
                      delete{" "}
                    </Button>
                  </div>
                </div>
                <div
                onClick={()=>handleEditIng(e)}
                className="absolute hover:scale-105 cursor-pointer top-0 right-0 mt-2 mr-2 bg-[#E8CC95] text-gray-800 rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                  <span>Edit ingredients</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProviderHome;
