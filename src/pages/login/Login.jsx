import "./login.css"
import {useEffect, useRef,useState, useContext} from "react";
import {Context} from "../../context/Context"
import axios from "axios"


const Login =()=>{
 const [email,setEmail]=useState("")
 const [passWord, setPassWord]=useState("")
  const [errorData, setErrorData]= useState()
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  const{dispatch, isFetching, user, error } = useContext(Context)
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    
    dispatch({type:"LOGIN_START"})
    if(email!=="" && passWord.length>=8){
      try{
      console.log("clicked")
       await axios.post("https://api.sadikirungo.repl.co/api/auth/login",{
      email,
      passWord
    }).then(res=>{
         res&&dispatch({type:"LOGIN_SUCCESS", payload:res.data})
         console.log(user)
         res&&window.location.replace("/profile")
        return    
    })
    }catch(err){
      
        setErrorData(err)
        dispatch({type:"LOGIN_FAILURE"})
        console.log(errorData.response.data)
    }
    }
  }
  return(
    <>
      <div className="login-wrapper">
        <h1>#1 platform form family sponsorship</h1>
        <form>
          
          <input onChange={((e)=>setEmail(e.target.value))} type = "email" placeholder="Email address"/>
          <input onChange={((e)=>setPassWord(e.target.value))} type ="password" placeholder ="Password"/>
          <span class="wrong-credential">{error?errorData.response.data:null}</span>
          <button onClick={(e)=>handleSubmit(e)}>Login</button>
        </form>
      </div>
    </>
  )
}
export default Login;