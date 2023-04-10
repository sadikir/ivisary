
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Verify from "./pages/join/Verify"
import Join from "./pages/join/Join"
import Registeruser from "./pages/join/Registeruser"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Header from "./components/header/Header"
import NotFound from "./components/404/NotFound"
import Footer from "./components/footer/Footer"
import HomeBlog from "./components/homeBlog/HomeBlog"
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {useContext} from "react"
import React from 'react';
import './App.css';
import {Context} from "./context/Context";
export let SERVER_URL=""

function App() {
 const {user}=useContext(Context)
  const url= window.location.href;
  const domain =(new URL(url))
  console.log(domain.hostname)
  if(domain.hostname==="ivisary.sadikirungo.repl.co"){
    SERVER_URL="https://api.sadikirungo.repl.co"
  }else if(domain.hostname==="ivisary.com"){
    SERVER_URL="https://ivisary.herokuapp.com"
  }
  
  window.addEventListener('load', (event) => {
         console.log('page is fully loaded');
       });
  
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
        <Route exact path ="*" element = {<NotFound/>}/>
      </Routes>
      <Footer/>
     </div>
    </Router>
  );
}

export default App;