import React, { useState, useEffect } from 'react';
import axios from '../../axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get('/users/me');
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      {user ? (
        <>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
