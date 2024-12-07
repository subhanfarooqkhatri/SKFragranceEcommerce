import { useState } from "react";
import "./App.css";
import { AddToCard } from "./Components/AddToCard";
import Header from "./Components/Header";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyFooter from "./components/Footer";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SiginUp from "./Pages/SiginUp";
import Profile from "./Pages/Profile";
import { Navigate } from "react-router-dom";
import AllProduct from "./Pages/AllProduct";
import CardTotal from "./Pages/CardTotal";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const [count, setCount] = useState(0);
  let logSing = false;
  return (
    <>
      <div className="w-[100%]  2xl:center  ">
        <Header />
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail/:id" element={<ProductDetails />} />
          <Route path="/AllProduct" element={<AllProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CardTotal" element={<CardTotal />} />

          <Route path="/SiginUp" element={<SiginUp />} />
          {logSing ? (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/Login" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="*" element={<Navigate to="/Login" />} />
            </>
          )}
        </Routes>
        <MyFooter />
      </div>
    </>
  );
}

export default App;