import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Registration from './Registration';
import RoleSelection from './HandleRegister';
import Speciality from './admin/Speciality';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/handleRegister" element={<RoleSelection />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/chooseSpeciality" element={<Speciality />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;