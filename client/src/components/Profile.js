import React, { useState } from "react";
import "../App.css";
import Calendar from 'react-calendar'
import Day from "./Day";
import 'react-calendar/dist/Calendar.css'
import {setUser} from '../features/user/userSlice'
import {useSelector, useDispatch} from 'react-redux'


function Profile() {

    const [value, onChange] = useState(new Date());
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    console.log(user)

    function handleLogoutClick(e) {
        fetch(`/logout`, { method: "DELETE" }).then((res) => {
          if (res.ok) {
            dispatch(setUser(null))
          }
        });
      }

return (
    <div id="profile">
        <h3>{user.first_name}</h3>
        <Calendar 
            value={value} 
            onChange={onChange} 
            className="calendar" 
            calendarType="US"
        />
        {value ? <Day value={value}/> : null}
        <div>
            <button onClick={handleLogoutClick}>Log out</button>
        </div>
    </div>
    
  );
}
export default Profile