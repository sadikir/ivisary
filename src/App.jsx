
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Join from "./pages/join/Join"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';

function App() {
  
  return (
    <Router>
     <div className="body">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/about/#pricing" element={<About/>}/>
        <Route exact path ="/login" element ={<Login/>}/>
        <Route exact path ="/join" element ={<Join/>}/>
        <Route exact path ="/profile" element = {<Profile/>}/>
        <Route exact path ="/contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
     </div>
    </Router>
  );
}

export default App;