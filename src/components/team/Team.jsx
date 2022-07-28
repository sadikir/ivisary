import "./team.css"
import {BsFacebook,BsLinkedin,BsTwitter} from "react-icons/bs"

const Team =()=>{
  return(
    <div className="team-wrapper">
      <h1>Our Leaders</h1>
     <div className="member-group">
      <div className="team-member">
        <img src="images/teamimg.png"/>
        <h2>Chris Bell</h2>
        <p>CEO and founder</p>
        <div className="team-social">
          <BsFacebook className="social-link facebook" />
          <BsLinkedin className="social-link linkedin"/>
          <BsTwitter className="social-link twitter"/>
        </div>
      </div>
      <div className="team-member">
        <img src="images/teamimg.png"/>
        <h2>Sadiki Rungo</h2>
        <p>CTO and founder</p>
        <div className="team-social">
          <BsFacebook className="social-link facebook" />
          <BsLinkedin className="social-link linkedin"/>
          <BsTwitter className="social-link twitter"/>
        </div>
      </div>
       {/*<div className="team-member">
        <img src="images/teamimg.png"/>
        <h2>#Hiring</h2>
        <p>Mern Devoper</p>
        <div className="team-social">
          <BsFacebook className="social-link facebook" />
          <BsLinkedin className="social-link linkedin"/>
          <BsTwitter className="social-link twitter"/>
        </div>
      </div>*/}
       
       {/*<div className="team-member">
        <img src="images/teamimg.png"/>
        <h2>#Hiring</h2>
        <p>Business Analyst</p>
        <div className="team-social">
          <BsFacebook className="social-link facebook" />
          <BsLinkedin className="social-link linkedin"/>
          <BsTwitter className="social-link twitter"/>
        </div>
      </div>*/}
     </div>
    </div>
  )
}
  export default Team;