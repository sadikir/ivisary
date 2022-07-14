import "./steps.css"
import {RiNumber1, RiNumber2, RiNumber3} from "react-icons/ri"

const Steps=()=>{
  return(
    
    <div className="step-wrapper">
     <h1 className="how">How it works</h1>
     <div className="steps">
      <div className="step1">
        <RiNumber1 className="stepIcon"/>
        <h2>Join us</h2>
        <p>Many are accepting our call to action. Sign up </p>
      </div>
      <div className="step2">
        <RiNumber2 className="stepIcon"/>
        <h2>Sponsor</h2>
        <p>We will handle all the financial and legal burden for you</p>
      </div>
      <div className="step3">
        <RiNumber3 className="stepIcon"/>
        <h2>Reunite</h2>
        <p>Reunite and watch your family transform to new life.</p>
      </div>
     </div>
    </div>
  )
}
export default Steps;