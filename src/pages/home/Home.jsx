
import Intro from "../../components/introSection/Intro"
import HomeAbout from "../../components/homeAbout/HomeAbout"
import Stats from "../../components/statSection/Stats"
import Steps from "../../components/steps/Steps"
import Testimony from "../../components/testimonials/Testimony"
import Serving from "../../components/serving/Serving"
import Team from "../../components/team/Team"
import HomeBlog from "../../components/homeBlog/HomeBlog"
import HomeContact from "../../components/homeContact/HomeContact"
import Pricing from "../../components/pricing/Pricing"


const Home=()=>{
  return(
    <>
      <Intro/>
      <Stats/>
      <HomeAbout/>
      <Steps/>
      <Testimony/>
      <Serving/>
      <Pricing/>
      <Team/>
      <HomeBlog/>
      <HomeContact/>
  
    </>
  )
}
export default Home;