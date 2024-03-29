import "./join.css"

import {GrDocumentUpload} from "react-icons/gr"
import {BsFillCameraFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"
import {useState, useEffect, useRef, useContext} from "react";
import {useLocation,Link} from "react-router-dom"
import Relative from "./Relatives"
import Options from "./Options"
import axios from "axios"
import {Context} from "../../context/Context"
import {SERVER_URL} from "../../App.jsx"

const Join =()=>{
  

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail] = useState("");
  const [passWord, setPassWord]= useState("");
  const [passAgain, setPassAgain]=useState("")
  const accountRef=useRef("");
  const [phone, setPhone]=useState("");
  const [address, setAddress]=useState("");
  const [income, setIncome]=useState("")
  const [employer, setEmployer]=useState("");
  const [frontID, setFrontID] = useState(null)
  const [backID, setBackID] = useState(null);
  const [selfie, setSelfie]=useState(null);
  const [incomeDoc, setIncomeDoc]= useState(null)
  const frontIDName = useRef("")
  const backIDName = useRef("")
  const selfieName = useRef("")
  const incomeDocName = useRef("")
  const [relatives, setRelatives]= useState([])
  const basicRef=useRef()
  const identityRef=useRef()
  const incomeRef=useRef()
  const joinRef=useRef();
  const ageRef = useRef()
  const [country, setCountry]= useState("")
  const [relativeName, setRelativeName]= useState("")
   const validateForm= useRef()
   const [toggleForm, setToggleForm]=useState(false);
  const checkPassAgain= useRef()
  const checkPass=useRef()
  const [passMatch, setPassMatch] = useState(-1)
  const [passCriteria, setPassCriteria]= useState(false)
  const [error, setError]= useState(false)
  const [relativeForm, setRelativeForm]=useState(true)
  const [toggleRelativeNameWarning, setToggleRelativeNameWarning]= useState(false)
  const [toggleCountryWarning, setToggleCountryWarning] = useState(false)
  
  const price=useRef()
  
  const {dispatch, isFetching} = useContext(Context)
//check if passwords match
  useEffect(()=>{
    if(passWord!=="" && document.activeElement===checkPassAgain.current){
      if(passWord===passAgain){
        setPassMatch(1)
      }else{
        setPassMatch(0)
      }
    }else{
      setPassMatch(-1)
    }
    if(document.activeElement===checkPass.current && passAgain!==""){
      setPassAgain("")
    }
    if(document.activeElement===checkPass.current){
      if(passWord.length<8){
        setPassCriteria(true)
      }else{
        setPassCriteria(false)
      }
    }else{
      setPassCriteria(false)
    }
  },[passWord,passAgain])


  //scroll window to top when visited
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  const Location= useLocation()
  const path = location.pathname.split("/")[2];
  
  const accountType = accountRef.current.value
  price.current=path===":price1"?1:path===":price2"?2:null

 
  //check if form is filled out and toggle the form with the preview.

  const togglePreview=(e)=>{
  e.preventDefault()
    
    if(firstName!=="" && lastName!=="" &&email!== ""&&passWord.length>=8 &&passWord===passAgain&& address!==""&&income!==""&&employer!==""&&frontID!==null&&backID!==null&&selfie!==null&incomeDoc!==null&relatives.length!==0){
      if(toggleForm===false){
        setToggleForm(true)
      }else{
        setToggleForm(false)
        
      }
    }
  }
  // scroll sections into view.
  const basicToggle=(e)=>{
    setTimeout(()=>{
      basicRef.current.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
    },100)
  }
  const identityToggle=()=>{
    setTimeout(()=>{
      identityRef.current.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
    },100)
      
    
  }
  const incomeToggle=(e)=>{
    setTimeout(()=>{
      incomeRef.current.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
    },100)
  }

  const joinToggle=()=>{
    setTimeout(()=>{
      joinRef.current.scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
    },50)
  }


  //adding relative to list of relatives
  const addRelative=(e)=>{
    e.preventDefault();
    ageRef.current= e.target.value
     console.log("chenged")
    if(relativeName===""&&country!==""){
      setToggleRelativeNameWarning(true)
      setToggleCountryWarning(false)
      console.log("name empty")
      e.target.selectedIndex = 0
    }else if(relativeName!==""&&country===""){
      setToggleRelativeNameWarning(false)
      setToggleCountryWarning(true)
      console.log("country empty")
      e.target.selectedIndex = 0
    }else if(relativeName===""&&country===""){
      setToggleRelativeNameWarning(true)
      setToggleCountryWarning(true)
      console.log("name and country empty")
      e.target.selectedIndex = 0
    }else{
      if(relativeName!==""&&country!==""){
      setToggleRelativeNameWarning(false)
      setToggleCountryWarning(false)
      setRelatives([...relatives, {name:relativeName,country:country,age:ageRef.current}])
      e.target.selectedIndex = 0
      if(price.current===1 ){
        setRelativeForm(false)
      }
       }
    }
    
  }
  
//hide relatives form warnings when user start typing in the forms
  useEffect(()=>{
    setToggleRelativeNameWarning(false)
    setToggleCountryWarning(false)
  },[relativeName,country])
  //Capturing file and setting file names
  useEffect(()=>{
    if(frontID){
      
      window.frontIdData= new FormData()
     frontIDName.current=Date.now()+frontID.name;
      frontIdData.append("name", frontIDName.current)
      frontIdData.append("file",frontID)
      // code for console logging form data values
      // for (var key of frontIdData.entries()) {
      //   console.log(key[0] + ', ' + key[1]);
      // }
    }
    if(backID){
      window.backIdData= new FormData()
      backIDName.current=Date.now()+backID.name;
      backIdData.append("name", backIDName.current)
      backIdData.append("file",backID)
      
    }
    if(selfie){
      window.selfieData= new FormData()
      selfieName.current=Date.now()+selfie.name;
      selfieData.append("name", selfieName.current)
      selfieData.append("file",selfie)
      
    }
    if(incomeDoc){
      window.incomeData= new FormData()
      incomeDocName.current=Date.now()+incomeDoc.name;
      incomeData.append("name", incomeDocName.current)
      incomeData.append("file",incomeDoc)
      
    }
  },[frontID,backID,selfie,incomeDoc])


  //Submitting form and creating a user
 

  const handleSubmit = async (e) => {
    
   setError(false)
    dispatch({type:"LOGIN_START"})
  
    try {
      await axios.post(`${SERVER_URL}/api/upload`, frontIdData)
      .then(response=>{
        return  axios.post(`${SERVER_URL}/api/upload`, backIdData);
      })
      .then(response=>{
        return  axios.post(`${SERVER_URL}/api/upload`, selfieData);
      })
      .then(response=>{
        return  axios.post(`${SERVER_URL}/api/upload`, incomeData);
      })
      
      
      // const frontIdDocument=frontIDName.current
      // const backIdDocument=backIDName.current
      // const selfieDocument=selfieName.current
      // const incomeDocument=incomeDocName.current

      
      const registerUser = await axios.post(`${SERVER_URL}/api/auth/register`, {
        firstName,
        lastName,
        email,
        phone,
        address,
        passWord,
        accountType,
        employer,
        income,
        relatives,
        price,
        // frontIdDocument,
        // backIdDocument,
        // selfieDocument,
        // incomeDocument
        frontIdDocument:frontIDName.current,
        backIdDocument:backIDName.current,
        selfieDocument:selfieName.current,
        incomeDocument:incomeDocName.current
      });


      //payment intergration.
     
        const payment = await axios.post(`${SERVER_URL}/api/payment/payment_session`,{
        registeredUser:registerUser.data.userId,
        userEmail:registerUser.data.email,
        priceId:price.current===1?"price_1LVOUjKXArD8nm9JzGCbvB8w":price.current===2?"price_1LVOUuKXArD8nm9Jve5KxPLI":null,
        productId:price.current===1?"prod_MDqB85y9xR85fj":price.current===2?"prod_MDqBq2IHtY1xfY":null,
        units:relatives.length
      });
      
      
      
      payment&& localStorage.setItem("sessionId",payment.data.sessionId)
      if(payment){
        dispatch({type:"LOGIN_SUCCESS",payload:null})
        console.log(payment.url)
        window.location.href= payment.data.url
      };
    } catch (err) {
      setError(true)
      dispatch({type:"LOGIN_FAILURE"})
      setTimeout(()=>{setError(false)},10000)
      console.log(err)
    }
  };
  return (
    
    <>
      <div className="join-wrapper">
        <h1>Join Us</h1>
        <form className={"join-info "+(toggleForm?"hide-forms":"display-forms")} ref={validateForm}>
          <h5>The first step you can take is joining us by subscribing to one of our plans. We will make sure we provide exceptional service to you. Trust us with your family sponsorship needs today!</h5>
          <div className="account-type-wrapper">
            <label>Subscription:</label>
            <input ref={accountRef} disabled type="text" value={path===":price1"?"Basic Sponsorship - $25/month":path===":price2"?"Fast Sponsorship - $170/month":""}/>
          </div>
          <div className="basic-info-wrapper" ref={basicRef}>
            <fieldset>
              <legend >Basic Infomation</legend>
              <div className="join-names">
                <input type="text"  placeholder="Your First Name" onChange={(e)=>setFirstName(e.target.value)} required/>
                <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} required/>
              </div>
              <div className="join-credential-email">
                <input type="email" placeholder="Email e.g 'Example@website.com'" onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              <div className="join-phone">
                <input type="tel" placeholder="Phone number" onChange={(e)=>setPhone(e.target.value)} required/>
              </div>
              <div className={"password-criteria "+(passCriteria?"display-password-creteria":"hide-password-criteria")}>
                <p>Password should be 8 characters long. Mix numbers, alphabetical letters and special character like /?.&$</p>
              </div>
              <div className="join-credential-password">
                <input ref = {checkPass} type="password" placeholder="Password" onChange={(e)=>setPassWord(e.target.value)} required/>
                <input ref = {checkPassAgain} type ="password" placeholder="Re-enter password" onChange={(e)=>setPassAgain(e.target.value)} required/>
            <span className={"password-match "+(passMatch===1?"green-pass-warning":passMatch===0?"red-pass-warning":undefined)}>{passMatch===1?"passwords match":passMatch===0?"password don't match":undefined}</span>
              </div>
              <div className="join-address">
                <input type="text" placeholder="City, Country" onChange={(e)=>setAddress(e.target.value)} required/>
              </div>
              <div className="join-financial">
               <input type="text" placeholder="Yearly Income" onChange={(e)=>setIncome(e.target.value)} required/>
               <input type= "text" placeholder= "Employer Name" onChange={(e)=>setEmployer(e.target.value)} required/>
              </div>
              
            </fieldset>
          </div>
          <div className="identity-wrapper" ref={identityRef}>
            < fieldset>
              <legend>Identity verification</legend>
              <h4>Upload one of the following document.</h4>
              <ul>
                <li>Governement National ID</li>
                <li>Driver's License</li>
                <li>Passport</li>
              </ul>
              <div className="doc-upload">
                <label className={"doc-label "+ (frontID?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>{setFrontID(e.target.files[0])}} required/>
                  <GrDocumentUpload/>
                  
                  <span>{frontID?"File ready!":"Upload Front"}</span>
                
                </label>
                <label className={"doc-label "+ (backID?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>setBackID(e.target.files[0])} required/>
                  <GrDocumentUpload/>
                  <span>{backID?"File ready!":"Upload Back"}</span>
                </label>
              </div>
              <div>
                <h4>Take a selfie now</h4>
                <p>We would like to see if your the person in the document you uploaded above. Please take a selfie of yourself.</p>
                <label className={"doc-label "+ (selfie?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>setSelfie(e.target.files[0])}/>
                  <BsFillCameraFill/>
                  <span>{selfie?"File ready!":"Camera"}</span>
                </label>
              </div>
              
            </fieldset>
          </div>
          <div className="income-wrapper" ref={incomeRef}>
            <fieldset>
              <legend>Income Verification</legend>
              <h4>Upload the following documents to verify your income.</h4>
              <ul>
                <li>Bank Statement</li>
                <li>Recent Paystub</li>
                <li>Employment letter</li>
              </ul>
              <div>
                <label className={"doc-label "+ (incomeDoc?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>setIncomeDoc(e.target.files[0])} required/>
                  <GrDocumentUpload/>
                  <span>{incomeDoc?"File ready!":"Upload here"}</span>
                </label>
              </div>
            </fieldset>
          </div>
          <div className="relative-wrapper" >
            
            <fieldset>
              <legend>Relatives Information</legend>
              <h4>Please add all the relatives you want to sponsor</h4>
              <div className="relative-list">
                {relatives.map(person=><Relative key={Math.random()} relative={person}/>)}
              </div>
              <div className="relatives-form">
              {relativeForm
               
                ?<div className="relative">  
                  <div className="relative-input">
                    <input type="text"  onChange={(e)=>setRelativeName(e.target.value)} className="relative-name" placeholder="Name of relative"/>
                    <p className={"relative-form-warning " +(toggleRelativeNameWarning?"show-relative-form-warning":"hide-relative-form-warning")}>Please fill this first</p>
                  </div>
                 <div className="relative-sub-group">
                   
                  <div>
                    <input type="text"  onChange={(e)=>setCountry(e.target.value)} className="relative-country" placeholder="country"/>
                    <p  className={"relative-form-warning "+(toggleCountryWarning?"show-relative-form-warning":"hide-relative-form-warning")}>Please fill this first</p>
                  </div>
                  
                  <div>
                     <select name="ages" ref ={ageRef} className="relative-age" onChange={(e)=>{addRelative(e)}} >
                    <option value="" disabled selected>Age</option>
                    <Options value="0-2" name="0-2"/>
                    <Options value="2-12" name="2-12"/>
                    <Options value="12-18" name="12-18"/>
                    <Options value="18-65" name="18-65"/>
                    <Options value="65-100+" name="65-100+"/>
                  </select>
                  </div>
                  </div>  
               </div>
                :<p className="relatives-addition-warning">You can only add 1 relative with this plan 
                <Link className= "relative-upgrade-link" to="/about#pricing">upgrade plan</Link> 
                  to add more relatives
                </p>}
              </div>
            </fieldset>
          </div>
          <div className="review-submit-button">
            <button type="submit" onClick={(e)=>{togglePreview(e); joinToggle()}}>Review/Submit</button>
          </div>
        </form>



        {/* The summary sec*/}
        <div className={"join-summary "+ (toggleForm? "display-summary":"hide-summary")} ref={joinRef}>
          <h2>Review and verify information</h2>
          <div className="review-account-type">
            <label>Subscription:</label>
            <input disabled type="text" value={" "+accountType}/>
          </div>
          <fieldset className="sponsor-information">
            <span className="summary-edit" onClick={(e)=>{togglePreview(e); basicToggle()}}><AiFillEdit/>edit</span>
            <legend>About you</legend>
            <div>
              <p>First Name:<span>{firstName}</span></p>
              <p>Last Name:<span>{lastName}</span></p>
            </div>
            <p>Email:<span>{email}</span></p>
            <p>Phone Number: <span>{phone}</span></p>
            <p>Address: <span>{address}</span></p>
          </fieldset>
          <fieldset className = "identity-docs">
            <span className="summary-edit" onClick={(e)=>{togglePreview(e);identityToggle()}}><AiFillEdit/>edit</span>
            <legend >Identity Documents</legend>
            <table className="doc-table-review">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>Front of ID:</td>
                <td>{frontID?frontID.name:null}</td>
              </tr>
                <tr>
                <td>Back of ID:</td>
                <td>{backID?backID.name:null}</td>
              </tr>
              <tr>
                <td>Photo:</td>
                <td>{selfie?selfie.name:null}</td>
              </tr>
              <tr>
                <td>Income file:</td>
                <td>{incomeDoc?incomeDoc.name:null }</td>
              </tr>
              </tbody>
              
            </table>
          </fieldset>
          <fieldset className="payment-summary">
            <span className="summary-edit" onClick={(e)=>{togglePreview(e); incomeToggle()}}><AiFillEdit/>edit</span>
            <legend>Payment</legend>
            {price.current ===2&&
              <div className="payment-label">
                <label>Base pay:</label>
                <input disabled type="text" value="$170/month"/>
            </div>
            }
            
            <div className="review-number-of-relatives">
              {price.current===1?
                <div>
                  <div className="summary-total">
                    <label>Total Payment:</label>
                    <input disabled type="text" value="$25/month"/>
            </div>
                </div>
              :price.current===2?
                <div>
                  <p>There is an additional USD $25 per additional relative. The first relative is charged only the base pay.</p>
                  <label>Relatives - <span>{relatives.length}:</span></label>
                 <input disabled type="text" value={price.current===1?"Pay $25 only":price.current===2&&relatives.length===1?"$170 only": relatives.length>=2?"+$25 each additional relative":null}/>
                  <div className="summary-total">
                    <label>Total Payment:</label>
                    <input disabled type="text" value={"$"+(((relatives.length-1)*25)+170)+"/month"}/>
            </div>
                </div>
            :null
              }
              </div>
          </fieldset>
          <span className={"user-exist-warning " + (error?"show-user-exist-warning":"hide-user-exist-warning") }>user exists or something else went wrong</span>
          <button onClick={(e)=>handleSubmit(e)} className="review-submit">Submit & Pay
          {isFetching
             ?<div className="joinloadingio-spinner-eclipse-ujuntois5rk">
               <div className="joinldio-yl1ob84cjcf">
                <div></div>
              </div>
             </div>
            :null}
          </button>
        </div>
         
      </div>
    </>
  )
}
export default Join;
