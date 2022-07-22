import "./verifyEmail.css"
import {useEffect, useState, useRef} from "react"
import axios from "axios";
import {useLocation} from "react-router-dom"

const verifyEmail =()=>{
  const [input, setInput]=useState("");
  const [userId, setUserId]=useState("")
  const validInput= useRef("")
  const [warning, setWarning]=useState(false)

  const Location= useLocation()
  // const path =location.pathname.split("/")[2]
  // setUserId(path);
   console.log(location)
 useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"})
   
  },[])
  const handleSubmit=()=>{
    console.log("called handle submit")
    
  }
  useEffect(()=>{
    if(document.activeElement===validInput.current){
      setWarning(false)
    }
  },[document.activeElement])

  
  const validate = ()=>{
    if(validInput.current.value.length<4 || validInput.current.value.length>4){
      setWarning(true)
    }else{
      setWarning(false)
      handleSubmit()
    }
    
  }
  return(
    <> 
      <div className="verify-email-wrapper">
        <h1>Confirm your email address please!</h1>
        <p>A security code has been sent to your email address sadiki@gmail.com. Please open your email address and copy and paste the code below.</p>
        
        <input ref={validInput} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="security code"/>
        <span className={"wrong-token-warning "+(warning?"display-wrong-token-warning":"hide-wrong-token-warning")}>Please fill out the form correctly</span>
        <button onClick={validate}>Verify</button>
      </div>
    </>
  )
}
export default verifyEmail;