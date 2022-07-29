import "./login.css"
import {useEffect, useRef,useState, useContext} from "react";
import {Context} from "../../context/Context"
import axios from "axios"


const Login =()=>{
 const [email,setEmail]=useState("")
 const [passWord, setPassWord]=useState("")
  const [errorData, setErrorData]= useState()
  const [formFilled, setFormFilled]= useState(false)
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  
  const{dispatch, isFetching, user, error } = useContext(Context)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setFormFilled(false)
    
    if(email!=="" && passWord.length>=8){
      dispatch({type:"LOGIN_START"})
      try{
      console.log("clicked")
       await axios.post("https://api.sadikirungo.repl.co/api/auth/login",{
      email,
      passWord
    }).then(res=>{
         res&&dispatch({type:"LOGIN_SUCCESS", payload:res.data})
         console.log(res.data._id)
         res&&window.location.replace("/profile/"+res.data._id)
        return    
    })
    }catch(err){
      
        setErrorData(err)
        dispatch({type:"LOGIN_FAILURE"})
    }
    }else{
      setFormFilled(true)
    }
  }
  return(
    <>
      <div className="login-wrapper">
        <h1>#1 platform form family sponsorship</h1>
        <form>
          
          <input onChange={((e)=>setEmail(e.target.value))} type = "email" placeholder="Email address"/>
          <input onChange={((e)=>setPassWord(e.target.value))} type ="password" placeholder ="Password"/>
          <span className="wrong-credential">{error?errorData.response.data:null}</span>
          <span className={"invalid-form-error " +(formFilled?"show_invalid-form-error":"hide-invalid-form-error")}>Please fill form properly</span>
          
          <button onClick={(e)=>handleSubmit(e)}>Login
            {isFetching
             ?<div className="loadingio-spinner-eclipse-ujuntois5rk">
               <div className="ldio-yl1ob84cjcf">
                <div></div>
              </div>
             </div>
            :null}

          </button>
        </form>
      </div>
    </>
  )
}
export default Login;