import "./profile.css"
import {BsFillCircleFill} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"
import {useEffect} from "react"

const Profile = () =>{
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  return(
    <div className="profile-wrapper">
      <span>BETA</span>
      <h1>Sadiki Rungo</h1>
      <div className="profile-account-type">
        <label>Account Type: <input disabled type="text" placeholder="Basic-free"/>
        </label>
      </div>
      <div className="profile-user-info">
        <h2>Update Your information</h2>
        
        <form className="profile-user-form">
          <span className="profile-info-edit"><FiEdit/>Edit</span>
          <div className="profile-name-update">
            <input type="text" placeholder="FirstName"/>
            <input type="text" placeholder="LaststName"/>
          </div>
          <input type="text" placeholder="Phone Number"/>
          <input type="text" placeholder="Email address"/>
          <input type="text" placeholder="Address"/>
          <div className="profile-password-update">
            <input type="password" placeholder="Old passoword"/>
            <input type ="password" placeholder="New password"/>
          </div>
          <button className="profile-update-button">Update</button>
        </form>
      </div>
      <div className="profile-relatives-list">
        <ol>
          <p>Your Relatives:</p>
          <li>Rafiki Rungo</li>
          <li>Rafiki Rungo</li>
          <li>Rafiki Rungo</li>
          <li>Rafiki Rungo</li>
        </ol>
      </div>
      <div className="profile-billing-history">
        <h2>Billing History</h2>
        <p>Next payment will be on <span>10/01/2022</span></p>
        <div className="billing-wrapper">
          <p>09/01/2022</p>
          <p>$150</p>
          <p>
            <span>Visa</span>
            <span>
              <BsFillCircleFill className="billing-icon"/>
              <BsFillCircleFill className="billing-icon"/>
              <BsFillCircleFill className="billing-icon"/>
              <BsFillCircleFill className="billing-icon"/>
            </span>
            <span>5689</span>
          </p>
        </div>
      </div>
      <div className="logout-wrapper">
        <button>Logout</button>
      </div>
    </div>
  )
}
export default Profile;