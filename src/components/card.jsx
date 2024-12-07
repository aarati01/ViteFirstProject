import "../components/Card.css"
import PropTypes from "prop-types"
const Card = (props) => {
    return (
      <div className="Card">
        <img src="https://images.pexels.com/photos/28290901/pexels-photo-28290901/free-photo-of-buho-de-anteojos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " width={242} height={150}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
  )
}
Card.propTypes={
    title: PropTypes.string,
    description:PropTypes.string
}
export default Card
