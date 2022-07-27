import "./registeruser.css"
import {useEffect,useState, useContext} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import {Context} from "../../context/Context"

const Registeruser =()=>{

   const [runEffect, setRunEffect]= useState(true)
   const location= useLocation();
   const path=location.pathname
   const finalId = path.substr(path.lastIndexOf('/') + 1);
   const {user, dispatch} = useContext(Context)
  
  useEffect(()=>{
    const Request = async()=>{
      if(localStorage.getItem(finalId)===null){
      localStorage.setItem(finalId,"okay")
      await axios.post(`https://api.sadikirungo.repl.co/api/auth/paid`,{
        userId:finalId,
        sessionId:localStorage.getItem("sessionId")
      }).then(response=>{
        response&&dispatch({type:"LOGIN_SUCCESS", payload:response.data})
         
       response&&window.location.replace("/profile/"+response.data._id)
      })
       
    }
      
    }
    Request()
  },[])
  return(
  <> 
    <div className="registeruser-wrapper">
      <h1>Payment Accepted, Thank you!</h1>
      <h2>Please Wait...</h2>
    </div>
  </>
  )
}
export default Registeruser;