import "./serving.css"


const Serving = ()=>{
  return (
    <div className="serving-wrapper">
      <h1>Serving immigrants in...</h1>
     <div className="country-group">
      <div className="served-country">
        <img src="images/usaflag.png"/>
        <h2>United States</h2>
      </div>
      <div className="served-country">
        <img src="images/canadaflag.png"/>
        <h2>Canada</h2>
      </div>
      <div className="served-country">
        <img src="images/auflag.png"/>
        <h2>Australia</h2>
      </div>
      <div className="served-country">
        <img src="images/ukflag.png"/>
        <h2>United Kingdom</h2>
      </div>
      <div className="served-country">
        <img src="images/germanflag.png"/>
        <h2>German</h2>
      </div>
       <div className="served-country">
        <p>And more...</p>
        <h1>+</h1>
        
      </div>
     </div>
    </div>
  )
}
export default Serving;