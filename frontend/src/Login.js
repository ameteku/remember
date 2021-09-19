import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {Link} from "react-router-dom";

function Login(){
    function loginUser(event){
    }

    return (

        <div className="login text-center">
            <form class="form-signin">
                <h1> Welcome Here</h1>
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                
                <label for="inputUsername" class="sr-only">Username</label>
                <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus/>
                
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                
                <button class="btn btn-lg btn-primary btn-block" onClick={loginUser} type="submit">Sign in</button>
                <Link to="/register"><button class="reg-button btn btn-lg btn-primary btn-block " type="submit">Register</button></Link>
                <Link to="/"><button class="reg-button btn btn-lg btn-primary btn-block " type="submit">Back To Home</button></Link>
                <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
            </form>
        </div>
    )
}

export default Login;