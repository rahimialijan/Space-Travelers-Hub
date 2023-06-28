import './navbarComponents.css';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const NavbarComponent = () => (
  <div className="navbar">
    <div className="logo-container">
      <NavLink to="/" className="logo-items">
        <img src={planet} alt="Logo" className="planet-logo" />
        <h1 className="logo-name"> Space Travelers Hub</h1>
      </NavLink>
    </div>
    <div className="navbar-links">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/mission" className="nav-link">
            Missions
          </NavLink>
        </li>
        <li className="horzental-line">|</li>
        <li>
          <NavLink to="/myprofile" className="nav-link">
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default NavbarComponent;
