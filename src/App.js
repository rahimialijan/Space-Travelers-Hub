import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/navbarComponents';
import Rockets from './router/rockets';
import MyProfile from './router/myprofile';
import Missions from './router/missions';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/space-travelers-hub" element={<Navigate to="/" />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
