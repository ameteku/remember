import "./Event.css";


function Event(props){
    return (
        <div className="eventBlock">
            {props.name}
        </div>
    )
}

export default Event;