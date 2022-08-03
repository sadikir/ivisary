import "./header.css"
import { FaHome } from "react-icons/fa"
import {FaExclamationCircle} from "react-icons/fa"
import {ImPriceTag} from "react-icons/im"
import {FaRegNewspaper} from "react-icons/fa"
import {AiTwotonePhone} from "react-icons/ai"
import {useState, useContext} from "react";
import {Link} from "react-router-dom"
import {Context} from "../../context/Context"



const Header = ()=>{
  //Hide and show mobile menu
  let [menu, setMenu] = useState(false);
  const toggleMenu=()=>{
    if(!menu){
      setMenu(true)
    }else{
      setMenu(false)
    }
  }
  
  return (
    <div className="header">
    <img className = "logoImg" src="/images/logo.png" />
      <div className="menu desktop-menu">
       <ul className="desktop-menu-list">
        <li><Link to="/"><FaHome className="menuIcon"/>Home</Link></li>
        <li><Link to ="/about"><FaExclamationCircle className="menuIcon"/>About</Link></li>
        <li><Link to ="/about/#pricing"><ImPriceTag className="menuIcon"/> Pricing</Link></li>
         <li><Link to ="/contact"><AiTwotonePhone className="menuIcon"/> Contact</Link></li>
        <li className="header-blog"><Link to = "/blog"><FaRegNewspaper className="menuIcon"/>Blog</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about/#pricing">SignUp</Link></li>
       </ul>
      </div>
      <div className= "mobile-menu">
        <div className="humberger" onClick={toggleMenu}>
          <div className="lines line1"></div>
          <div className="lines line2"></div>
          <div className="lines line3"></div>
        </div>
        <div className={"mobile-items " + (menu ? "display-menu": "hide-menu") }>
          <ul className="mobile-menu-list" >
            <li onClick={toggleMenu}><Link to="/"><FaHome className="menuIcon"/>Home</Link></li>
            <li onClick={toggleMenu}><Link to ="/about"><FaExclamationCircle className="menuIcon"/>About</Link></li>
            <li onClick={toggleMenu}><Link to ="/about/#pricing"><ImPriceTag className="menuIcon"/> Pricing</Link></li>
            <li onClick={toggleMenu}><Link to ="/contact"><AiTwotonePhone className="menuIcon"/> Contact</Link></li>
           <li className="header-blog" onClick={toggleMenu}><Link to = "/blog"><FaRegNewspaper className="menuIcon"/>Blog</Link></li>
            <li onClick={toggleMenu}><Link to="/login">Login</Link></li>
            <li onClick={toggleMenu}><Link to="/about/#pricing">SignUp</Link></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
export default Header;