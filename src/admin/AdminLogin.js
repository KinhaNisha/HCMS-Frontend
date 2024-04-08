import React, { useState } from 'react';

const AdminLogin = ({ handleLogin }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminLogin = () => {
    // Hardcoded admin credentials
    const hardcodedAdminId = 'admin';
    const hardcodedPassword = 'password';

    // Check if the entered credentials match the hardcoded ones
    if (adminId === hardcodedAdminId && password === hardcodedPassword) {
      // If the credentials match, set role to admin
      const role = 'admin';
      // Handle login
      handleLogin(adminId, role);
    } else {
      setError('Invalid admin ID or password');
    }
  };

  return (
    <form>
      <div className='form-container'>
        <div className='input-container'>
          <h2 className='form-heading'>Admin Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className='form-item'>
            <label>Admin ID:</label>
            <input type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} />
          </div>
          <div className='form-item'>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleAdminLogin}>Login</button>
        </div>
      </div>
    </form>
  );
};

export default AdminLogin;
