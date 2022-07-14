import "./statSection.css"
import {RiMoneyDollarCircleLine} from "react-icons/ri"
import {BiStats} from "react-icons/bi"
import {FaHandshake} from "react-icons/fa"

const Stats = ()=>{
  return (
    <div className="stat-box">
      <div className="stats stat1">
        <RiMoneyDollarCircleLine className="statIcon"/>
        <h4>Get Up to</h4>
        <h1>$15,000<span className="plus">+</span></h1>
        <h4>to cover family</h4>
        <h4>Sponsorship costs</h4>
      </div>
      <div className="stats stat2">
        <BiStats className="statIcon"/>
        <h4>There are</h4>
        <h1>40million<span className="plus">+</span></h1>
        <h4>USA immigrants</h4>
        <h4></h4>
      </div>
      <div className="stats stat3">
        <FaHandshake className="statIcon"/>
        <h4>Guaranteed</h4>
        <h1>99%</h1>
        <h4>Customer</h4>
        <h4>Satisfaction.</h4>
      </div>
    </div>
  )
}
export default Stats;