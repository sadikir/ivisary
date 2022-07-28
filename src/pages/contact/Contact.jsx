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
        <p className="support-email">support@ivisary.com</p>
        <br/>
        <p>Call or text <span>+15879743028</span></p>
      </div>

      <HomeContact/>
      
    </div>
  )
}
export default Contact;