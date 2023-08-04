import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Card, Input, Button } from "@material-tailwind/react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: " solid #f2f2f2",
  boxShadow: 3,
  p: 4,
};
const EditRecipe = ({
  recipeId0,
  recipeName0,
  category0,
  description0,
  names0,
  links0,
  Items0,
  ItemsName0,
  image0,
  ItemsId0,
  nation0,
}) => {

  const [name, setName] = useState("");
  const [oldImg, setOldImg] = useState("");
  const [name1, setName1] = useState("");
  const [link1, setLink1] = useState("");
  const [itemsId, setIemsId] = useState([]);
  const [itemsNames, setItemsNames] = useState([]);
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [yourSelectedStateValue, setOption] = useState("Meal");
  const [yourSelectedNationValue, setNation] = useState("jordanian");

 useEffect(() => {
    setName(recipeName0)
    setName1(names0[0])
    if(links0){
        setLink1(
            "https://youtu.be/".concat(
        links0[0].replace("https://www.youtube.com/embed/", "")
          ))
          
    }
    console.log(links0[0])

    setDescription(description0)
    setItems(Items0)
    setIemsId(ItemsId0)
    setItemsNames(ItemsName0)
    setOption(category0)
    setNation(nation0)
    setOldImg(image0)
    
 },[nation0,names0])


  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 console.log(link1)


   const link_name001 = "https://www.youtube.com/embed/".concat(
      link1.replace("https://youtu.be/", "")
    );
  

    const formData = new FormData();
    formData.append("recipeName", name);
    formData.append("category", yourSelectedStateValue);
    formData.append("names", JSON.stringify([name1]));
    formData.append("links", JSON.stringify([link_name001]));
    formData.append("Items", JSON.stringify(items));
    formData.append("ItemsName", JSON.stringify(itemsNames));
    formData.append("image", productImage);
    formData.append("ItemsId", JSON.stringify(itemsId));
    formData.append("description", description);




   try {
       const response = await axios.put(
        `http://localhost:5000/api/recipesP/${recipeId0}`,
        formData
      );
   } catch (error) {
    
   }


  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full">
      <Button
        className=" w-full mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
        variant="text"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                </form>
              </div>
            </Card>

            <br></br>
 
          <br></br>
          <Button
            onClick={handleSubmit}
            className=" m-5 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
            variant="text"
          >
            Edit
          </Button>
          <Button
            className="m-5 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
            variant="text"
            onClick={handleClose}
          >
            Cancel
          </Button>


          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EditRecipe;
