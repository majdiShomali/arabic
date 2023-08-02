import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router";



const AddBlog = ({userData,Recipe}) => {

    console.log(userData,Recipe)


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
      
      
        const navigate = useNavigate();
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        /////////////////////
        const [userId, setUserId] = useState();
        const [description, setDescription] = useState("");
        const [email, setEmail] = useState("");
      
      
    
      
        const handleSubmit = async (e) => {
          e.preventDefault();


          const currentDate = new Date();
          const formattedDateTime = currentDate.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });


          const blogData = {
            recipeImage:Recipe.img
            ,recipeName:Recipe.recipeName
            ,recipeId:Recipe._id
            ,userId:userData._id
            ,userName:userData.firstName
            ,userImage:userData.img
            ,userComment:description
            ,commentTime:formattedDateTime
          };

          console.log(blogData);
  
          axios
            .post(`http://localhost:5000/api/blog`,
            blogData
            )
            .then(function (response) {
              console.log(response);
      
              handleClose()
    
            })
            .catch(function (error) {
              console.log(error);
            });
        };





  return (
    <div className="w-full">
      <Button
        className=" w-20 px-2.5 py-1.5 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
        variant="text"
        onClick={handleOpen}
      >
        Add Blog
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <p>blog description</p>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              id="name"
              value={description}
               className="border border-solid border-black border-2"
            >
              Text in a modal
            </textarea>{" "}
            <br></br>
            
   
            <br></br>
            {/* <Input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "} */}
            <br></br>
            <Button
              onClick={handleSubmit}
              className=" m-5 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
              variant="text"
            >
              Add Blog
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
  )
}

export default AddBlog