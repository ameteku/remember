import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Home from "./Landing";
import Login from "./Login";
import Register from './Register';
import CreateEvent from './CreateEvent';
import JoinEvent from './JoinEvent';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/create-event" component={CreateEvent}/>
      <Route exact path="/join-event" component={JoinEvent}/>
    </div>
  );
}

export default App;
