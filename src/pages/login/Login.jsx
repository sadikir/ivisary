import "./login.css"


const Login =()=>{
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