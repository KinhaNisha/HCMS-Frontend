import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import Speciality from './admin/ChooseSpeciality';
import ProfilePage from './pages/profilePage';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/chooseSpeciality" element={<Speciality />} />
          <Route exact path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;