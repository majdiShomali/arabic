import React from 'react'
import card from './landing-img/card.jpg'
import star from './landing-img/star.png'
import fire from './landing-img/fire.png'
import "./cards.css"
import PaginationNav1Presentation from '../navigation'
const Cards = () => {
  let array=[1,1,1,1,1];
  return (
    <>
    <div className='cardContainer'>
 {

 array.map((e) => {

return(
<div className="card">

<img src={card} alt=""/>
<div className="cardContent">
<p>Lorem ipsum dolor sit amet.</p>
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
            <PaginationNav1Presentation/>

    </>
  )
}

export default Cards