import React, { useEffect, useState } from 'react';
import axios from '../../axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/users');
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
