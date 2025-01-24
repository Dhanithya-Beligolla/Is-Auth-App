import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

const PasswordReset = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/auth/reset-password/${token}`, { password });
            setMessage('Password reset successfully');
        } catch (error) {
            setMessage('Error resetting password');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
                    Reset Password
                </button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

export default PasswordReset;
