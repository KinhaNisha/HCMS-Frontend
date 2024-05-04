import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Registration from './Registration';
import RoleSelection from './HandleRegister';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/handleRegister" element={<RoleSelection />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;