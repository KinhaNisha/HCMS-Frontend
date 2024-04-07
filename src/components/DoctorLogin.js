import React, { useState } from 'react';
import '../App.css';
import Header from '../Header';

function DoctorLogin() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Simulate an API call to a server for authentication
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: loginUsername, password: loginPassword }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Login successful!');
            } else {
                alert('Login failed. Please check your credentials. or create an account');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <Header />
            <form>
                <div className="form-container">
                    <div className='input-container'>
                        <h2 className='form-heading'> Doctor Login</h2>
                        <label htmlFor="username">LoginID:</label>
                        <div className='form-item'>
                            <input
                                type="text"
                                id="loginUsername"
                                value={loginUsername}
                                onChange={(e) => setLoginUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="loginPassword"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                        <p>If don't have an account! <a href='/registration' id="registration">Create new Account </a></p>
                    </div>
                </div>
            </form>
        </>
    );
}



export default DoctorLogin;