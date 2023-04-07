import "./pricing.css"
import {Link} from "react-router-dom"



const Pricing = ()=>{
  return (
    <>
      <div className="pricing-wrapper">
        <h1>Pricing</h1>
        <div className="price-categories">
          <div className="prices price1">
            <h2>Basic</h2>
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
    </>
  )
}
export default Pricing;
