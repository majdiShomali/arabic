import React, { Component } from 'react'
import card from './landing-img/card.jpg'
import star from './landing-img/star.png'
import fire from './landing-img/fire.png'
import "./cards.css"
// import PaginationNav1Presentation from '../navigation'
import { useState ,useEffect } from 'react';
import Pagination from "@mui/material/Pagination";



const Cards = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([1,2,3,4,5]);

  let totalItems;
  let totalPages;
  let slicedArray;


  const itemsPerPage = 3;
  totalItems = data.length;
  totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  slicedArray = data.slice(startIndex, endIndex);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };


  let array=[1];
  return (
    <>
    <div className='cardContainer'>
 {

slicedArray.map((e) => {

return(
<div className="card">

<img src={card} alt=""/>
<div className="cardContent">
<p>{e}</p>
<div className="cardMain1">
<p>Lorem ipsum</p>

<div className="cardRating">
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
  <img src={star} />  
</div>

</div>

<div className="cardMain2">
<img src={fire} alt="cal"/>
<p>Lorem</p>
</div>

</div>

<div className="cardButtons">
<button>Show recipe</button>
</div>

</div>


)


      })
    }
   
   </div>
        <div className='PaginationCards'>   
    {(
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}

    </div> 
    </>
  )
}

export default Cards