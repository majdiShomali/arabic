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
function AddYourIng() {
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

  const [Name, setName] = useState("");
  const [Type, setType] = useState("vegetables");
  const [Cards, setCards] = useState([]);
  const [OpenPayment, setOpenPayment] = useState(false);

  useEffect(() => {
   
  }, []);


  const navigate = useNavigate();

  const handleCreate = async () => {

    // navigate(`/Payment/${currentPrice}`);



    const cardData = {
      ingredientName: Name,
      img: img,
      ingredientType: Type,
    };
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/api/Ingredient",
    //     cardData
    //   );
    //   fetchIng();
    // } catch (error) {
    //   console.error("Error inserting data:", error);
    // }



  };

  return (
    <>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />

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
              value={Type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
            </select>
          </div>
          <Button className="mt-6" fullWidth onClick={handleCreate}>
            Create
          </Button>
        </form>
      </Card>

{OpenPayment ? 

<PaymentPage
      
Name ={Name}
Image={img}
Type={Type}

/>
:
null

}

    </>
  );
}

export default AddYourIng;
