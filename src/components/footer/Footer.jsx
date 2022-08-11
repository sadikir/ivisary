import "./footer-style.css"
import {BsFacebook,BsLinkedin,BsTwitter} from "react-icons/bs"
import axios from "axios"
import {useState} from "react"
import {FaTiktok} from "react-icons/fa"
import {Link} from "react-router-dom"
import {SERVER_URL} from "../../App.jsx"



const Footer =()=>{
 const [email, setEmail]= useState("")
 const [toggleSubscribeSuccess,setToggleSubscribeSucess]= useState(false)
 const [toggleSubValidation, setToggleSubValidation] = useState(false)


  const subscribeEmail=async(e)=>{
    e.preventDefault()
    setToggleSubValidation(false)
    if(email!==""){
      setToggleSubscribeSucess(false)
      const res = await axios.post(`${SERVER_URL}/api/mail/subscribe`,{
      email
    });
      res&&console.log(res)
      res&&setToggleSubscribeSucess(true);
      setEmail("")
      setTimeout(()=>{setToggleSubscribeSucess(false)},10000)
    }else{
      setToggleSubValidation(true)
      setTimeout(()=>{setToggleSubValidation(false)},5000)
      
    }
    
   }
  
  return(
    <div className="footer_section-wrapper" >
      <div className="footer-group">
        <div className="footer-section footer-logo-wrapper">
          <img src="images/logo.png"/>
          <p>Reuniting families one at a time</p>
        </div>
        <div className="footer-section footer-site-map">
          <div>
            <h3>Company</h3>
          </div>
          <div className="footer-site-links">
            <div className="links-column1">
             <p><Link to="/about"> About </Link></p>
             <p><Link to="/about#pricing"> Pricing </Link></p>
             <p><Link to="/blog">Blog </Link></p>
            </div>
            <div className="links-column2">
             <p><Link to="/contact">Contact Us</Link></p>
             <p><Link to="/terms">Terms of service</Link></p>
             <p><Link to="/policy">Privacy Policy</Link></p>
            </div>
          </div>
          
        </div>
        <div className="footer-section footer-social">
          
          <div className="footer-newsletter">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Newsletter Email..."/>
            <p className={"subscribe-success " + (toggleSubscribeSuccess?"show-subscribe-success":"hide-subscribe-success")}>You subscribed 😄, Thank you!</p>
            <p className={"sub-validation-error "+ (toggleSubValidation?"show-sub-validation-error":"hide-sub-validation-error")}>Please provide an email</p>
            <button onClick={(e)=>subscribeEmail(e)}>Subscribe</button>
          </div>
          <div className="footer-social-links">
            {/*<Link className="social-links" to="https://www.facebook.com/ivisary">
               <BsFacebook className=" facebook-footer" />
            </Link>
            <Link className="social-links" to ="https://www.linkedin.com/company/ivisary">
              <BsLinkedin className="linkedin-footer"/>
            </Link>
            <Link className="social-links" to="https://twitter.com/ivisary_">
              <BsTwitter className=" twitter-footer"/>
            </Link>
            <Link className="social-links" to="https://www.tiktok.com/@ivisary_">
              <FaTiktok className="tiktok-footer"/>
            </Link>*/}
          </div>
        </div>
      </div>
      <p className="copyright">Copyright &copy;2022</p>
    </div>
  )
}
export default Footer;