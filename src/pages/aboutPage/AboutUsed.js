import React from "react";
import "./AboutUsed.css";
import Icon from "@mdi/react";
import { mdiFridge } from "@mdi/js";
import { mdiHamburgerPlus } from "@mdi/js";
import { mdiStove } from "@mdi/js";
import aboutMeal from "../../Images/meals/majdi.jpg";
import { Link } from "react-router-dom";
import { mdiSilverwareForkKnife } from '@mdi/js';

 

const AboutUsed = () => {
  return (

















    
<div className="AboutUsed m-5 px-8">
      <div className="containerr">
        <div className="text">
          <h1 className="text-3xl pb-5 ">Add ingredients to your List</h1>
          <p className="aboutP">
          Now you can add ingredients to your list to see what recipes you  can make 
          </p>
          <div className="icons">
            <Link to="/">
            <div className="icoon">
              <div>
              <Icon path={mdiFridge} size={2} />
              </div>
              <p>Fridge</p>
            </div>
            </Link>

            <Link to="/">   
            <div className="icoon">
              <div>
              <Icon path={mdiSilverwareForkKnife} size={2} />
              </div>
              <p>REs</p>
            </div>
            </Link>

            <Link to="/">   
            <div className="icoon">
              <div>
              <Icon path={mdiHamburgerPlus} size={2} />
              </div>
              <p>Add items</p>
            </div>
            </Link>

            <Link to="/">
            <div className="icoon">
              <div>
              <Icon path={mdiStove} size={2} />
              </div>
              <p>Start cooking</p>
            </div>
            </Link>

          </div>
        </div>
        <div className="imgAbout">
          <img className="img-new" src={aboutMeal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsed;
