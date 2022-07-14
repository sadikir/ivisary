import "./login.css"
import {useEffect} from "react";

const Login =()=>{
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  return(
    <>
      <div className="login-wrapper">
        <h1>#1 platform form family sponsorship</h1>
        <form>
          <input type = "email" placeholder="Email address"/>
          <input type ="password" placeholder ="Password"/>
          <button>Login</button>
        </form>
      </div>
    </>
  )
}
export default Login;