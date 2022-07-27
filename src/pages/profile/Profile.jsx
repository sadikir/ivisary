import "./profile.css"
import {BsFillCircleFill} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"
import {useEffect} from "react"
import {Context} from "../../context/Context"
import {useContext, useState,useRef} from "react"
import {Link} from "react-router-dom"
import {ImCancelCircle} from "react-icons/im"
import axios from "axios"

const Profile = () =>{
 const [edit, setEdit]=useState(false)
 const{ user, dispatch } = useContext(Context)
 const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [oldEmail,setOldEmail]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [address,setAddress]=useState("")
  const [oldPass, setOld]=useState("")
  const [newPass, setNew]=useState("")
  const [userId, setUserId] = useState("")
  const [showVerify, setShowVerify]=useState(true)

useEffect(()=>{
  setFirstName(user.firstName)
  setLastName(user.lastName)
  setPhone(user.phone)
  setAddress(user.address)
  setOldEmail(user.email)
  setUserId(user._id)
  setEmail(user.email)
},[])
  const handleEdit=()=>{
    if(!edit){
      setEdit(true)
    }else{
      setEdit(false)
    }
  }
  const handleForm= async(e)=>{
    console.log("handle form clicked")
    dispatch({ type: "UPDATE_START" });
    try{
      
      await axios.put(`https://api.sadikirungo.repl.co/api/profile/${user._id}`,{
        firstName,
        lastName,
        email,
        oldEmail,
        phone,
        address,
        oldPass,
        newPass,
        userId
      }).then(res=>{
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        console.log(res.data)
        return
      })
    }catch(err){
      dispatch({ type: "UPDATE_FAILURE" });
      console.log(err)
    }
  }
  
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])


  
 const VerifyEmail = async()=>{
   setShowVerify(false)
   console.log(showVerify)
   setTimeout(
  () => {setShowVerify(true)
        console.log(showVerify)}, 
  60000
);
    
   await axios.post("https://api.sadikirungo.repl.co/api/auth/verifyemail",{
     email:user.email
   })

 }
  const handleLogout= ()=>{
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login")
  }
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
          {!edit?<span className="profile-info-edit" onClick={handleEdit}>
            <span><FiEdit/>Edit</span>
          </span>:null}
          <div className="profile-name-update">
            <input disabled= {!edit?true:false} type="text" placeholder={user.firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <input disabled= {!edit?"disabled":null} type="text" placeholder={user.lastName} onChange={(e)=>setLastName(e.target.value)}/>
          </div>
          <input disabled= {!edit?"disabled":null} type="text" placeholder={user.phone} onChange={(e)=>setPhone(e.target.value)} />
          
          <input disabled= {true} type="text" placeholder={user.email} />
          {user.isVerified
            ?<span className="email-verified">Email Verified</span>
            :<span onClick={VerifyEmail} className={showVerify?"verify-email":"check-link"}>{showVerify?"Verify Email":"Check your email for verification link"}</span>
          }
          
          
          {!edit?null:<input type="text" placeholder="New Email" onChange={(e)=>setEmail(e.target.value)}/>}
          
          
          <input disabled= {!edit?"disabled":null} type="text" placeholder={user.address} onChange={(e)=>setAddress(e.target.value)}/>
          <div className="profile-password-update">
            <input disabled= {!edit?"disabled":null} type="password" placeholder="Old password" onChange={(e)=>setOld(e.target.value)}/>
            <input disabled= {!edit?"disabled":null} type ="password" placeholder="New password" onChange={(e)=>setNew(e.target.value)}/>
          </div>
          {edit?<button onClick={((e)=>{handleForm(e); handleEdit(e) })} className="profile-update-button">Update</button>
            :null
          }
          
        </form>
      </div>
      <div className="profile-relatives-list">
        <ol>
          <p>Your Relatives:</p>
           {
        user.relatives.map((relative) => <li key={relative._id}>{relative.name}</li>)
        }
        </ol>
      </div>
      <div className="profile-billing-history">
        <h2>Billing </h2>
        <p>Next payment will be on <span>{user.nextBill}</span></p>
        
        {/*
        create portal session after test mode
        <Link to={user.portal_session}>Visit Billing Portal</Link>*/}
        {/* 
        //Tobe used when showing payment history after using webhooks in the api
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
        </div>*/}
      </div>
      <div className="logout-wrapper">
        
        <Link className ="button-link" to="/Login"> 
          <button onClick={handleLogout}>Logout</button> 
        </Link>
        
      </div>
    </div>
  )
}
export default Profile;