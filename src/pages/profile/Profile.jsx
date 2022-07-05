import "./profile.css"
import {BsFillCircleFill} from "react-icons/bs"

const Profile = () =>{
  return(
    <div className="profile-wrapper">
      <span>BETA</span>
      <h1>Sadiki Rungo</h1>
      <div className="profile-account-type">
        <label>Account Type: <input disabled type="text" placeholder="Basic-free"/>
        </label>
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