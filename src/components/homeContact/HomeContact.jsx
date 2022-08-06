import "./homeContact.css"
import axios from "axios";
import {useState} from "react"
import {SERVER_URL} from "../../App.jsx"

const HomeContact=()=>{
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation]= useState("")
  const [message, setMessage]= useState("")
  const [toggleMessageSuccess, setToggleMessageSuccess] = useState(false)
  const [validation, setValidation]=useState(false)

  const sendMail= async(e)=>{
    e.preventDefault()
    setToggleMessageSuccess(false)
    setValidation(false)
    if(firstName!==""&&lastName!==""&&email!==""&&location!==""&&message!==""&&phone!==""){
      const res= await axios.post(`${SERVER_URL}/api/contact/email`,{
      firstName,
      lastName,
      email,
      phone,
      location,
      message
    })
    console.log(res)
    res&& setToggleMessageSuccess(true)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setLocation("")
    setMessage("")
    setTimeout(()=>{setToggleMessageSuccess(false)},10000)
    }else{
      setValidation(true)
      setTimeout(()=>{setValidation(false)},5000)
    }
    
  }
  return(
    <div className="home-contact-wrapper">
      <h1>Contact Us</h1>
      <div className="form-wrapper">
        <form className="home-contact-form">
          <div className="basic-info">
            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First Name"/>
            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Last Name"/>
            <input value ={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" placeholder="Phone Number"/>
          </div>
          <div className="address-wrapper">
            <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="City,Country"/>
          </div>
          <div className="message-wrapper">
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message here"></textarea>
          </div>
          <p className={"validation-error "+ (validation?"display-validation-error":"hide-validation-error")}>Please check all the fields, some are missing!</p>
          <p className={"message-success " + (toggleMessageSuccess?"display-success":"hide-success") }>Message Sent 😄, We will get back to you shortly. Thank you!</p>
          <button onClick={(e)=>sendMail(e)} className="home-submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
export default HomeContact;