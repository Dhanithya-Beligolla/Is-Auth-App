import React, { useState } from 'react';
import axios from '../../axios';

const PasswordResetRequest = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/auth/reset-password-request', { email });
            setMessage('Password reset email sent.');
        } catch (error) {
            setMessage('Error sending reset email');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
                    Send Reset Link
                </button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

export default PasswordResetRequest;
