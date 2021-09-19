import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import {Link} from "react-router-dom";

function Landing(){

    return (

        <div className="login text-center">
            <form class="form-signin">
                <h1> Landing Page </h1>
                <Link to="/login"><button class="reg-button btn btn-lg btn-primary btn-block " type="submit">Login</button></Link>
                <Link to="/register"><button class="reg-button btn btn-lg btn-primary btn-block " type="submit">Register</button></Link>
                <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
            </form>
        </div>
    )
}

export default Landing;