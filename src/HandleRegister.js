import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from './Header';

const RoleSelection = () => {
  const [selectedOption, setSelectedOption] = useState('patient'); 
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    let role = ''; 

    if (selectedOption === 'patient') {
      role = "Patient";
    } else if (selectedOption === 'doctor') {
      role = "Doctor";
    } else if (selectedOption === 'admin') {
      role = "Admin";
    }

    localStorage.setItem('role', role);
    navigate('/login');
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className='input-container'>
            <select className='role' value={selectedOption} onChange={handleOptionChange}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RoleSelection;
