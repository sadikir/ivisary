import "./footer.css"
import {BsFacebook,BsLinkedin,BsTwitter} from "react-icons/bs"
import axios from "axios"
import {useState} from "react"



const Footer =()=>{
 const [email, setEmail]= useState("")


  const subscribeEmail=async(e)=>{
    e.preventDefault()
    const res = await axios.post("https://api.sadikirungo.repl.co/api/mail/subscribe",{
      email
    });
    res&&console.log(res)
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
             <p>About</p>
             <p>Pricing</p>
             <p>Pricing</p>
            </div>
            <div className="links-column2">
             <p>Blog</p>
             <p>Contact Us</p>
             <p>Privacy Policy</p>
            </div>
          </div>
          
        </div>
        <div className="footer-section footer-social">
          
          <div className="footer-newsletter">
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Newsletter Email..."/>
            <button onClick={(e)=>subscribeEmail(e)}>Subscribe</button>
          </div>
          <div className="footer-social-links">
            <BsFacebook className="social-links facebook-footer" />
            <BsLinkedin className="social-links linkedin-footer"/>
            <BsTwitter className="social-links twitter-footer"/>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright &copy;2022</p>
    </div>
  )
}
export default Footer;