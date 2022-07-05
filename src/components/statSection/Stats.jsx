import "./statSection.css"
import {RiMoneyDollarCircleLine} from "react-icons/ri"
import {BiStats} from "react-icons/bi"
import {IoIosPeople} from "react-icons/io"

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
        <h4>immigrants in</h4>
        <h4>USA only</h4>
      </div>
      <div className="stats stat3">
        <IoIosPeople className="statIcon"/>
        <h4>There are</h4>
        <h1>250Million<span className="plus">+</span></h1>
        <h4>immigrants</h4>
        <h4>Worldwide.</h4>
      </div>
    </div>
  )
}
export default Stats;