import "./join.css"

import {GrDocumentUpload} from "react-icons/gr"
import {BsFillCameraFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"

const Join =()=>{
  return (
    <>
      <div className="join-wrapper">
        <h1>Join Us</h1>
        <div className="join-info">
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h5>
          <div className="account-type-wrapper">
            <label>Subscription Type:</label>
            <input disabled type="text" value="Basic-Free"/>
          </div>
          <div className="basic-info-wrapper">
            <fieldset>
              <legend >Basic Infomation</legend>
              <div className="join-names">
                <input type="text" placeholder="Your First Name"/>
                <input type="text" placeholder="Last Name"/>
              </div>
              <div className="join-credential-email">
                <input type="email" placeholder="Email e.g 'Example@website.com'" />
              </div>
              <div className="join-credential-password">
                <input type="password" placeholder="Password"/>
                <input type ="password" placeholder="Re-enter password"/>
              </div>
              <div className="join-address">
                <input type="text" placeholder="Address"/>
              </div>
              <div className="join-financial">
               <input type="text" placeholder="Yearly Income"/>
               <input type= "text" placeholder= "Employer Name"/>
              </div>
              
            </fieldset>
          </div>
          <div className="identity-wrapper">
            < fieldset>
              <legend>Identity verification</legend>
              <h4>Upload one of the following document.</h4>
              <ul>
                <li>Governement National ID</li>
                <li>Driver's License</li>
                <li>Passport</li>
              </ul>
              <form className="doc-upload">
                <label className="doc-label">
                  <input type="file"/>
                  <GrDocumentUpload/>
                  
                  <span>Upload Front</span>
                
                </label>
                <label className="doc-label">
                  <input type="file"/>
                  <GrDocumentUpload/>
                  <span>Upload Back</span>
                </label>
              </form>
              <form>
                <h4>Take a selfie now</h4>
                <p>We would like to see if your the right person in the document you uploaded above. Please take a selfie of yourself.</p>
                <label className="doc-label">
                  <input type="file"/>
                  <BsFillCameraFill/>
                  <span>Camera</span>
                </label>
              </form>
              
            </fieldset>
          </div>
          <div className="income-wrapper">
            <fieldset>
              <legend>Income Verification</legend>
              <h4>Upload the following documents to verify your income.</h4>
              <ul>
                <li>Bank Statement</li>
                <li>Recent Paystub</li>
                <li>Employment letter</li>
              </ul>
              <form>
                <label className="doc-label">
                  <input type="file"/>
                  <GrDocumentUpload/>
                  <span>Upload here</span>
                </label>
              </form>
            </fieldset>
          </div>
          <div className="relative-wrapper">
            
            <fieldset>
              <legend>Relatives Information</legend>
              <h4>We need some information about the relatives your want to sponsor.</h4>
              <form className="relatives-form">
               <div className="relative">
                <input type="text" className="relative-name" placeholder="Name of relative"/>
                <div className="relative-sub-group">
                <input type="text" className="relative-country" placeholder="country"/>
                <input type="number" className="relative-age" placeholder="Age"/>
                  </div>
               </div>
                <button>Add More <span style={{fontSize:"25px"}}>+</span></button>
              </form>
            </fieldset>
          </div>
          <div className="review-submit-button">
            <button>Review/Submit</button>
          </div>
        </div>
        <div className="join-summary">
          <h2>Review and verify information</h2>
          <div className="review-account-type">
            <label>Subscription Type:</label>
            <input disabled type="text" value="Basic-Free"/>
          </div>
          <fieldset className="sponsor-information">
            <span className="summary-edit"><AiFillEdit/>edit</span>
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
            <span className="summary-edit"><AiFillEdit/>edit</span>
            <legend>Identity Documents</legend>
            <table className="doc-table-review">
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
            </table>
          </fieldset>
          <fieldset>
            <span className="summary-edit"><AiFillEdit/>edit</span>
            <legend>Payment</legend>
            <div className="payment-label">
              <label>Base pay:</label>
              <input disabled type="text" value="$150"/>
            </div>
            <div className="review-number-of-relatives">
              <p>There is an additional $10 per additional relative. The first relative only is charged only the base pay.</p>
              <label>Relatives - <span>2:</span></label>
              <input disabled type="text" value="+$10 each"/>
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