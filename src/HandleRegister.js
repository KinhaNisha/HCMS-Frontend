import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const RoleSelection = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate based on the selected option
    if (selectedOption === 'option1') {
      navigate('/patientLogin');
    } else if (selectedOption === 'option2') {
      navigate('/doctorLogin');
    } else if (selectedOption === 'option3') {
      navigate('/adminLogin');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <div className='input-container'>
          <select className='role' value={selectedOption} onChange={handleOptionChange}>
            {/* <option value="" disabled>Select Role</option> */}
            <option value="patient" selected>Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default RoleSelection;
