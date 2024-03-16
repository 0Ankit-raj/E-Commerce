import React from "react";
import Navbar from "./Components/Navbar";
import Display from "./Components/Display.jsx";
import Login from "./Components/Login.jsx";
import Admin from "./Components/Admin.jsx";
import Cart from "./Components/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
const App = () => {
  // const [backendData,setbackendData]=useState([{}])
  // useEffect(()=>{
  //   fetch("/api").then(
  //      response =>  response.json()
  //   ).then(
  //     data => {
  //       setbackendData(data)
  //     }
  //   )
  // }, [])
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
      <Navbar /> 
      {/* {(typeof backendData.pgs === 'undefined')?(
        <p>Loading...</p>
      ):(
        backendData.pgs.map((user,i)=>(
          <p key={i} >{user}</p>
        ))
      )} */}
      <Routes>
        <Route path="/" element={<Display/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/home" element={<Display/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
};
export default App;