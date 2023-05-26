import React from 'react'
import { useState } from 'react';
import Pagination from "@mui/material/Pagination";

const Test = () => {
    
    const [searchTermArray, setSearchTermArray] = useState('');

    let array = [
        
        {image:"../image.png",title:"Jonathan Reinink",date:"Aug 18",avatar:"../image.png",url:"https://images.pexels.com/photos/16762985/pexels-photo-16762985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {image:"../image.png",title:"yyyyyyyyyyy",date:"Aug 20",avatar:"../image.png",url:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"},
        {image:"../image.png",title:"bb",date:"Aug 18",avatar:"../image.png",url:"https://images.pexels.com/photos/16762985/pexels-photo-16762985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}]
    const [FilterDataArray, setFilterDataArray] = useState(array);

    
   
    const filterDataByNameArray = (searchTermArray) => {
  
        const filteredDataArray = array.filter(item =>
          item.title.toLowerCase().includes(searchTermArray.toLowerCase())
        );
        setFilterDataArray(filteredDataArray);
      }



      const [currentPageArray, setCurrentPageArray] = useState(1);
      let totalItemsArray;
      let totalPagesArray;
      let slicedArrayArray;
      const itemsPerPage = 2;
      totalItemsArray = FilterDataArray.length;
      totalPagesArray = Math.ceil(totalItemsArray / itemsPerPage);
      const startIndexArray = (currentPageArray - 1) * itemsPerPage;
      const endIndexArray = startIndexArray + itemsPerPage;
      slicedArrayArray = FilterDataArray.slice(startIndexArray, endIndexArray);
      const handlePageChangeArray = (event, pageNumber) => {
        setCurrentPageArray(pageNumber);
      };



    return (
    <>
         <input type='text'placeholder='Search' style={{border:"1px solid black",}}
        
        value={searchTermArray}
       onChange={(e) =>{
        setSearchTermArray(e.target.value);
       filterDataByNameArray(e.target.value);
      }
  }
        
        />

{


slicedArrayArray.map((e)=>{


return(


<div className="max-w-sm w-full lg:max-w-full lg:flex mb-5">
          <div
            className="h-96 lg:h-80 lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
            style={{
              backgroundImage: `url(${e.url})`,
            }}
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
            <div className="collapse mb-8">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Click me to show/hide content
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={e.image}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{e.title}</p>
                <p className="text-gray-600">{e.date}</p>
              </div>
            </div>
          </div>
        </div>




)





})










}
    
{(
        <Pagination
          count={totalPagesArray}
          page={currentPageArray}
          onChange={handlePageChangeArray}
        />
      )}  
    
    
    </>
  )
}

export default Test