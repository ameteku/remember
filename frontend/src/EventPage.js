import React from "react";
import "./EventPage.css";


function EventPage(props){
    return (
        <div className="everything">
            <div className="goBack">
                <button>Go Back</button>
            </div>
            <div>
                <h1>Meet Billie</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="addPost">
                <button>Add Post</button>
            </div>
        </div>
    )
}

export default EventPage;