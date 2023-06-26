import './navbarComponents.css';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const NavbarComponent = () => (
  <div className="navbar">
    <div className="logo-container">
      <NavLink to="/" className="logo-name">
        <img src={planet} alt="Logo" className="planet-logo" />
        Space Travelers Hub
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
          <NavLink to="/missions" className="nav-link">
            Missions
          </NavLink>
        </li>
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
