import "./App.css";
import { UserContext } from "./UserContext";

import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ----------------------user --------------------------/
import NavListMenu from "./components/Navbar";
import StickyNavbar from "./components/StickyNavbar";
import Home from "./pages/user/Home";
import Contact from "./pages/contact/Contact";
import Footer from "./components/FooterU";
import Kitchen from "./pages/Kitchen";
// import About from "./pages/aboutPage/About";
import AboutUs from "./pages/about/AboutUs";
import Recipes from "./pages/user/Recipes";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import ShowRecipe from "./pages/user/ShowRecipe";
import Kitchens from "./pages/user/Kitchens";
import UserProfile from "./pages/user/UserProfile";
import AddYourIng from "./components/landingPage/AddYourIng";
import PaymentPage from "./components/landingPage/Payment";
import Profile from "./pages/user/Profile";
import ForgetPassword from "./pages/ForgetPassword";

// ----------------------Provider routes----------------- //
import ProviderHome from "./pages/providerp/ProviderHome";
import ProviderProfile from "./pages/providerp/ProviderProfile";
import NavbarProvider from "./components/providerc/NavbarProvider"
import ReqIngredient from "./pages/providerp/ReqIngredient";
import ProviderNewProfile from "./pages/providerp/ProviderNewProfile";
// -----------------------Dashboard routes----------------//
import Sidebar from "./pages/dashboard/Sidebar";
import NavListMenuD from "./pages/dashboard/NavDashboard";
import MainDashboard from "./pages/dashboard/MainDashboard";
import UserInfo from "./components/dashboard/UserInfo";
import ProvidersList from "./components/dashboard/ProvidersList";
import AdminInfo from "./components/dashboard/AdminInfo";
import EditAboutUs from "./components/dashboard/EditAboutUs";
import PendingRecipes from "./components/dashboard/PendingRecipes";
import Ingredients from  "./pages/dashboard/Ingredients"
import AcceptPayment from "./components/dashboard/AcceptPayment";
import AcceptIng from "./components/dashboard/AcceptIng";
import LiveChat from "./pages/dashboard/Chat"

import NoPage404 from "./pages/NoPage404";
import axios from "axios";


export default function App() {


  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);
  const [userIdApp, setUserIdApp] = useState("");

  const { routs, updateRouts } = useContext(UserContext);

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
  
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let x = [];
        setUserIdApp(response.data.user.id)
        if (response.data.user.role == 1) {
          x = [true, false, true];
        } else if (response.data.user.role == 2) {
          x = [true, true, false];
        } else {
          x = [false, true, true];
        }
        setHideRouterUser(x[0]);
        setHideRouterAdmin(x[1]);
        setHideRouterProvider(x[2]);
        updateRouts(x);
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, []);

  // ----------------------user routes----------------- //

  const AppRouter1 = () => {
    return (
      <Router>
        {/* <NavListMenu /> */}
        <StickyNavbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Payment/:cardId/:price" element={<PaymentPage />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="AddYourIng" element={<AddYourIng />} />
          <Route path="/SignUp/:type" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="ShowRecipe/:id" element={<ShowRecipe userIdApp0 ={userIdApp} />} />
          <Route path="Recipes" element={<Recipes userIdApp0 ={userIdApp} />} />
          <Route path="Kitchen" element={<Kitchen  userIdApp0 ={userIdApp} />} />
          <Route path="UserProfile" element={<UserProfile />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Kitchen/:type_Kitchen" element={<Kitchens userIdApp0 ={userIdApp} />} />
          <Route path="/*" element={<NoPage404/>} />
        </Routes>
        <Footer />
      </Router>
    );
  };

  // ----------------------dashboard routes----------------- //
  const AppRouter2 = () => {
    return (
      <Router>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <NavListMenuD userIdApp0 ={userIdApp}  />
          <Routes>
            <Route index element={<MainDashboard />} />
            <Route path="ListUser" element={<UserInfo />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="ListProviders" element={<ProvidersList />} />
            <Route path="ListAdmin" element={<AdminInfo />} />
            <Route path="EditAboutContact" element={<EditAboutUs />} />
            <Route path="PendingRecipes" element={<PendingRecipes />} />
            <Route path="AcceptTables" element={<Ingredients />} />
            <Route path="AcceptPayment" element={<AcceptPayment />} />
            <Route path="AcceptIng" element={<AcceptIng />} />
            <Route path="Chat" element={<LiveChat />} />
          </Routes>
        </div>
      </Router>
    );
  };

  // ----------------------Provider routes----------------- //
console.log(userIdApp)
  const AppRouter3 = () => {
    return (
      <Router>
        <NavbarProvider />
        <Routes>
          <Route index element={<ProviderHome userIdApp0 ={userIdApp} />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="ReqIngredient" element={<ReqIngredient />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="ProviderProfile"  element={<ProviderNewProfile userIdApp0 ={userIdApp} />} />
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
