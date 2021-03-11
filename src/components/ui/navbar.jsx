import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark my-3">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">HOME</NavLink >
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/episodes">EPISODES</NavLink >
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/deaths">DEATHS</NavLink >
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/quotes">QUOTES</NavLink >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;