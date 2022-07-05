import "./homeContact.css"


const HomeContact=()=>{
  return(
    <div className="home-contact-wrapper">
      <h1>Contact Us</h1>
      <div className="form-wrapper">
        <form className="home-contact-form">
          <div className="basic-info">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="email" placeholder="Email"/>
            <input type="tel" placeholder="Phone Number"/>
          </div>
          <div className="address-wrapper">
            <input type="text" placeholder="City,Country"/>
          </div>
          <div className="message-wrapper">
            <textarea placeholder="Type your message here"></textarea>
          </div>
          <button className="home-submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
export default HomeContact;