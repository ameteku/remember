import React from "react";
import Navbar from "./Navbar";
import './HomePage.css';

function HomePage(){
    const [currentTab, updateTab] = React.useState(0);
    const [events, updateEvents] = React.useState([]);
    React.useEffect(() => {
        async function getData(url) {
            const response = await fetch(url, {
              method: 'GET', // *GET, POST, PUT, DELETE, etc.
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }
          var url;
          if (currentTab === 0){
              // my events
               url = `http://localhost:5000/getEvents/`
          } else {
              // all events
               url = `http://localhost:5000/getEvents/`
          }
          getData(url)
            .then(data => {
                console.log(data);
                updateEvents(data);
            });
        }, []);
    function mapEvents(event){

    }


    function switchTab(){
        switch(currentTab){
            case 0:
                document.getElementById("myEvent").classList.remove("activeFeedButton");
                document.getElementById("myEvent").classList.add("inactiveFeedButton")
                document.getElementById("globalEvent").classList.remove("inactiveFeedButton")
                document.getElementById("globalEvent").classList.add("activeFeedButton")
                break;
            case 1:
                document.getElementById("myEvent").classList.remove("inactiveFeedButton");
                document.getElementById("myEvent").classList.add("activeFeedButton")
                document.getElementById("globalEvent").classList.remove("activeFeedButton")
                document.getElementById("globalEvent").classList.add("inactiveFeedButton")
                break;
            default:
                throw new Error("case nonexistent");
        }
        updateTab((currentTab + 1) % 2);
    }

    return (
        <div>
        <Navbar/>
            <div className='feed'>
                <div className='feedButtonRow'> 
                    <button id="myEvent" className="activeFeedButton" onClick={switchTab}>My Events</button>
                    <button id="globalEvent" className="inactiveFeedButton" onClick={switchTab}>Global Events</button>
                </div>
                <div className="addEventsStack">
                    <button className="btn-block stackBtn">Add Event</button>
                    <button className="btn-block stackBtn">Join Event</button>
                </div>
                <div className="eventsList">
                    <ol>
                       {events.map(mapEvents)} 
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default HomePage;