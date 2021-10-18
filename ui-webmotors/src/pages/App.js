import logo from '../assets/logo.svg';
import ImageBackground from '../assets/home-background.svg';
import '../App.css';
import {Home} from './Home';
import {AnnouncementWebmotors} from './AnnouncementWebmotors';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
      <img src={logo} />
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark justify-content-center m-3">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary justify-content-center m-3" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary justify-content-center m-3" to="/AnnouncementWebmotors">
            Anuncios
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='pages/Home/home' component={Home}/>
        <Route path='pages/Home/AnnouncementWebmotors' component={AnnouncementWebmotors}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
