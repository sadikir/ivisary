import "./testimony.css"

const Testimony=()=>{
  return(
    <div className="testimony-wrapper">
      <h1 className="testimony-heading">What people say</h1>
      
      <div className="testimony-boxes">
        <div className="testimony">
          <div className="testimony-profile">
            <img src="images/avataaars2.png"  className="testimony-img"/>
            <div className="testimony-info">
              <h2>Moses T.</h2>
              <p>USA</p>
            </div>
          </div>
          <div className="actual-testimony">
            <p>It's weird how long I've lived here in USA but have never thought about sponsoring any of my relatives.</p>
          </div>
        </div>
         <div className="testimony">
          <div className="testimony-profile">
            <img src="images/avataaars.png"  className="testimony-img"/>
            <div className="testimony-info">
              <h2>Rajesh K.</h2>
              <p>Canada</p>
            </div>
          </div>
          <div className="actual-testimony">
            <p>This is cool. Joined!</p>
          </div>
        </div>
        <div className="testimony">
          <div className="testimony-profile">
            <img src="images/avataaarsfemale.png"  className="testimony-img"/>
            <div className="testimony-info">
              <h2>Bridget A.</h2>
              <p>Canada</p>
            </div>
          </div>
          <div className="actual-testimony">
            <p>This is an amazing company. I think I'm not the only one who need this service</p>
          </div>
        </div>
        <div className="testimony">
          <div className="testimony-profile">
            <img src="images/avataaars3.png"  className="testimony-img"/>
            <div className="testimony-info">
              <h2>Barack P.</h2>
              <p>Canada</p>
            </div>
          </div>
          <div className="actual-testimony">
            <p>I have a big family back home. To be honest, I had never thought of sponsoring them until now.</p>
          </div>
        </div>
       
        <div className="testimony">
          <div className="testimony-profile">
            <img src="images/avataaars4.png"  className="testimony-img"/>
            <div className="testimony-info">
              <h2>Mohammed S</h2>
              <p>Australia</p>
            </div>
          </div>
          <div className="actual-testimony">
            <p>Finally I can sponsor my relatives without going crazy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimony;