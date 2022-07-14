import "./join.css"
const Relative=({relative})=>{
  return(
    <>
      <div className="relative-list-wrapper">
        <p>{relative.name}</p>
        <p>{relative.country}</p>
        <p>{relative.age}</p>
      </div>
    </>
  )
}
export default Relative;