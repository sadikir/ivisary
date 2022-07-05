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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>
      <div className="step2">
        <RiNumber2 className="stepIcon"/>
        <h2>Sponsor</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>
      <div className="step3">
        <RiNumber3 className="stepIcon"/>
        <h2>Reunite</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      </div>
     </div>
    </div>
  )
}
export default Steps;