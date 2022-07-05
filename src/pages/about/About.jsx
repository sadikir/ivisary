import "./about.css"
import  "../../components/pricing/pricing.css"
import AboutVideo from "../../../public/videos/video.mp4"

import Team from "../../components/team/Team"
import HomeContact from "../../components/homeContact/HomeContact"
import Steps from "../../components/steps/Steps"
import {useLocation} from "react-router-dom"
import {useEffect} from "react";


const About =()=>{
  const location = useLocation();
  console.log(location)
  useEffect(()=> {
            if (location.hash==="#pricing") {
                let elem = document.getElementById("pricing")
                if (elem) {
                    elem.scrollIntoView({behavior: "smooth"})
                }
            } else {
            window.scrollTo({top:0,left:0, behavior: "smooth"})
            }
    }, [location,])
  return(
    <>
      
      <div className="about-video">
        <h1>About Us</h1>
        <div className="video-wrapper">
          <div className="video">
            <video controls poster="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">
            <source src={AboutVideo} type="video/mp4"/>
            
            </video>
          </div>
          <div className ="video-info">
            <h1>We reunite families one at a time</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
          </div>
        </div>
      </div>
      <Steps/>

      
      {/* Pricing component copied the whole code here to make scroll work*/}
        <div className="pricing-wrapper" id={"pricing"}>
        <h1>Pricing</h1>
        <div className="price-categories">
          <div className="prices price1">
            <h2>Basic-Free</h2>
            <h1>$0</h1>
            <ul>
              <li>Lotto Sponsorship</li>
              <li>No fees</li>
              <li>Not guarantee</li>
              
            </ul>
            <button>Subscribe</button>
          </div>
          <div className="prices price2">
            <span className="price-recomend">Popular</span>
            <h2>Fast Track</h2>
            <h1>$150<span>/Monthly</span></h1>
            <ul>
              <li>Guaranteed</li>
              <li>No hidden fees</li>
              <li>Plus $8/additional person</li>
              <li>Immediate processing</li>
              <li>Recommended</li>
            </ul>
            <button>Subscribe</button>
          </div>
          <div className="prices price3">
            <h2>Immigration Loans</h2>
            <h1>$Custom</h1>
            <ul>
              <li>Get desired loan</li>
              <li>5 year term max</li>
              <li>Low fixed rates</li>
            </ul>
            <button>Coming Soon!</button>
          </div>
        </div>
      </div>
      {/* End Pricing component copied the whole code here to make scroll work*/}
      
      <Team/>
      <HomeContact/>
      
    </>
  )
}
export default About;