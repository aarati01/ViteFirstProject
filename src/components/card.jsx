import { useState } from "react"
import "../components/Card.css"
import PropTypes from "prop-types"
const Card = (props) => {
  const [count,setcount]=useState(100)
    return (
      <div className="Card" style={{overflow:"hidden"}}>
        <img src="https://images.pexels.com/photos/28290901/pexels-photo-28290901/free-photo-of-buho-de-anteojos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " width={242} height={150}
        style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        <div>The count is {count}</div>
        <button onClick={()=>{setcount(count+1)}}>UPdate Count</button>
      </div>
  )
}
Card.propTypes={
    title: PropTypes.string,
    description:PropTypes.string
}
export default Card
