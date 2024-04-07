import React, { useState } from 'react';
import AdminLogin from './AdminLogin';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = (id, userRole) => {
    setIsLoggedIn(true);
    setAdminId(id);
    setRole(userRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminId('');
    setRole('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {adminId} ({role})!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <AdminLogin handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
