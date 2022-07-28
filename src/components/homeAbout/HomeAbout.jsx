import "./homeAbout.css"
import {Link} from "react-router-dom"


const HomeAbout = () =>{
  return(
    <div className="homeAbout">
      <div className="homeAbout-box1">
        
      </div>
      <div className="homeAbout-box2">
        <div className="box2-content">
          <h1>Hassle-free family sponsorship</h1>
          <p>Every year millions move to USA, Canada, EU, and Australia in search for better life. However if you already live here, you understand how hard it is to get here. It takes time, money and a lot of efforts. Many people give up even before trying By far the easiest and fastest way to move here is to get sponsored by someone who already live here. That's why we are here for that.</p>
          <p>Due to lack of extra finances and legal support many immigrants take years without sponsoring even one of their relatives back home. Our company works with immigrants to make family sponsorship effortless and affordable. We provide financial and legal support to immigrants who want to sponsor their relatives. Make it your goal today to sponsor your brother or sister and others.</p>
        </div>
        <Link to="/about#pricing">
           <button>Join us</button>
        </Link>
      </div>
    </div>
  )
}
export default HomeAbout;