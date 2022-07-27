import "./homeContact.css"
import axios from "axios";
import {useState} from "react"

const HomeContact=()=>{
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation]= useState("")
  const [message, setMessage]= useState("")


  const sendMail= async(e)=>{
    e.preventDefault()
    const res= await axios.post("https://api.sadikirungo.repl.co/api/contact/email",{
      firstName,
      lastName,
      email,
      phone,
      location,
      message
    })
  }
  return(
    <div className="home-contact-wrapper">
      <h1>Contact Us</h1>
      <div className="form-wrapper">
        <form className="home-contact-form">
          <div className="basic-info">
            <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First Name"/>
            <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Last Name"/>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
            <input onChange={(e)=>setPhone(e.target.value)} type="tel" placeholder="Phone Number"/>
          </div>
          <div className="address-wrapper">
            <input onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="City,Country"/>
          </div>
          <div className="message-wrapper">
            <textarea onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message here"></textarea>
          </div>
          <button onClick={(e)=>sendMail(e)} className="home-submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
export default HomeContact;