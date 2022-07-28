import "./intro.css"
import {Link} from "react-router-dom"

const Intro=()=>{
  return(
    <div className="introSection">
      <div className="box1">
        <h1>We help immigrants to </h1>
        <h2> sponsor their relatives</h2>
        <h1>By offering reliable  </h1>
        <h1>financial</h1>
        <h2>and legal support</h2>
        <p>#1 Platform for family sponsorship</p>
        
        <Link className="intro-button" to="/about#pricing">
           <button>Join us</button>
        </Link>

        
      </div>
      <div className= "box2">
        
      </div>
    </div>
  )
}
export default Intro;