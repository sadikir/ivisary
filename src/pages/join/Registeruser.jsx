import "./registeruser.css"
import {useEffect,useState} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"

const Registeruser =()=>{
   const [runEffect, setRunEffect]= useState(true)
   const location= useLocation();
   const path=location.pathname
   const finalId = path.substr(path.lastIndexOf('/') + 1);
  
  useEffect(()=>{
    const Request = async()=>{
      if(localStorage.getItem(finalId)===null){
      localStorage.setItem(finalId,"okay")
      const response= await axios.post(`https://api.sadikirungo.repl.co/api/auth/paid`,{
        userId:finalId
      });
      response&& console.log(response)
    }
      
    }
    Request()
  },[])
  return(
  <> 
    <div className="registeruser-wrapper">
      <h1>Please wait...</h1>
    </div>
  </>
  )
}
export default Registeruser;