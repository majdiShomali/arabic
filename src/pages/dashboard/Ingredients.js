import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   import { useState,useEffect } from 'react';
   import axios from "axios"
   import Pagination from "@mui/material/Pagination";

const Ingredients = () => {
    const [img, setImg] = useState("");
    const [updateStatus , setUpdateStatus] = useState(false)
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
    const [FilterDataMeals, setFilterDataMeals] = useState([]);

    const handleProductImageChange = (event) => {
      setProductImage(event.target.files[0]);
    };
    const [Name, setName] = useState("");
    const [Type, setType] = useState("vegetables");
    const [Cards, setCards] = useState([]);
    const [CardId, setCardId] = useState("");

    useEffect(()=>{
        fetchIng()
    },[])


    const fetchIng = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/Ingredients");
          setCards(response.data);
          setFilterDataMeals(response.data)
          console.log(response.data)
        } catch (error) {
          console.error("Error retrieving data:", error);
        }
      };

    const handleCreate = async ()=>{

      const formData = new FormData()
      formData.append('ingredientName',Name)
      formData.append('ingredientType',Type)
      formData.append('image',productImage)
   


    const cardData = {
        ingredientName:Name,
        img:img,
        ingredientType:Type

    }
    try {
        // Send the data to the server using an HTTP POST request
        const response = await axios.post(
          "http://localhost:5000/api/Ingredient",
          formData
        );
        fetchIng()
      } catch (error) {
        console.error("Error inserting data:", error);
      }

    }


    const [currentPageMeals, setCurrentPageMeals] = useState(1);
  
    let totalItemsMeals;
   
    let totalPagesMeals;
   
    let slicedArrayMeals;
  
    const itemsPerPage = 6;
  
    totalItemsMeals = FilterDataMeals?.length;
  
    totalPagesMeals = Math.ceil(totalItemsMeals / itemsPerPage);
  
    const startIndexMeals = (currentPageMeals - 1) * itemsPerPage;
  
    const endIndexMeals = startIndexMeals + itemsPerPage;
   
    slicedArrayMeals = FilterDataMeals?.slice(startIndexMeals, endIndexMeals);
    console.log(FilterDataMeals);
    const handlePageChangeMeals = (event, pageNumber) => {
      setCurrentPageMeals(pageNumber);
    };




    const [yourSelectedStateValueType, setOptionType] = useState("");
    const [yourSelectedStateValueAddress, setOptionAddress] = useState("");
    //-----------------------search------------------------//
    const [searchTermUsers, setSearchTermUsers] = useState("");
  
  
    const handleFilterChange = (typeValue, addressValue) => {
  
  
      const filteredDataUsers = Cards?.filter(
        (item) =>
          item.ingredientType?.toLowerCase().includes(typeValue.toLowerCase()) &&
          item.ingredientType?.toLowerCase().includes(addressValue.toLowerCase())
      );
      setFilterDataMeals(filteredDataUsers);
      setCurrentPageMeals(1);
  };
  
  
  const filterDataByNameUsers = (searchTermMeals) => {
    const filteredDataMeals = Cards.filter((item) =>
      item.ingredientName.toLowerCase().includes(searchTermMeals.toLowerCase())
    );
    setFilterDataMeals(filteredDataMeals);
    setCurrentPageMeals(1);
  };

 function handleUpdate(ingId,Ingredient){
  console.log(ingId,Ingredient)
  setUpdateStatus(true)
  setCardId(ingId)
 setName(Ingredient.ingredientName)
 setType(Ingredient.ingredientType)
  
    // "sold": false,
    // "_id": "64991964be58b493e15c9fa0",
    // "ingredientName": "garlic",
    // "img": "public\\images\\image_1687755108330.png",
    // "ingredientFlag": false,
    // "ingredientType": "vegetables",
    // "__v": 0




 }
 const handleUpdateNow = async()=>{
  setUpdateStatus(false)


 

  try {
    const formData = new FormData()
    formData.append('ingredientName',Name)
    formData.append('ingredientType',Type)
    formData.append('image',productImage)
  console.log(CardId)
    await axios.put(`http://localhost:5000/api/IngredientAdmin/${CardId}`, formData);
    fetchIng()
  } catch (error) {
    console.error("Error updating user:", error);
  }


 }

  return (
    
<>
       <div className='w-full flex justify-center mt-3'>
          <Card color="transparent" shadow={false}>
    
            <Typography color="gray" className="mt-1 font-normal">
              Enter your Ingredient .
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
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

    { updateStatus === false ?
        <Button className="mt-6" fullWidth
        onClick={handleCreate}
        >
          Create
        </Button>
    
    :   
    <Button className="mt-6" fullWidth
    onClick={handleUpdateNow}
    >
      Update
    </Button>
    
    
    }
          
        
            </form>
          </Card>


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
                 <option value="">All Type</option>
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






<div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center mb-1'>

{slicedArrayMeals.map((e)=>{
return(
<>


<div
key={e.ingredientName}
onClick={() => handleUpdate(e._id , e)}
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
  {/* <span className="block opacity-75 -mb-1">{e.type}</span> */}
  <div className="flex justify-between">
    <span className="block font-semibold ">{e.ingredientName}</span>

    {/* <Icon
      style={{
        backgroundColor:
          e.icon === mdiPlus ? "green" : "red",
      }}
      color="white"
      className="iconAddOrRemove absolute top-1 right-1 rounded-lg"
      path={e.icon}
      size={1}
    /> */}
  </div>
</div>
</div>



</>

)


})}


</div>
<div className="PaginationCards">
          {
            <Pagination
              count={totalPagesMeals}
              page={currentPageMeals}
              onChange={handlePageChangeMeals}
            />
          }
        </div>
</>





      
  )
}

export default Ingredients