import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PaymentPage from "./Payment";
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

    // navigate(`/Payment/${currentPrice}`);

    
      // _id: 
      // "firstName": 
      // "email": 
      // "password": 
      // "role": 
      // "MyList": 
   
      // "MyListn": 

      // "AllIngredientsId": 
  
      // "MyListId": 
// formData.append("productImage", productImage);
const formData = new FormData()
formData.append('CompanyName',AllDataGet[0].firstName)
formData.append('CompanyEmail',AllDataGet[0].email)
formData.append('userId',AllDataGet[0]._id)
formData.append('ingredientName',Name)
formData.append('image',productImage)
formData.append('ingredientType',Type)
    const sponserData = {
      CompanyName:AllDataGet[0].firstName ,
      CompanyEmail:AllDataGet[0].email,
      userId:AllDataGet[0]._id,
      ingredientName: Name,
      img: productImage,
      ingredientType: Type,
    };
console.log(productImage)
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

  return (
    <>
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
