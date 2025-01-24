import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get('/users/me');
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/users/me', { username, email });
      history.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
