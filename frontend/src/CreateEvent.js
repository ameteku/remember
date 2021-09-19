import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateEvent.css';
import {Link} from "react-router-dom";

function CreateEvent(){
    function submitEvent(event){
    }

    return (

        <div className="login text-center">
            <form class="form-signin">
                <h1> Create Event</h1>
                
                <label for="inputEventname" class="sr-only">Event Name</label>
                <input type="text" id="inputEventname" class="form-control" placeholder="Event Name" required autofocus/>
                
                <label for="inputEventDate" class="sr-only">Event Date</label>
                <input type="date" id="inputEventDate" class="form-control" placeholder="Event Date" required/>

                <label for="inputEventTime" class="sr-only">Event Time</label>
                <input type="time" id="inputEventTime" class="form-control" placeholder="Event Time" required/>

                <label for="inputDescription" class="sr-only">Event Description</label>
                <input type="text" id="inputDescription" class="form-control" placeholder="Description" required autofocus/>

                <span>
                    <text>Private</text>
                    <label for="inputIsPrivate" class="sr-only"> Private</label>
                    <input type="checkbox" id="inputIsPrivate" class="form-control" placeholder="Private" required/>
                </span>

                <label for="inputPassword" class="sr-only">Passcode</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Passcode" required/>
                
                <button class="btn btn-lg btn-primary btn-block" onClick={submitEvent} type="submit">Submit Event</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
            </form>
        </div>
    )
}

export default CreateEvent;