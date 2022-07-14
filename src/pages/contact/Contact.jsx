import "./contact.css"
import HomeContact from "../../components/homeContact/HomeContact"
import {useEffect} from "react"

const Contact = () =>{
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  return (
    <div>
      <div className="plain-contact">
        <h1>Get in touch 👋</h1>
        <h2>Need a hand with family sponsorship? Want to say hello? We'd love to hear from you!</h2>
        <h3>Ivisary Inc</h3>
        <p>12214 119 Avenue NW</p>
        <p>Edmonton, AB, T5L5C4</p>
        <p>Canada</p>
        <br/>
        <p>help@ivisary.com</p>
        <br/>
        <p>Call or text <span>+15879743028</span></p>
      </div>

      
      <div className="contact-page-form">
        <div className="home-contact-wrapper">
      <div className="form-wrapper">
        <form className="home-contact-form">
          <div className="basic-info">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="email" placeholder="Email"/>
            <input type="tel" placeholder="Phone Number"/>
          </div>
          <div className="address-wrapper">
            <input type="text" placeholder="City,Country"/>
          </div>
          <div className="message-wrapper">
            <textarea placeholder="Type your message here"></textarea>
          </div>
          <button className="home-submit">Send Message</button>
        </form>
      </div>
    </div>
      </div>
    </div>
  )
}
export default Contact;