import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
const [blogs ,setBlogs]=useState([])
  const allBlogs = async () => {

    try {

      const response = await axios.get(
        `http://localhost:5000/api/blogs`
      );
      setBlogs(response.data)
 
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
    
    }
  };
  useEffect(() => {
    allBlogs();
  }, []);

  const navigate = useNavigate();

  function ShowVideosMeals(blog) {
    navigate(`/ShowRecipe/${blog.recipeId}`); 
  }



  return (
    <>

{blogs.length > 0 ? <>

  <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  المدونات
               </h2>
               <p class="text-base text-body-color">
                 اطلع على اراء الاشحاص حول الوصفات
               </p>
            </div>

  <section className="flex flex-row flex-wrap justify-center">

    {blogs?.map((blog)=>{
    return(

<>

<div 

className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-96 mx-12 ">
      <div className="flex flex-col  min-h-full pb-4 mb-6  bg-white rounded-lg shadow-md hover:shadow-2xl">
        <div className="md:flex-shrink-0">
          <img
            src={`http://localhost:5000/${blog?.recipeImage}`}
            alt="Blog Cover"
            className="object-fill w-96 rounded-lg rounded-b-none md:h-56"
          />
        </div>
        <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
       
          <div className="flex flex-row items-center">
            {/* <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>1.5k</span>
            </div> */}
            <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>{blog?.comments?.length}</span>
            </div>
            {/* <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>7</span>
            </div> */}
          </div>
          <span className="text-xs font-medium text-blue-600 uppercase cursor-pointer"
          onClick={() => ShowVideosMeals(blog)}
          >
            اضهر الوصفة
          </span>
        </div>
        <hr className="border-gray-300" />
        <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
          <a href="#" className="hover:underline">
            <h2 className="text-xl font-bold h-10 tracking-normal text-gray-800">
              {blog?.recipeName}
            </h2>
          </a>
        </div>
        <hr className="border-gray-300" />
        <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
        {blog?.userComment}
        </p>
        <hr className="border-gray-300" />
        <section className="px-4 py-2 mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 h-16">
              <img
                className="object-cover h-10 rounded-full"
                src={`http://localhost:5000/${blog?.userImage}`}
                 alt="Avatar"
              />
              <div className="flex flex-col mx-2">
                <a
                  href=""
                  className="font-semibold text-gray-700 hover:underline"
                >
                  {blog?.userName}
                </a>
                <span className="mx-1 text-xs text-gray-600">{blog?.commentTime}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
</>

    )

    })}
    
  </section>



</>  : null}
    



    
    </>
  )
}

export default BlogSection