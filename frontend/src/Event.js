import "./Event.css";
import {Link} from "react-router-dom";


function Event(props){
    return (
        <div className="eventBlock">
            <Link style={{ textDecoration: 'none' }} 
            to={{ 
            pathname: "/EventPage",props}}>{props.name}</Link>
        </div>
    )
}

export default Event;