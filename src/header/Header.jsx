import "./header.css"


const Header = ()=>{
  return (
    <div className="header">
      <img src="/images/logo.jpg" />
      <div className="menu">
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Login</li>
        <li>SignUp</li>
       </ul>
      </div>
      
    </div>
  );
}
export default Header;