// UserManagement.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await api.get('/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
 