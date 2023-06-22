import React from 'react'
import { useState } from 'react';

import { Link, useParams, useNavigate } from "react-router-dom";



const Kitchens = () => {
    const [Kitchen, setKitchen] = useState([]);
    const { type_Kitchen } = useParams();

console.log(type_Kitchen)
  return (
    <div>{type_Kitchen}</div>
  )
}

export default Kitchens