import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import SidebarMyList from "../components/user/SidebarMyList";
import { useContext } from "react";
import { KitContext } from "../KitchenContext";
import {AllContext} from "../AllDataContext"


import axios from "axios";

const Kitchen = ({userIdApp0}) => {
  const { AllIngredientsUser0, setAllIngredientsUser0} = useContext(AllContext);
  const { LastUpdatedDataUser, setLastUpdatedDataUser} = useContext(AllContext);
  const { AllDataGet,setAllDataGet} = useContext(AllContext);
  const { UpdateAll,setUpdateAll} = useContext(AllContext);
  console.log(LastUpdatedDataUser)

  const [userAllIngredients, setUserAllIngredients] = useState();

  const [isLoading, setIsLoading] = useState(true);

  
  const handleShowUser = async () => {

console.log(LastUpdatedDataUser)
    // let NewAllIngredientsUser0 = AllIngredientsUser0?.map((e) => {
    //   if (AllDataGet[0]?.MyListId.includes(e._id)) {
    //     e.ingredientFlag  = true;
    //   }   
    //   return e;
    // });
    setUserAllIngredients(LastUpdatedDataUser)
    setFilterDataVegetables0(LastUpdatedDataUser)
    updateMyListSideBarCon(LastUpdatedDataUser)
    setUserAllIngredients(LastUpdatedDataUser)
    setIsLoading(false);
    // try {
    //   const response = await axios.get(`http://localhost:5000/api/users/${userIdApp0}`);
    //   console.log(response.data[0].AllIngredientsId)
    //   setUserAllIngredients(response.data[0].AllIngredientsId)
    //   setFilterDataVegetables0(response.data[0].AllIngredientsId)
    //   updateMyListSideBarCon(response.data[0].AllIngredientsId)
    //   // setUserAllIngredients0(() => {
    //   //   const newItems = response.data[0].AllIngredientsId.filter((item) => item.ingredientFlag !== true);
    //   //   return newItems;
    //   // });
    // } catch (error) {
    //   console.error("Error retrieving data:", error);
    // }finally {
    //   setIsLoading(false);
    // }
  };


  const { MyListSideBarCon, updateMyListSideBarCon} = useContext(KitContext);
  const { MyListSideBarConNames, updateMyListSideBarConNames} = useContext(KitContext);

  useEffect(() => {
    handleShowUser()
  }, [LastUpdatedDataUser]);

  

  //--------------------------------


  const [SearchType, setSearchType] = useState("");

  function removeItem0(name) {
    updateMyListSideBarConNames((prevAccounts) => {
      const newItems = prevAccounts.filter((item) => item !== name);
      return newItems;
    });
  }



  const { SidebarIngName0, updateSidebarIngName0 } = useContext(KitContext);
  const { EffectStatus, updateEffectStatus } = useContext(KitContext);

    // const { RecipeElement, updateRecipeElement } = useContext(RecipeContext);
    // useEffect(() => {
    //   updateSidebarIngName0("")
    // },[])
    
  useEffect(() => {
if(SidebarIngName0 !== ""){
  UpdateBeneficiaryId(SidebarIngName0)
}
  },[EffectStatus])
  
  

  


  const UpdateBeneficiaryId = async (ingredientName) => {
    const newArrayAll = [...userAllIngredients];
    newArrayAll.map((e) => {
      
      if (ingredientName.toLowerCase() == e.ingredientName.toLowerCase()) {

        console.log(ingredientName,e.ingredientFlag)
      }
      if (ingredientName.toLowerCase() == e.ingredientName.toLowerCase()) {
        if (e.ingredientFlag == false) {
              e.ingredientFlag = true;           
           
              // updateMyListSideBarCon((prevArray) => [...prevArray, e])
              updateMyListSideBarConNames((prevArray) => [...prevArray, e.ingredientName])
            
                
        } else {
             e.ingredientFlag = false;
              removeItem0(ingredientName);      
        }
      }
    
    });
    setFilterDataVegetables0((prevAccounts) => {
    const newItems = [...prevAccounts];
    const trueItems = newItems.filter((item) => item.ingredientFlag === true);
    const falseItems = newItems.filter((item) => item.ingredientFlag !== true);
    return [...falseItems, ...trueItems];
  });

  updateMyListSideBarCon(newArrayAll)
  updateSidebarIngName0("")
  // setFilterDataVegetables0(newArrayAll)
  };

    const [SearchTerm0, setSearchTerm0] = useState("");
    const [SearchType00, setSearchType00] = useState("");

  //-----------------------search------------------------//
  const [FilterDataVegetables0, setFilterDataVegetables0] = useState([]);


  const filterDataByNameVegetables0 = (searchTermVegetables0) => {
    const filteredDataVegetables = userAllIngredients.filter((item) =>
      item.ingredientName.toLowerCase().includes(searchTermVegetables0.toLowerCase())
    );
    setFilterDataVegetables0(filteredDataVegetables);
    setCurrentPageVegetables(1);
  };


  //----------------------------------------------------//


  const setSearchType0 = (typeValue) => {
    const filteredDataUsers = userAllIngredients?.filter(
      (item) =>
        item.ingredientType?.toLowerCase().includes(typeValue.toLowerCase()) 
    );
    setFilterDataVegetables0(filteredDataUsers);


};


//-----------------------search------------------------//

  const [currentPageVegetables, setCurrentPageVegetables] = useState(1);

  let totalItemsVegetables;

  let totalPagesVegetables;

  let slicedArrayVegetables;

  const itemsPerPage = 6;

  totalItemsVegetables = FilterDataVegetables0?.length;

  totalPagesVegetables = Math.ceil(totalItemsVegetables / itemsPerPage);

  const startIndexVegetables = (currentPageVegetables - 1) * itemsPerPage;

  const endIndexVegetables = startIndexVegetables + itemsPerPage;

  slicedArrayVegetables = FilterDataVegetables0?.slice(
    startIndexVegetables,
    endIndexVegetables
  );

  const handlePageChangeVegetables = (event, pageNumber) => {
    setCurrentPageVegetables(pageNumber);
  };
  

  return (
    <>

{LastUpdatedDataUser && AllDataGet  ? 
  <SidebarMyList userIdApp0={userIdApp0} />
: null}


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


      {!LastUpdatedDataUser && !AllDataGet ?  
    
    <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
    : null
  }



<div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1">
              {slicedArrayVegetables?.map((e, i) => {
                return (
                 <>
                  {e.ingredientFlag === false ?<>
                  <div
                    key={e._id}
                    onClick={() => UpdateBeneficiaryId(e.ingredientName)}
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
                        src={`http://localhost:5000/${e.img}`}
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
                  </> : null }
                  </>
                );
              })}
            </div>



           <div className="flex justify-center mb-5">
            {
              <Pagination
                count={totalPagesVegetables}
                page={currentPageVegetables}
                onChange={handlePageChangeVegetables}
              />
            }
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
