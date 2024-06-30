import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/user/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setProfile(response.data);
            } catch (err) {
                setError(err.response.data.error || 'Error fetching profile');
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Mobile No: {profile.mobileNo}</p>
            <p>Role: {profile.role}</p>
            <p>Date of Birth: {profile.DOB}</p>
            <p>Address: {profile.address}</p>
        </div>
    );
};

export default ProfilePage;
