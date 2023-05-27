import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavListMenu from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Kitchen from './pages/Kitchen';
import Admin from './pages/Admin';
import About from './pages/aboutPage/About';
import Recipes from './pages/Recipes';
import SignUp from './pages/SignUp';
import LogIn from './pages/Login';
import ShowRecipe from './pages/ShowRecipe';
import UserProfile from './pages/UserProfile';


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './pages/dashboard/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import NavListMenuD from './pages/dashboard/NavDashboard'
import Test0 from './pages/dashboard/test0';

export default function App() {
  const [hideRouter1, setHideRouter1] = useState(false);
  const [hideRouter2, setHideRouter2] = useState(true);

  const AppRouter1 = () => {
    return (
      
      <Router>
       <NavListMenu />
        <Routes>
             <Route index element={<Home />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="About" element={<About />} />
         <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="ShowRecipe" element={<ShowRecipe />} />
         <Route path="Recipes" element={<Recipes />} />
         <Route path="Kitchen" element={<Kitchen />} />
         <Route path="Admin" element={<Admin />} />
          <Route path="UserProfile" element={<UserProfile />} />
        </Routes>
        <Footer/>
      </Router>
     
    );
  };

  const AppRouter2 = () => {

    return (
      <Router>
        <Sidebar />
       <div style={{width:"100%"}}>
       <NavListMenuD/>
        <Routes>
         
        <Route index element={<Dashboard />} />

        <Route path="Test0" element={<Test0 />} />

        </Routes>
        </div>
      </Router>
    );
  };
  return (
    <>
        {hideRouter1 ? null : (
      <>
        <AppRouter1 />
      </>
    )}

     {hideRouter2 ? null : (
        <>
        <div className='flex'>
        <AppRouter2 />
       
        </div>
        
        </>
      )}



    </>

    // <UserProvider>
    // <BrowserRouter>
    //       <NavListMenu />
    //   <Routes>
  
    //       <Route index element={<Home />} />
    //       <Route path="ContactUs" element={<Contact />} />
    //       <Route path="About" element={<About />} />
    //       <Route path="SignUp" element={<SignUp />} />
    //       <Route path="LogIn" element={<LogIn />} />
    //       <Route path="ShowRecipe" element={<ShowRecipe />} />
    //       <Route path="Recipes" element={<Recipes />} />
    //       <Route path="Kitchen" element={<Kitchen />} />
    //       <Route path="Admin" element={<Admin />} />
    //       <Route path="UserProfile" element={<UserProfile />} />
    //       <Route path="Dashboard" element={<Dashboard />} />
    //   </Routes>
    //      <Footer/>
    // </BrowserRouter>
    // </UserProvider>
  )
}


