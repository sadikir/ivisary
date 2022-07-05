import "./pricing.css"



const Pricing = ()=>{
  return (
    <>
      <div className="pricing-wrapper">
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
            <button>Coming soon!</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Pricing;