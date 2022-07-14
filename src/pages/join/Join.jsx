import "./join.css"

import {GrDocumentUpload} from "react-icons/gr"
import {BsFillCameraFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"
import {useState, useEffect, useRef} from "react";
import {useLocation} from "react-router-dom"
import Relative from "./Relatives"
import Options from "./Options"

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
  const frontIDName = useRef(null)
  const backIDName = useRef(null)
  const selfieName = useRef(null)
  const incomeDocName = useRef(null)
  const [relatives, setRelatives]= useState([{name:"",country:"",age:undefined}])
  const basicRef=useRef()
  const identityRef=useRef()
  const incomeRef=useRef()
  const joinRef=useRef();
  const [age,setAge]=useState(0)
  const [country, setCountry]= useState("")
  const [relativeName, setRelativeName]= useState("")
   const [validateForm, setValidateForm]=useState(false)
   const [toggleForm, setToggleForm]=useState(false);


  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"});
  },[])
  const Location= useLocation()
  const path = location.pathname.split("/")[2];
  const accountType = accountRef.current.value
  

 
  //chack if form is filled out and toggle the form with the preview.
  const validForm=()=>{
    if(firstName&&lastName){
      setValidateForm(true)
    }else{
      setValidateForm(false)
    }
  }
 
  const togglePreview=()=>{
    if (toggleForm){
      if(validateForm){
        setToggleForm(false)
      }else{
      setToggleForm(true)
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
      setRelatives([...relatives, {name:relativeName,country:country,age:age}])
      setRelativeName("")
      setCountry("")
      setAge(0)
    }
  }
 
  //Capturing file and setting file names
  useEffect(()=>{
    if(frontID){
      
      const frontIdData= new FormData()
     frontIDName.current=Date.now()+frontID.name;
      frontIdData.append("name", frontIDName.current)
      frontIdData.append("file",frontID)
      // code for console logging form data values
      // for (var key of frontIdData.entries()) {
      //   console.log(key[0] + ', ' + key[1]);
      // }
    }
    if(backID){
      const backIdData= new FormData()
      backIDName.current=Date.now()+backID.name;
      backIdData.append("name", backIDName.current)
      backIdData.append("file",backID)
      
    }
    if(selfie){
      const selfieData= new FormData()
      selfieName.current=Date.now()+selfie.name;
      selfieData.append("name", selfieName.current)
      selfieData.append("file",selfie)
      
    }
    if(incomeDoc){
      const incomeData= new FormData()
      incomeDocName.current=Date.now()+incomeDoc.name;
      incomeData.append("name", incomeDocName.current)
      incomeData.append("file",incomeDoc)
      
    }
  },[frontID,backID,selfie,incomeDoc])
  
  return (
    
    <>
      <div className="join-wrapper">
        <h1>Join Us</h1>
        <div className={"join-info "+(toggleForm?"hide-forms":"display-forms")}>
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h5>
          <div className="account-type-wrapper">
            <label>Subscription Type:</label>
            <input ref={accountRef} disabled type="text" value={path===":price1"?"Basic-Free":path===":price2"?"Fast Tract - $150":undefined}/>
          </div>
          <div className="basic-info-wrapper" ref={basicRef}>
            <fieldset>
              <legend >Basic Infomation</legend>
              <div className="join-names">
                <input type="text" value ={firstName} placeholder="Your First Name" onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
              </div>
              <div className="join-credential-email">
                <input type="email" placeholder="Email e.g 'Example@website.com'" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="join-phone">
                <input type="tel" placeholder="Phone number" onChange={(e)=>setPhone(e.target.value)}/>
              </div>
              <div className="join-credential-password">
                <input type="password" placeholder="Password" onChange={(e)=>setPassWord(e.target.value)}/>
                <input type ="password" placeholder="Re-enter password" onChange={(e)=>setPassAgain(e.target.value)}/>
              </div>
              <div className="join-address">
                <input type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
              </div>
              <div className="join-financial">
               <input type="text" placeholder="Yearly Income" onChange={(e)=>setIncome(e.target.value)}/>
               <input type= "text" placeholder= "Employer Name" onChange={(e)=>setEmployer(e.target.value)}/>
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
              <form className="doc-upload">
                <label className={"doc-label "+ (frontID?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>{setFrontID(e.target.files[0])}}/>
                  <GrDocumentUpload/>
                  
                  <span>{frontID?"Upload done!":"Upload Front"}</span>
                
                </label>
                <label className={"doc-label "+ (backID?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>setBackID(e.target.files[0])} />
                  <GrDocumentUpload/>
                  <span>{backID?"Upload done":"Upload Back"}</span>
                </label>
              </form>
              <form>
                <h4>Take a selfie now</h4>
                <p>We would like to see if your the right person in the document you uploaded above. Please take a selfie of yourself.</p>
                <label className={"doc-label "+ (selfie?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>setSelfie(e.target.files[0])}/>
                  <BsFillCameraFill/>
                  <span>{selfie?"Upload done!":"Camera"}</span>
                </label>
              </form>
              
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
              <form>
                <label className={"doc-label "+ (incomeDoc?"upload-lebel ":"")}>
                  <input type="file" onChange={(e)=>setIncomeDoc(e.target.files[0])}/>
                  <GrDocumentUpload/>
                  <span>{incomeDoc?"Upload done!":"Upload here"}</span>
                </label>
              </form>
            </fieldset>
          </div>
          <div className="relative-wrapper" >
            
            <fieldset>
              <legend>Relatives Information</legend>
              <h4>We need some information about the relatives your want to sponsor.</h4>
              <div className="relative-list">
                {relatives.map(person=><Relative key={Math.random()} relative={person}/>)}
              </div>
              <form className="relatives-form">
               <div className="relative">
                <input type="text" value={relativeName} onChange={(e)=>setRelativeName(e.target.value)} className="relative-name" placeholder="Name of relative" required/>
                <div className="relative-sub-group">
                <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} className="relative-country" placeholder="country" required/>
                  {/*<input type="date" placeholder="DOB" onChange={(e)=>setAge(e.target.value)} className="relative-age" placeholder="Age" required/>*/
                  }
                  <select name="ages" className="relative-age" onChange={(e)=>setAge(e.target.value)}>
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
              </form>
            </fieldset>
          </div>
          <div className="review-submit-button">
            <button onClick={()=>{validForm(); togglePreview(); joinToggle()}}>Review/Submit</button>
          </div>
        </div>



        {/* The summary sec*/}
        <div className={"join-summary "+ (toggleForm? "display-summary":"hide-summary")} ref={joinRef}>
          <h2>Review and verify information</h2>
          <div className="review-account-type">
            <label>Subscription Type:</label>
            <input disabled type="text" value="Basic-Free"/>
          </div>
          <fieldset className="sponsor-information">
            <span className="summary-edit" onClick={()=>{togglePreview(); basicToggle()}}><AiFillEdit/>edit</span>
            <legend>About you</legend>
            <div>
              <p>First Name:<span>Sadiki</span></p>
              <p>Last Name:<span>Rungo</span></p>
            </div>
            <p>Email:<span>example@gmail.com</span></p>
            <p>Phone Number: <span>0000000000</span></p>
            <p>Address: <span>12214 119 Avenue Nw Edmonton Ab, Ca</span></p>
          </fieldset>
          <fieldset>
            <span className="summary-edit" onClick={()=>{togglePreview();identityToggle()}}><AiFillEdit/>edit</span>
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
                <td>ID document:</td>
                <td>Driver.pdf</td>
              </tr>
              <tr>
                <td>Photo:</td>
                <td>selfie.jpgf</td>
              </tr>
              <tr>
                <td>Income file:</td>
                <td>Income.pdf</td>
              </tr>
              </tbody>
              
            </table>
          </fieldset>
          <fieldset>
            <span className="summary-edit" onClick={()=>{togglePreview(); incomeToggle()}}><AiFillEdit/>edit</span>
            <legend>Payment</legend>
            <div className="payment-label">
              <label>Base pay:</label>
              <input disabled type="text" value="$150"/>
            </div>
            <div className="review-number-of-relatives">
              <p>There is an additional $8 per additional relative. The first relative only is charged only the base pay.</p>
              <label>Relatives - <span>2:</span></label>
              <input disabled type="text" value="+$15 each"/>
            </div>
            <div className="summary-total">
              <label>Total Payment:</label>
              <input disabled type="text" value="$170/month"/>
            </div>
          </fieldset>
          <button className="review-submit">Submit & Pay</button>
        </div>
         
      </div>
    </>
  )
}
export default Join;