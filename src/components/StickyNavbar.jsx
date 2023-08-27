import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";

import {
  LifebuoyIcon,
  PowerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { Link, useNavigate } from "react-router-dom";
 

import Icon from '@mdi/react';
import { mdiTranslateVariant } from '@mdi/js';

import { mdiHomeOutline } from '@mdi/js';
import { mdiFridgeOutline } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import { mdiAccountBoxOutline } from '@mdi/js';
import logo from "../Images/logo.png"
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 w-full   flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      { localStorage.auth !== undefined ? 
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 px-1 font-normal text-lg flex hover:bg-[#219D80] rounded-lg hover:scale-105"
      >
        
        <Link onClick={()=>setOpenNav(false)} to="/Kitchen" className="flex items-center">
        المطبخ
        <Icon className="text-amber-600 mx-1" path={mdiFridgeOutline} size={1} />
          
        </Link>

      </Typography>
      
      : null}
      
  
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 px-1 justify-end font-normal text-lg flex hover:bg-[#219D80] rounded-lg hover:scale-105"
      >
        
        <HashLink smooth={true} onClick={()=>setOpenNav(false)} to="/#" className="flex items-center">
        الصفحة الرئيسية

        <Icon className="text-amber-600 mx-1" path={mdiHomeOutline} size={1} />
        </HashLink>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 px-1 justify-end font-normal text-lg flex hover:bg-[#219D80] rounded-lg hover:scale-105"
      >
       <Link onClick={()=>setOpenNav(false)} to="/About" className="flex items-center">
       حول
        <Icon className="text-amber-600 mx-1" path={mdiInformationOutline} size={1} />
          
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 px-1 justify-end font-normal text-lg  flex hover:bg-[#219D80] rounded-lg hover:scale-105 active:bg-blue-gray-500 active:scale-100"
      >
        <Link  onClick={()=>setOpenNav(false)} to="/contactus" className="flex items-center">
        نواصل معنا
        <Icon className="text-amber-600 mx-1" path={mdiAccountBoxOutline} size={1} />
        
          
        </Link>
      </Typography>
    </ul>
  );



  const profileMenuItems = [
    {
      label: "Profile",
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate =useNavigate()
    const closeMenu = (label) => {
      setIsMenuOpen(false);
      if (label == "Sign Out") {
        localStorage.removeItem("auth");
        window.location.href = "http://localhost:3000/";
        console.log(label);
      } else if (label == "Profile") {
        navigate("/Profile")        
      }
    };

    return (
      <Menu  open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end"  >
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto hidden lg:flex "
          >
            <svg
              xmlns="https://source.unsplash.com/MP0IUfwrn0A"
              className="h-7 w-7 text-amber-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform text-black ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => {
                  closeMenu(label);
                }}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

 const {selectedLanguage,setSelectedLanguage}=useContext(LanguageContext)


  const handleLanguage = ()=>{
 console.log(selectedLanguage);
 if(selectedLanguage ==="AR"){
  setSelectedLanguage("EN")
 }else{
  setSelectedLanguage("AR")
 }
  }

 
  return (
      
      <Navbar className="max-h-[768px] max-w-[100%] w-[100%]  px-10 sticky top-0 z-20">
        <div className="flex items-center justify-between text-blue-gray-900">
          
        <div className="flex items-center justify-start  w-40">
 
 { localStorage.auth !== undefined ?
 
 <>
 <div>
 <ProfileMenu />  
 </div>        
 </>
 
 :
 <>
 
 <Link to="login">
  <Button
   variant="gradient"
   size="sm"
   className="hidden lg:inline-block hover:shadow-non "
   color="orange"
 >
   <span>تسجيل الدخول</span>
 </Button>
 </Link>

 
 </>
 
 
 }

<Icon onClick={()=>handleLanguage()} className="mx-4 hover:scale-105 cursor-pointer" color={"blue"} path={mdiTranslateVariant} size={1} />

 <div>
 <IconButton
   variant="text"
   className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
   ripple={false}
   onClick={() => setOpenNav(!openNav)}
 >
   {openNav ? (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       className="h-6 w-6"
       viewBox="0 0 24 24"
       stroke="currentColor"
       strokeWidth={2}
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M6 18L18 6M6 6l12 12"
       />
     </svg>
   ) : (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6"
       fill="none"
       stroke="currentColor"
       strokeWidth={2}
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M4 6h16M4 12h16M4 18h16"
       />
     </svg>
   )}
 </IconButton>
 </div>
         </div>

          <div className=" hidden lg:block">{navList}</div>

      

          <Link to="/">
          <Typography
            className="w-40 cursor-pointer  font-medium flex items-center justify-between"
          >
           <p className="text-lg">الوصفات العربية</p> 

            <img className="w-10 h-10 rounded-full  shadow-md" src={logo}/>
            
          </Typography>
          </Link>
        </div>
        <Collapse open={openNav}>
          {navList}
          {localStorage.auth !== undefined ?   
          <>
          <Link to="/Profile">
             <Button onClick={() => setOpenNav(false)}
          variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Profile</span>
          </Button>
          </Link>
         
             <Button onClick={() => {
              setOpenNav(false)
              localStorage.removeItem("auth");
              window.location.href = "http://localhost:3000/";

             }}
          variant="gradient" size="sm" fullWidth className="mb-2">
            <span>LogOut</span>
          </Button>
          
          </>
          :
          <Link to="/Login">
          <Button onClick={() => setOpenNav(false)}
       variant="gradient" size="sm" fullWidth className="mb-2 bg-amber-600">
         <span>تسجيل الدخول</span>
       </Button>
       </Link>
          
          }
       
        </Collapse>
      </Navbar>
     
  );
}