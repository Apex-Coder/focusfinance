import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';
import app from '../../Configuration/base';

export  class ReactNavbar extends Component {
    render() {
        return (
          <>
            <header>
              <h1 className="logo">Focus Finance</h1>
              <input type="checkbox" className="nav-toggle" id="nav-toggle" />
              <nav>
                <ul>
                  <li><Link to="/">Dashboard</Link></li>
                  <li><Link to="/expenses">Expenses</Link></li>
                  <li><Link to="/savings">Savings</Link></li>
                  <li><Link to="/income">Income</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><a onClick={() => app.auth().signOut()}>Sign Out</a></li>
                </ul>
              </nav>
              <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
              </label>
            </header>
          </>
        );
    }
}
export default  ReactNavbar
