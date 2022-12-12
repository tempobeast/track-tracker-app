import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom"

function Nav() {

return (
    <div id="nav">
      <NavLink className="nav_button" to="/user_profile">Home</NavLink>
      <NavLink className="nav_button" to="/view_athletes">View Athletes</NavLink>
    </div>
    
  );
}
export default Nav