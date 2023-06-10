import React from 'react'
import Landing from '../components/landingPage/Landing'
import { Button } from "@material-tailwind/react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import mcd from '../Images/fruits/Lime.png'
import kfc from '../Images/fruits/Lime.png'
import dom from '../Images/fruits/Lime.png'
import burger from '../Images/fruits/Lime.png'


const Home = () => {

  const [selectedKitchenType, setSelectedKitchenType] = useState('');
  const navigate = useNavigate();



  function handleKitchenTypeSelection(KitchenType) {
    setSelectedKitchenType(KitchenType);
    navigate(`/Kitchen/${KitchenType}`);
  }





  return (
    <>
    <Landing/>
    




    <div className="bg-white mt-3 shadow-lg">
        <section id="food">
          <br />
          <h2 className=" text-4xl mb-8 tracking-tight font-extrabold text-black  text-center capitalize">
            Which food do you prefer?
          </h2>
          <div className="flex flex-wrap mb-10 mx-20">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative rounded-lg overflow-hidden">
                {/* Jordanian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60="
                  alt="vegetables" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                    Jordanian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleKitchenTypeSelection("Jordanian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Arabian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://i.ndtvimg.com/i/2016-05/arabic-food_625x350_71463118204.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Arabian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      // onClick={() => handleFoodTypeSelection("arabian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Mexican Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Mexican Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      // onClick={() => handleFoodTypeSelection("mexican")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Italian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://static1.squarespace.com/static/5e484ab628c78d6f7e602d73/5e484d29dd42c458f31f0b22/5f52972ad03efd52606d4ad9/1680649812918/What-to-eat-in-Italy.png?format=1500w"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Italian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      // onClick={() => handleFoodTypeSelection("italian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Indian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Indian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      // onClick={() => handleFoodTypeSelection("indian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* American Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://www.americancafe.com/wp-content/uploads/2021/09/americancafe-What-Started-American-Cuisine-%E2%80%93-Discover-How-It-All-Started.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      American Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      // onClick={() => handleFoodTypeSelection("american")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center">

          <HashLink smooth={true} to="ServicePageAll#">
            <Button className="border mb-10 border-solid border-amber-600 border-2 text-amber-600 hover:bg-amber-600 hover:text-[#ffffff]" variant="text">
              Show All Restaurants
            </Button>
          </HashLink>

        </div>
      </div>















    <div className="p-20">
  <div className="text-center mb-16">
    <h3 className="text-3xl sm:text-4xl uppercase leading-normal font-extrabold tracking-tight text-gray-900">
      Our partners
    </h3>
  </div>
  <div className="sm:grid grid-cols-2 md:grid-cols-4 col-gap-10 mx-auto">
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={kfc}
        />

      <p className="text-gray-500 uppercase text-sm">KFC</p>
 
    </div>
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={mcd}
        />

      <p className="text-gray-500 uppercase text-sm">McDonald's</p>

    </div>
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={dom}
        />

      <p className="text-gray-500 uppercase text-sm">Domino's</p>
    </div>
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={burger}
        />
      <p className="text-gray-500 uppercase text-sm">Burger King</p>
  
    </div>
    

  </div>
</div>




    </>
  )
}

export default Home