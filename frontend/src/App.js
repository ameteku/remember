import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Home from "./Landing";
import Login from "./Login";
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </div>
  );
}

export default App;
