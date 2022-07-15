import "./footer.css"
import {BsFacebook,BsLinkedin,BsTwitter} from "react-icons/bs"

const Footer =()=>{
  return(
    <div className="footer-wrapper" style={{backgroundColor:"red"}}>
      <div className="footer-group">
        <div className="footer-section footer-logo-wrapper">
          <img src="images/logo.jpg"/>
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
            <input type="email" placeholder="Newsletter Email..."/>
            <button>Subscribe</button>
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