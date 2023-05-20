import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img2 from "./img2.png"
import img3Li from "./img3Li.png"
import "./Testimonial.css";

function Testimonials() {
        return (
          <div className="Testimonial">     
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={img2} />
          <div className="myCarousel">
            <h3>Alexis browni JR.</h3>
            <h4>Orange Manger</h4>
            <p>
            Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod
            </p>
          </div>
        </div>

        <div>
          <img src={img3Li} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
            Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod
            </p>
          </div>
        </div>

        <div>
          <img src={img2} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Model</h4>
            <p>
            Etiam sodales congue consequat. Aenean vitae ullamcorper leo. Pellentesque condimentum ex ut erat posuere, quis tincidunt augue semper. Cras congue nulla sed quam hendrerit euismod
            </p>
          </div>
        </div>
      </Carousel></div> 
    );
  }

export default Testimonials;