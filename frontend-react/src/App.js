import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Community from './components/Community'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import ListGameInfo from './components/ListGameInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import CreateGameInfo from './components/CreateGameInfo';
// import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import EditGameInfo from './components/EditGameInfo';
import ReadGameInfo from './components/ReadGameInfo';

function App() {
  return (
    <div>
     
      <Router>
       
          <div>
            <Switch> 
              <Route path = "/" exact component = {Home}></Route> 
              <Route path = "/about" exact component = {About}></Route> 
              <Route path = "/community" exact component = {Community}></Route> 
              <Route path = "/contact" exact component = {Contact}></Route> 
              <Route path = "/login" exact component = {Login}></Route> 
              <Route path = "/signup" exact component = {Signup}></Route> 
              <Route path = "/gameInfo" component = {ListGameInfo}></Route> 
              <Route path = "/add-gameInfo" component = {CreateGameInfo}></Route>
              <Route path = "/edit-gameInfo/:id" component = {EditGameInfo}></Route>
              <Route path = "/read-gameInfo/:id" component = {ReadGameInfo}></Route>
            </Switch>
          </div>
        
      </Router>
     
      {/* <Footer /> */}
    </div>
  );
}





export default App;


