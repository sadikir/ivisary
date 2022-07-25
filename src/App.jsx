
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Verify from "./pages/join/Verify"
import Join from "./pages/join/Join"
import Registeruser from "./pages/join/Registeruser"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useContext} from "react"
import React from 'react';
import './App.css';
import {Context} from "./context/Context";
function App() {
 const {user}=useContext(Context)
  
  return (
    <Router>
     <div className="body">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/about/#pricing" element={<About/>}/>
        
        <Route exact path ="/join/:id" element ={<Join/>}/>
        <Route exact path ="/profile/:id" element = {<Profile/>}/>
        <Route exact path ="/login" element ={<Login/>}/>
        <Route exact path ="/registeruser/:id" element={<Registeruser/>}/>
        
        <Route exact path ="/contact" element = {<Contact/>}/>
        <Route exact path ="/verify/:userId/:tokenId" element = {<Verify/>}/>
      </Routes>
      <Footer/>
     </div>
    </Router>
  );
}

export default App;