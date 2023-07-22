import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-tailwind/react";


const Slider = () => {

  const [selectedType, setSelectedype] = useState("");
  const navigate = useNavigate();

  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/SignUp/${SignUpType}`);
  }
  function handleKitchen() {
  
    navigate(`/Kitchen`);
  }

  return (
    <>

<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-2/4 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://media.istockphoto.com/id/1365253758/photo/funny-chef-reading-recipe-in-book.webp?b=1&s=170667a&w=0&k=20&c=sIFDQp8XsEKCaVU0dkCsutUuQm9fcS8NI8XkbQbSKXw="
           
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Arabic Recipes
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Arabian Delights: 
              <br className="hidden md:block" />
              Discover Authentic Flavors 
              <span className="inline-block text-deep-purple-accent-400">
              from the Middle East
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Explore our extensive recipe library, complete with step-by-step instructions,
             helpful tips, and captivating stories behind each recipe. Embark on a sensory 
             journey and savor the diverse tastes of the Middle East with Arabian Delights.
            </p>
            {
              localStorage.auth == null ? 
            <p>Register Now</p>
             :null}
            <div className="flex items-center">
              
              {
              localStorage.auth == null ? (
                <>
                  <Button
                    className="mr-5 border mb-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                    variant="text"
                    onClick={() => handleTypeSelection("user")}
                  >
                    Explore Recipes
                  </Button>
                  <Button
                    className="border mb-10 border-solid border-[#219D80] border-2 text-[#219D80] hover:bg-[#219D80] hover:text-[#ffffff]"
                    variant="text"
                    onClick={() => handleTypeSelection("beneficiary")}
                  >
                    Add recipes
                  </Button>
                </>
              ) : 
              
              
              <Button
              className="border mb-10 border-solid border-[#219D80] border-2 text-[#219D80] hover:bg-[#219D80] hover:text-[#ffffff]"
              variant="text"
              onClick={() => handleKitchen()}
            >
              Kitchen
            </Button>
              
              
              
              }
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Slider;
