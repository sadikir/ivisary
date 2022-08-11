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
        
        <p>Edmonton, Alberta</p>
        <p>Canada</p>
        <br/>
        <p className="support-email">support@ivisary.com</p>
        <br/>
        
      </div>

      <HomeContact/>
      
    </div>
  )
}
export default Contact;