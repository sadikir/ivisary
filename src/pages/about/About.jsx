import "./about.css"
import  "../../components/pricing/pricing.css"
import AboutVideo from "../../../public/videos/video.mp4"

import Team from "../../components/team/Team"
import HomeContact from "../../components/homeContact/HomeContact"
import Steps from "../../components/steps/Steps"
import {useLocation, Link} from "react-router-dom"
import {useEffect} from "react";


const About =()=>{
  const location = useLocation();
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
            <video controls poster="/images/poster.jpg">
            <source src={AboutVideo} type="video/mp4"/>
            
            </video>
          </div>
          <div className ="video-info">
            <h1>#1 Platform for family Sponsorships</h1>
            <p>The company started after our founders saw that immigrants were facing financial and legal challenges when sponsoring their relatives. iVISARY is seeking to solve these challenges by providing the required financial and legal support immigrants may need. We operate in Canada, USA, EU and Australia.</p>
            <p>With membership based model we guarantee reliable and fast family sponsorhips. Trust us with your sponsoring needs. Why don't you make it a goal to sponsor one of your brothers or sisters and others today? Join us.</p>
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
            <h1>USD $25<span>/Monthly</span></h1>
            <ul>
              <li>One relative only</li>
              <li>Lottery sponsorship only</li>
              <li>Slow processing</li>
              
            </ul>
            <Link to="/join/:price1">
              <button>Subscribe</button>
            </Link>
          </div>
          <div className="prices price2">
            <span className="price-recomend">Popular</span>
            <h2>Fast Track</h2>
            <h1>USD $170<span>/Monthly</span></h1>
            <ul>
              <li>$25/additional person</li>
              <li>Up to 7 relatives</li>
               <li>2-4 years process</li>
              <li>Fast & Guaranteed</li>
              <li>Recommended</li>
            </ul>
            <Link to="/join/:price2">
              <button>Subscribe</button>
            </Link>
          </div>
          <div className="prices price3">
            <h2>Immigration Loans</h2>
            <h1>$Custom</h1>
            <ul>
              <li>Get desired loan</li>
              <li>5 year loan term</li>
              <li>Low fixed rates</li>
            </ul>
            <button type="button" style={{cursor:"not-allowed"}}disabled>Coming soon!</button>
          </div>
        </div>
      </div>
      {/* End Pricing component copied the whole code here to make scroll work*/}
      
      
      <HomeContact/>
      
    </>
  )
}
export default About;