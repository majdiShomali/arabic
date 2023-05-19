import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavListMenu from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Kitchen from './pages/Kitchen';
import Admin from './pages/Admin';
import UserProvider from "./UserContext";

export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
          <NavListMenu />
      <Routes>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Kitchen" element={<Kitchen />} />
          <Route path="Admin" element={<Admin />} />
      </Routes>
         <Footer/>
    </BrowserRouter>
    </UserProvider>
  )
}


