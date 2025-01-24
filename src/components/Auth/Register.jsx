import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { username, email, password });
      history.push('/login');
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Register;
