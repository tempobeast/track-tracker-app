import React from "react";
import './Nav.css'
import "../../App.css";
import { NavLink } from "react-router-dom";
import { setUser } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Nav() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogoutClick(e) {
    fetch(`/logout`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        dispatch(setUser(null));
        navigate("/");
      }
    });
  }

  return (
    <div id='nav'>
      <NavLink className='nav_button' to='/user_profile'>
        Home
      </NavLink>
      {user && user.type === "Coach" ? (
        <NavLink className='nav_button' to='/view_athletes'>
          View Athletes
        </NavLink>
      ) : null}
      {user ? <button onClick={handleLogoutClick}>logout</button> : null}
    </div>
  );
}
export default Nav;
