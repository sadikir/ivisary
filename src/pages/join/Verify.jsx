import "./verify.css"
import {useEffect,useState} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import {Context} from "../../context/Context"
import {useContext} from "react"

const Verify =()=>{
   const {dispatch} = useContext(Context)
   const [runEffect, setRunEffect]= useState(true)
   const location= useLocation();
   const path=location.pathname
   const tokenId = path.substr(path.lastIndexOf('/') + 1);
  const userId =path.split('/')[2]
  console.log(userId)

  
  useEffect(()=>{
   const Request = async ()=>{
      if(localStorage.getItem(tokenId)===null){
        localStorage.setItem(tokenId,"okay")
      const res= await axios.put(`https://api.sadikirungo.repl.co/api/auth/verify/${userId}`,{
        tokenId,
        userId
      });
        res&& console.log("from outside")
        if(res){
          console.log( "form if")
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
          console.log(res.data)
          res&&window.location.replace("/profile/"+res.data._id)
        }
      
    }
   }
    Request()
  },[])
  return(
  <> 
    <div className="verify-wrapper">
      <h1>Please wait...</h1>
    </div>
  </>
  )
}
export default Verify;