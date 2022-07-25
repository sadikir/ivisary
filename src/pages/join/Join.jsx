import "./join.css"

import {GrDocumentUpload} from "react-icons/gr"
import {BsFillCameraFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"
import {useState, useEffect, useRef} from "react";
import {useLocation} from "react-router-dom"
import Relative from "./Relatives"
import Options from "./Options"
import axios from "axios"

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
  const [age,setAge]=useState(0)
  const [country, setCountry]= useState("")
  const [relativeName, setRelativeName]= useState("")
   const validateForm= useRef()
   const [toggleForm, setToggleForm]=useState(false);
  const checkPassAgain= useRef()
  const checkPass=useRef()
  const [passMatch, setPassMatch] = useState(-1)
  const [passCriteria, setPassCriteria]= useState(false)
  const [error, setError] = useState(false);
  const price=useRef()
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
    if(relativeName!==""&&country!==""&&age!==0){
      if(price.current===1 && relatives.length===1){
        return;
      }
      setRelatives([...relatives, {name:relativeName,country:country,age:age}])
      setRelativeName("")
      setCountry("")
      
    }
  }
 
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
    
    setError(false);
  
    try {
      await axios.post("https://api.sadikirungo.repl.co/api/upload", frontIdData)
      .then(response=>{
        return  axios.post("https://api.sadikirungo.repl.co/api/upload", backIdData);
      })
      .then(response=>{
        return  axios.post("https://api.sadikirungo.repl.co/api/upload", selfieData);
      })
      .then(response=>{
        return  axios.post("https://api.sadikirungo.repl.co/api/upload", incomeData);
      })
      
      
      // const frontIdDocument=frontIDName.current
      // const backIdDocument=backIDName.current
      // const selfieDocument=selfieName.current
      // const incomeDocument=incomeDocName.current

      
      const registerUser = await axios.post("https://api.sadikirungo.repl.co/api/auth/register", {
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
     
        const payment = await axios.post("https://api.sadikirungo.repl.co/api/payment/payment_session",{
        registeredUser:registerUser.data,
        priceId:price.current===1?"price_1LNli1KXArD8nm9Jejpu7XWj":price.current===2?"price_1LNlkaKXArD8nm9JDbvfamki":null,
        productId:price.current===1?"prod_M5xdf3OGHRLnAe":price.current===2?"prod_M5xfYmoZeiVTIE":null,
        units:relatives.length
      });
      
      
      console.log(payment.data)
      console.log(registerUser.data)
      // registerUser.data && window.location.replace(payment.url);
    } catch (err) {
      setError(true);
      console.log(err)
    }
  };
  return (
    
    <>
      <div className="join-wrapper">
        <h1>Join Us</h1>
        <form className={"join-info "+(toggleForm?"hide-forms":"display-forms")} ref={validateForm}>
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h5>
          <div className="account-type-wrapper">
            <label>Subscription Type:</label>
            <input ref={accountRef} disabled type="text" value={path===":price1"?"Basic-Free":path===":price2"?"Fast Tract - $170":undefined}/>
          </div>
          <div className="basic-info-wrapper" ref={basicRef}>
            <fieldset>
              <legend >Basic Infomation</legend>
              <div className="join-names">
                <input type="text" value ={firstName} placeholder="Your First Name" onChange={(e)=>setFirstName(e.target.value)} required/>
                <input type="text"value={lastName} placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} required/>
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
                <input ref = {checkPassAgain} type ="password" value={passAgain} placeholder="Re-enter password" onChange={(e)=>setPassAgain(e.target.value)} required/>
            <span className={"password-match "+(passMatch===1?"green-pass-warning":passMatch===0?"red-pass-warning":null)}>{passMatch===1?"passwords match":passMatch===0?"password don't match":null}</span>
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
                <p>We would like to see if your the right person in the document you uploaded above. Please take a selfie of yourself.</p>
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
              <h4>We need some information about the relatives your want to sponsor.</h4>
              <div className="relative-list">
                {relatives.map(person=><Relative key={Math.random()} relative={person}/>)}
              </div>
              <div className="relatives-form">
               <div className="relative">
                <input type="text" value={relativeName} onChange={(e)=>setRelativeName(e.target.value)} className="relative-name" placeholder="Name of relative"/>
                <div className="relative-sub-group">
                <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} className="relative-country" placeholder="country"/>
                  {/*<input type="date" placeholder="DOB" onChange={(e)=>setAge(e.target.value)} className="relative-age" placeholder="Age" required/>*/
                  }
                  <select name="ages" className="relative-age" onChange={(e)=>setAge(e.target.value)} >
                    <option value="" disabled selected>Age</option>
                    <Options value="0-2" name="0-2"/>
                    <Options value="2-12" name="2-12"/>
                    <Options value="12-18" name="12-18"/>
                    <Options value="18-65" name="18-65"/>
                    <Options value="65-100+" name="65-100+"/>
                  </select>
                  </div>
               </div>
                <button onClick={(e)=>addRelative(e)}>Add <span style={{fontSize:"25px"}}>+</span></button>
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
            <label>Subscription Type:</label>
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
          <fieldset>
            <span className="summary-edit" onClick={(e)=>{togglePreview(e);identityToggle()}}><AiFillEdit/>edit</span>
            <legend>Identity Documents</legend>
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
          <fieldset>
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
          <button onClick={(e)=>handleSubmit(e)} className="review-submit">Submit & Pay</button>
        </div>
         
      </div>
    </>
  )
}
export default Join;
