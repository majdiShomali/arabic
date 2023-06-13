import "./App.css";
import { UserContext } from "./UserContext";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavListMenu from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
import Kitchen from "./pages/Kitchen";
import Admin from "./pages/Admin";
import About from "./pages/aboutPage/About";
import Recipes from "./pages/Recipes";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import ShowRecipe from "./pages/ShowRecipe";
import Kitchens from "./pages/Kitchens";

import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./pages/dashboard/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import NavListMenuD from "./pages/dashboard/NavDashboard";
import Test0 from "./pages/dashboard/test0";
import UserProfile from "./pages/UserProfile";
import UserInfo from "./components/dashboard/UserInfo"
export default function App() {
  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);

  const { routs, updateRouts } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.roles != null) {
      let roles = JSON.parse(localStorage.roles);
      let status = localStorage.SignStatus;
      setHideRouterUser(roles[0]);
      setHideRouterAdmin(roles[1]);
      setHideRouterProvider(roles[2]);
      updateRouts(roles);
    }
  }, []);

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
          <Route path="UserProfile" element={<UserProfile />} />
          <Route path="/Kitchen/:type_Kitchen" element={<Kitchens />} />
        </Routes>
        <Footer />
      </Router>
    );
  };

  const AppRouter2 = () => {
    return (
      <Router>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <NavListMenuD />
          <Routes>
            <Route index element={<Dashboard />} />

            <Route path="Test0" element={<Test0 />} />
            <Route path="ListUser" element={<UserInfo />} />
            <Route path="UserProfile" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    );
  };

  const AppRouter3 = () => {
    return (
      <Router>
        <NavListMenu />
        <Routes>
          <Route index element={<Admin />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
        </Routes>
        <Footer />
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
          <div className="flex">
            <AppRouter2 />
          </div>
        </>
      )}

      {hideRouter3 ? null : (
        <>
          <AppRouter3 />
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
  );
}
