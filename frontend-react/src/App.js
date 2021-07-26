import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListGameInfo from './components/ListGameInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import CreateGameInfo from './components/CreateGameInfo';
// import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import EditGameInfo from './components/EditGameInfo';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <NavBar />
          <div className = "container">
            <Switch> 
              <Route path = "/" exact component = {ListGameInfo}></Route> {/*http://localhost:3000/ */}
              <Route path = "/gameInfo" component = {ListGameInfo}></Route> {/*http://localhost:3000/gameInfo */}
              <Route path = "/add-gameInfo" component = {CreateGameInfo}></Route>
              <Route path = "/edit-gameInfo/:id" component = {EditGameInfo}></Route>
            </Switch>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
