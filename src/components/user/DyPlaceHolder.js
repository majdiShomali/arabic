import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import Icon from "@mdi/react";


import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Button,
} from "@material-tailwind/react";

import React from 'react'


const DyPlaceHolder = () => {
  return (
    <div className="bg-white rounded-md overflow-hidden relative shadow-md m-1 w-60">
             {(localStorage.auth !== undefined) ?
              <>
             
                <Icon
                  className="absolute right-2 top-2 hover:scale-110 "
                  title="click to add"
                  color="red"
                  path={mdiHeartOutline}
                  size={1.5}
                />
               
              </>
                 :null
            } 
     
      <div>
      <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
        <h2 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></h2>
        <div className=" bg-[#7b6f5b60] text-gray-800 rounded-full">
      

      </div>
      </div>
        <div className="flex justify-between mt-2 mb-2 text-[#158467]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="h-5 bg-gray-200 rounded-full dark:bg-gray-700  w-5"></span>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="h-5 bg-gray-200 rounded-full dark:bg-gray-700  w-5"></span>
          </div>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="h-5 bg-gray-200 rounded-full dark:bg-gray-700  w-5"></span>
          </div>
        </div>
        <div className="h-6">
        <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></p>
        <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></p>
        </div>

        <Button
          className=" w-full mt-2 border  border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
          variant="text"
        >
          Show recipe
        </Button>
      </div>

    </div>
  )
}

export default DyPlaceHolder


