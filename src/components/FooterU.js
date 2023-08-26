import React from 'react'
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const FooterU = () => {
    
  return (
      <footer className="w-full bg-white p-8">
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
        <Link/>
        <Link to="/About">
          <Typography
            as="a"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            حول
          </Typography>
          </Link>
        </li>
        <li>
        <Link to="/contact">
          <Typography
            as="a"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            تواصل معنا
          </Typography>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Typography
            as="a"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            الصفحة الرئيسية
          </Typography>
          </Link>
        </li>
   
      </ul>
      <p>الوصفات العربية</p>

    </div>
    <hr className="my-8 border-blue-gray-50" />
    <Typography color="blue-gray" className="text-center font-normal">
      &copy; حميع الحقوق محفوضة لعام 2023
    </Typography>
  </footer>
  )
}

export default FooterU

 
