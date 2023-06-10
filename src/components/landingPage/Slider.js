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
            className="h-4/5 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/25 ">
            <div className="w-3/4 pl-12 pb-60 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#F7E1AE]"
              >
                Discover your taste
              </Typography>
              <Typography
                variant="lead"
                
                className="mb-12 opacity-90 text-gray-1000 "
              >
                Explore All Arabic recipes by your kitchen ingredients
              </Typography>
              
              <Link to="/Kitchen">
                  <Button  className="bg-[#F7E1AE] text-gray-800 w-52 text-base"   >
                  Add ingredients to your list
                </Button>
                </Link>
              
            </div>
          </div>
        </div>
        <div className="relative h-4/5 w-full">
          <img
            src={backImgx}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-1/4 text-center ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
                Beauty & Care
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can't refuse.
              </Typography>
              <div className="flex justify-center ">
              <Link to="/Store">
                 <Button size="lg" color="white">
                  BUY NOW
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-4/5 w-full">
          <img
            src={backImgx}
            alt="image 3"
            className="h-4/5 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Beauty & Care
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can't refuse.
              </Typography>
              <div className="flex gap-2">

              <Link to="/Store">
                <Button size="lg" color="white">
                  BUY NOW
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
