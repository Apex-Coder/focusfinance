import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import { AuthProvider } from './Configuration/Auth';
import PrivateRoute from './Configuration/PrivateRoute';

const App = () =>  {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
