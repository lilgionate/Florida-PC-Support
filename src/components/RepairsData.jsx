import "./repairs.css";

function RepairsData(props) {
  return (
    <div className="r-card">
        <div className="r-image">
            <img src={props.image} alt="image" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  );
}

export default RepairsData;