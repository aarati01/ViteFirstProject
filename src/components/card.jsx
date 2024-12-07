import "../components/Card.css"
import PropTypes from "prop-types"
const Card = (props) => {
    return (
      <div className="Card">
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
