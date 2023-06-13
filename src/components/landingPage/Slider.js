import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import backImgx from "./landing-img/hero44.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Carousel className="rounded-xl">
        <div className="relative h-4/5 w-full">
          <img
            src={backImgx}
            alt="image 1"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 grid   w-full items-center bg-black/25 ">
            
            <div className="w-3/4 pl-12  mb-40 ml-10">
              <Typography
                variant="h1"               
                className="mb-5 text-3xl md:text-4xl lg:text-5xl text-[#F7E1AE]"
              >
                Discover your taste
              </Typography>
              <Typography
                variant="lead"           
                className="mb-11 opacity-90 text-gray-1000 "
              >
                Explore All Arabic recipes by your kitchen ingredients
              </Typography>
              
           { localStorage.auth != null ?  
             <Link  to="/Kitchen">
                  <Button  className="bg-[#F7E1AE] text-gray-800 w-52 text-base "   >
                  Add ingredients to your list
                </Button>
                </Link> : 
                <Link  to="/LogIn">
                <Button  className="bg-[#F7E1AE] text-gray-800 w-52"   >
                  Add ingredients to your list
                </Button>
                </Link>
              }
            </div>
          </div>
        </div>


      </Carousel>
    </>
  );
};

export default Slider;
