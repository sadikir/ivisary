
import Intro from "../../components/introSection/Intro"
import HomeAbout from "../../components/homeAbout/HomeAbout"
import Stats from "../../components/statSection/Stats"
import Steps from "../../components/steps/Steps"
import Testimony from "../../components/testimonials/Testimony"
import Serving from "../../components/serving/Serving"
import Team from "../../components/team/Team"
import HomeContact from "../../components/homeContact/HomeContact"
import Pricing from "../../components/pricing/Pricing"
import {useEffect} from "react";


const Home=()=>{
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"})
  },[])
  return(
    <>
      <Intro/>
      <Stats/>
      <HomeAbout/>
      <Steps/>
      <Testimony/>
      <Serving/>
      <Pricing/>
      
     
      <HomeContact/>
  
    </>
  )
}
export default Home;