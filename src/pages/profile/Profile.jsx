import "./profile.css"
import {BsFillCircleFill} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"
import {useEffect} from "react"
import {Context} from "../../context/Context"
import {useContext, useState} from "react"
import {Link} from "react-router-dom"

const Profile = () =>{
 const [edit, setEdit]=useState(false)

  const handleEdit=()=>{
    if(!edit){
      setEdit(true)
    }else{
      setEdit(false)
    }
  }
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  const{ user } = useContext(Context)
  return(
    <div className="profile-wrapper">
      <span>BETA</span>
      <h1>{user.firstName + " " + user.lastName}</h1>
      <div className="profile-account-type">
        <label>Account Type: <input disabled type="text" placeholder={user.accountType}/>
        </label>
      </div>
      <div className="profile-user-info">
        <h2>Update Your information</h2>
        
        <form className="profile-user-form " >
          <span className="profile-info-edit" onClick={handleEdit}><FiEdit/>Edit</span>
          <div className="profile-name-update">
            <input disabled= {!edit?"disabled":null} type="text" placeholder="FirstName" value={user.firstName}/>
            <input disabled= {!edit?"disabled":null} type="text" placeholder="LaststName" value={user.lastName}/>
          </div>
          <input disabled= {!edit?"disabled":null} type="text" placeholder="Phone Number" value={user.phone}/>
          <input disabled= {!edit?"disabled":null} type="text" placeholder="Email address" value={user.email}/>
          <span className="email-verify">Email Verified</span>
          <input disabled= {!edit?"disabled":null} type="text" placeholder="Address" value={user.address}/>
          <div className="profile-password-update">
            <input disabled= {!edit?"disabled":null} type="password" placeholder="Old passoword"/>
            <input disabled= {!edit?"disabled":null} type ="password" placeholder="New password"/>
          </div>
          <button className="profile-update-button">Update</button>
        </form>
      </div>
      <div className="profile-relatives-list">
        <ol>
          <p>Your Relatives:</p>
           {
        user.relatives.map((relative) => <li>{relative.name}</li>)
        }
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
        
        <Link className ="button-link" to="/Login"> 
          <button>Logout</button> 
        </Link>
        
      </div>
    </div>
  )
}
export default Profile;