import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavbarComponent from './components/navbarComponents';
import Rockets from './router/rockets';
import Myprofile from './router/myprofile';
import Missions from './router/mission';
import { getRocketsData } from './Redux/rockets/rocketSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsData());
  }, [dispatch]);
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/space-travelers-hub" element={<Navigate to="/" />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </>
  );
}

export default App;
