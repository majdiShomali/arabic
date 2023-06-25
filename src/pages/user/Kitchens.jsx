import React from "react";
import { useState } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import Cards from "../../components/landingPage/Cards";

const Kitchens = () => {
  const [Kitchen, setKitchen] = useState([]);
  const { type_Kitchen } = useParams();

  console.log(type_Kitchen);
  return(
  <>
  
  <Cards />
  </>
  
  );
  
  
  
  
  
  
  
};

export default Kitchens;
