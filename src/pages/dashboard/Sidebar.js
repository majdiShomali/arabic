// import "./sidebar.css"
import Icon from '@mdi/react';
import { mdiSilverwareForkKnife } from '@mdi/js';
import { mdiAccountMultipleOutline } from '@mdi/js';
import { mdiInformationOutline,mdiShieldCrownOutline  } from '@mdi/js';
import { UserContext } from '../../UserContext';
import React,{useState,useEffect,useContext} from "react";
import { mdiTableFurniture } from '@mdi/js';
import { mdiCash } from '@mdi/js';
import { mdiFoodTurkey } from '@mdi/js';
import { mdiChefHat } from '@mdi/js';
import { mdiFoodApple } from '@mdi/js';
import axios from "axios";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { DashboardPendingContext } from '../../DashboardPendingContext';
import { AllContext } from '../../AllDataContext';
  export default function Sidebar() {

  

    const { PersonsContext, setPersonsContext } = useContext(DashboardPendingContext);
    const { SponsorPContext, setSponsorPContext } = useContext(DashboardPendingContext);
    const { PendingMLength, setPendingMLength } = useContext(DashboardPendingContext);
    console.log(PendingMLength)

    const { SignStatus,updateSignStatus } = useContext(UserContext)



function handleLogOut(){

    


  Swal.fire({
    title: ` logout?  `,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    icon: 'warning'
}
).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

        Swal.fire(`  done `, '', 'success');
     
        updateSignStatus("signUp")
        localStorage.setItem("SignStatus","signUp")
        localStorage.removeItem("auth");
        localStorage.removeItem("roles");
        window.location.href = 'http://localhost:3000/';
      

    } else
        Swal.fire(' Cancelled', '', 'error')

})

}


    return (
      <Card className=" min-h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-white-900/5 Sidebar bg-white sideBarDash">
        <div className="mb-2 p-4">
        <Typography className="text-amber-500" variant="h5" color="blue-gray">
        <a> Arabic Recipes </a>
          </Typography>
        </div>
        <List>
          <Link to='/'>
          <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'black'}}> Statistics </a>
          </ListItem>
          </Link>

          <Link to='/AcceptTables'>
          <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiFoodApple} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> add Ingredients </a>
          </ListItem>
          </Link>

          <Link to='/ListAdmin'>
           <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiShieldCrownOutline } size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Admins list </a>
          </ListItem>
          </Link>

           <Link to='/ListUser'>
           <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiAccountMultipleOutline} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Users list </a>
          </ListItem>
          </Link>

          <Link to='/ListProviders'>
          <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiChefHat} size={1} />

            </ListItemPrefix>
            <a style={{color:'black'}}> Providers List </a>
          </ListItem>
          </Link>

          <Link to='/PendingRecipes'>
          <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiFoodTurkey} size={1} />

            </ListItemPrefix>
            <div className='flex justify-between w-full'>
               <p className='text-black block'>Pending Recipes</p> 
               
               <p className='text-black block'>{PersonsContext?.length}</p> 
               </div>
           
            
          </ListItem>
          </Link>
          
     
          <Link to='/AcceptIng'>
          <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiSilverwareForkKnife} size={1} />
            </ListItemPrefix>
            <div className='flex justify-between w-full'>
               <p className='text-black block'>Accept Ing</p> 
               
               <p className='text-black block'>{SponsorPContext?.length}</p> 
               </div>
          </ListItem>
          </Link>


          <Link to='/AcceptPayment'>
          <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiCash} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Payments </a>
          </ListItem>
          </Link>
          

          <Link to='/EditAboutContact'>
          <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
            <Icon path={mdiInformationOutline} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Edit About </a>
          </ListItem>
          </Link>
          {/* PendingMessageLength */}

         <Link to='/Chat'>
         <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>

            <div className='flex justify-between w-full'>
               <p className='text-black block'>Inbox</p> 
               
               <p className='text-black block'>{PendingMLength?.length}</p> 
               </div>


            {/* <ListItemSuffix>
              <Chip value="14" size="sm" variant="white" color="blue-gray" className="rounded-full" />
            </ListItemSuffix> */}
          </ListItem>
          </Link>

{/* 
         <Link to="UserProfile">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'white'}}> Profile </a>
          </ListItem>
          </Link> */}

          {/* <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
            </Link> */}
           <button onClick={handleLogOut}>
           <ListItem className="hover:bg-amber-500">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'black'}}> Log Out </a>
          </ListItem>
          </button>
        </List>
      </Card>
    );
  }