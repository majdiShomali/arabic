import React from "react";
import { useState } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import Cards from "../../components/landingPage/Cards";

const Kitchens = ({userIdApp0}) => {
  const [Kitchen, setKitchen] = useState([]);
  const { type_Kitchen } = useParams();

  console.log(type_Kitchen);
  return(
  <>
  
  <Cards nation={type_Kitchen} userIdApp0={userIdApp0}/>
  </>
  
  );
  
  
  
  
  
  
  
};

export default Kitchens;
