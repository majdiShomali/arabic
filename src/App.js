import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavListMenu from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Kitchen from './pages/Kitchen';
import Admin from './pages/Admin';
import About from './pages/aboutPage/About';
import UserProvider from "./UserContext";
import Recipes from './pages/Recipes';
import SignUp from './pages/SignUp';
import LogIn from './pages/Login';
import ShowRecipe from './pages/ShowRecipe';



export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
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
      </Routes>
         <Footer/>
    </BrowserRouter>
    </UserProvider>
  )
}


