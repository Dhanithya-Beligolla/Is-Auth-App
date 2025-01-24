import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

const EmailVerification = () => {
    const { token } = useParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                await axios.get(`/auth/verify-email/${token}`);
                setMessage('Email verified successfully');
            } catch (error) {
                setMessage('Error verifying email');
            }
        };

        verifyEmail();
    }, [token]);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Email Verification</h2>
            <p>{message}</p>
        </div>
    );
};

export default EmailVerification;
