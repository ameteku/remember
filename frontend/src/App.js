import './App.css';
import {Route} from "react-router-dom";
import Home from "./Landing";
import Login from "./Login";
import Register from './Register';
import HomePage from './HomePage';
import EventPage from './EventPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/eventpage" component={EventPage}/>
    </div>
  );
}

export default App;
