import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PaymentPage from "./Payment";
import Pagination from "@mui/material/Pagination";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { UserDataContext } from "../../UserDataContext";
import { useContext } from "react";
import {AllContext} from "../../AllDataContext"
import DyRecipeCardMeal from "../user/DyRecipeCardMeal";
function AddYourIng() {
  const [img, setImg] = useState("");
  const [img0, setImg0] = useState("");
  const [cardId, setCardId] = useState(null);
  const [Ing, setIng] = useState(null);
  const { AllDataGet,setAllDataGet} = useContext(AllContext);
  // const { UserAllData, updateUserAllData } = useContext(UserDataContext);

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


  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };


  const [Name, setName] = useState("");
  const [Type, setType] = useState("vegetables");
  const [Cards, setCards] = useState([]);
  const [OpenPayment, setOpenPayment] = useState(false);

  useEffect(() => {
   
  }, []);


  const navigate = useNavigate();

  const handleCreate = async () => {

const formData = new FormData()
formData.append('CompanyName',AllDataGet[0].firstName)
formData.append('CompanyEmail',AllDataGet[0].email)
formData.append('userId',AllDataGet[0]._id)
formData.append('ingredientName',Name)
formData.append('image',productImage)
formData.append('ingredientType',Type)
formData.append('IngId',Ing.IngredientId)

    const sponserData = {
      CompanyName:AllDataGet[0].firstName ,
      CompanyEmail:AllDataGet[0].email,
      userId:AllDataGet[0]._id,
      ingredientName: Name,
      img: productImage,
      ingredientType: Type,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/sponsor",
        formData
      );
      setOpenPayment(true)
        console.log(response.data)
        setCardId(response.data._id)
        setImg0(response.data.img)
    } catch (error) {
      console.error("Error inserting data:", error);
    }



  };


//---------------------------------fetch ing------------------------

const {AllIngredientsBase,setAllIngredientsUserBase} =useContext(AllContext);
console.log(AllIngredientsBase)

const { LastUpdatedDataUser, setLastUpdatedDataUser} = useContext(AllContext);

  const [userAllIngredients, setUserAllIngredients] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [FilterDataVegetables0, setFilterDataVegetables0] = useState();
  const [SearchTerm0, setSearchTerm0] = useState("");
  const [SearchType00, setSearchType00] = useState("");
  
  const handleShowUser = async () => {



    setFilterDataVegetables0(AllIngredientsBase)


  };


  useEffect(() => {
    handleShowUser()
  }, []);







//-----------------------search------------------------//



const filterDataByNameVegetables0 = (searchTermVegetables0) => {
  console.log(searchTermVegetables0)
  console.log(AllIngredientsBase)

  const filteredDataVegetables = AllIngredientsBase.filter((item) =>
    item.ingredientName.toLowerCase().includes(searchTermVegetables0.toLowerCase())
  );
  setFilterDataVegetables0(filteredDataVegetables);
  setCurrentPageVegetables(1);
};



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

//-------------------------------------------------------------//

const setSearchType0 = (typeValue) => {
  const filteredDataUsers = AllIngredientsBase?.filter(
    (item) =>
      item.ingredientType?.toLowerCase().includes(typeValue.toLowerCase()) 
  );
  setFilterDataVegetables0(filteredDataUsers);


};



const handelIngredient = (IngredientId,IngredientName,IngredientType)=>{
setIng({
  IngredientId:IngredientId,
  IngredientName:IngredientName,
  IngredientType:IngredientType

})
}

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
   {/* ----------------------------------------*/}

   <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1">
              {slicedArrayVegetables?.map((e, i) => {
                return (
                 <>
                  
                  <div
                    key={e._id}
                    onClick={() => handelIngredient(e._id,e.ingredientName,e.ingredientType)}
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
   {/* ----------------------------------------*/}









    <div className="w-full flex justify-center">

      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Your Ingredient
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your Ingredient .
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
                  <Input
              size="lg"
              label="Name"
              value={Ing?.IngredientName}
              
            />
                  <Input
              size="lg"
              label="Name"
              value={Ing?.IngredientType}
              
            />

            {/* <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              placeholder="Table Image"
              name="guest_num"
              onChange={(e) => {
                onChange(e);
              }}
              accept="image/*"
            /> */}

           <input
            className="file-upload-input mx-auto"
            type="file"
            name="image"
            onChange={handleProductImageChange}
            accept="image/*"
            required
          />


          </div>
          <div>
            <select
              value={Type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
            </select>
          </div>
          <Button  className="mt-6" fullWidth onClick={handleCreate}>
            Create
          </Button>
        </form>
      </Card>
      </div>
      { cardId !== null ?
                <>
                <div className="grid grid-cols-4">
      
<div
key={cardId}
// onClick={() => changeStatusF(e.name, i)}
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
    src={`http://localhost:5000/${img0}`}
    alt=""
  />
</div>
<div className=" text-white px-6 pb-6 mt-6">
  <span className="block opacity-75 -mb-1">{Type}</span>
  <div className="flex justify-between">
    <span className="block font-semibold ">{Name}</span>

  </div>
</div>
</div>
                  </div>
                </>
                : <></>
              }

{OpenPayment ? 

<PaymentPage
      
Name ={Name}
Image={img}
Type={Type}
cardId={cardId}
/>
:
null

}





    </>
  );
}

export default AddYourIng;
