import React from "react";
import { Button } from "@material-tailwind/react";
import { fetchRecipes } from "../../actions/GetRecipes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
AOS.init();
const NewRecipeCard = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);
  const { loading, data, error } = useSelector((state) => state.fetchRecipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      const sortedRecipes = data.slice().sort((a, b) => b.rating - a.rating);
      setRecipes(sortedRecipes.slice(0, 3));
      console.log(sortedRecipes);
    }
  }, [data]);

  const navigate = useNavigate();
  function ShowVideosMeals(cardId) {
    navigate(`/ShowRecipe/${cardId}`);
  }
  return (
    <div
      className="min-h-[40rem] py-3 bg-gray-100 flex flex-col justify-center items-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h2 className=" text-4xl mb-8 tracking-tight font-extrabold text-black  text-center capitalize">
        افضل الوصفات
      </h2>

      <div className=" w-full flex  flex-wrap justify-center items-center">
        {recipes?.map((recipe) => {
          const imgUrl = `http://localhost:5000/${recipe.img}`;
          return (
            <div key={recipe._id} className="relative w-64 h-80 mx-7">
              <div className="bg-white w-64 h-80 shadow-lg absolute right-0 top-0 rotate-6"></div>

              <div className="bg-white w-64 h-80 shadow-lg absolute right-0 top-0 p-5">
                <div className="group h-full w-full">
                  <img
                    src={imgUrl}
                    alt={recipe.title} // Provide a meaningful alt text
                    className="w-full h-full object-cover "
                  />
                  
                  <div className="flex flex-col justify-around items-center group h-full w-full absolute right-0 top-0">
                    <div className="w-full bg-[#b39f3b81] trans text-center py-2 hidden group-hover:block translate-y-4 duration-300 ease-in-out fade-in-button">
                      <div className="flex items-center w-full justify-end px-5">
                        <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                          {recipe.UsersIdRate.length} مشاهدة
                        </a>

                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                          {recipe.rating}
                        </p>
                        <svg
                          className="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <h3 className=" text-2xl font-extrabold  ">
                        {recipe.recipeName}
                      </h3>
                    </div>
                    <Button
                      className="hidden text-md group-hover:block translate-y-4 duration-300 ease-in-out mb-10 border-solid border-[#E8AA42] border-2 bg-[#E8AA42] hover:bg-[#E8AA42] text-[#ffffff] fade-in-button"
                      variant="text"
                      onClick={() => ShowVideosMeals(recipe._id)}
                    >
                 عرض الوصفة    
                </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewRecipeCard;
