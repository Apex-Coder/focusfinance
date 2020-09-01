import React, { Component } from 'react';
import './Navbar.css';

export  class ReactNavbar extends Component {
    render() {
        return (
          <>
            <header>
              <h1 className="logo">Focus Finance</h1>
              <input type="checkbox" className="nav-toggle" id="nav-toggle" />
              <nav>
                <ul>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Expenses</a></li>
                  <li><a href="#">Savings</a></li>
                  <li><a href="#">Income</a></li>
                  <li><a href="#">Settings</a></li>
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
