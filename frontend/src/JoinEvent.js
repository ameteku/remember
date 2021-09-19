import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateEvent.css';
import {Link} from "react-router-dom";

function JoinEvent(){
    function submitEvent(event){
    }
    return (
        <div className="login text-center">
            <form class="form-signin">
                <h1> Create Event</h1>

                <label for="inputEventID" class="sr-only">Event ID</label>
                <input type="text" id="inputEventID" class="form-control" placeholder="Event ID" required autofocus/>

                <label for="inputPassword" class="sr-only">Passcode</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Passcode" required/>

                <button class="btn btn-lg btn-primary btn-block" onClick={submitEvent} type="submit">Submit Event</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
            </form>
        </div>
    )
}

export default JoinEvent;