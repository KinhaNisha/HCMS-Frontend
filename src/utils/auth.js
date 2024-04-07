const auth = {
    isAuthenticated: false,
    authToken: null,
  
    login: async (username, password) => {
      try {
        // Perform authentication and obtain a token from the backend
        const response = await api.post('/auth/login', { username, password });
        auth.isAuthenticated = true;
        auth.authToken = response.data.token;
        localStorage.setItem('authToken', auth.authToken);
      } catch (error) {
        console.error('Authentication failed:', error);
      }
    },
  
    logout: () => {
      auth.isAuthenticated = false;
      auth.authToken = null;
      localStorage.removeItem('authToken');
    },
  
    checkRole: (requiredRole) => {
      // Check if the user has the required role
      // Implementation depends on your specific user roles and authentication setup
      return true;
    },
  };
  
  export default auth;
  