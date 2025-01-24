// src/pages/UserProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const UserProfile = () => {
    const { user } = useAuth();  // Access authenticated user from context
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
    });

    useEffect(() => {
        // Fetch the current user's details
        axios.get(`/api/users/${user.id}`)
            .then((response) => setUserDetails(response.data))
            .catch((error) => console.error(error));
    }, [user.id]);

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated user details to the server
        axios.put(`/api/users/${user.id}`, userDetails)
            .then((response) => console.log("User updated"))
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={userDetails.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default UserProfile;
