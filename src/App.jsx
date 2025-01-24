import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import UserProfile from './components/UserProfile/UserProfile';
import EditProfile from './components/UserProfile/EditProfile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="p-6">
          <Switch>
            <Route path="/" exact>
              <h1>Welcome to Is-Auth</h1>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={UserDashboard} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/profile/edit" component={EditProfile} />
            <Route path="/admin/dashboard" component={AdminDashboard} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
