import React, { useState, useEffect } from "react";
import "../App.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {setUser} from '../features/user/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import CreateNewWorkout from "./CreateWorkout";
import DayThumbnailContainer from "./DayThumbnailContainer";
import WorkoutCard from "./WorkoutCard";

function Profile() {
    const [value, onChange] = useState(new Date());
    const user = useSelector((state) => state.user.value);
    const {workouts} = user;
    const [currentWeek, setCurrentWeek] = useState([]);
    const [showMonth, setShowMonth] = useState(false);
    const dateToISO = value.toISOString().slice(0, 10);
    const dateToString = value.toString().slice(0, 15);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        const fullWeek = []
        for (let i = 0; i < 7; i++) {
            const date = new Date(value.setDate(value.getDate() - value.getDay() + i))
            fullWeek.push(date)
        }
        setCurrentWeek(fullWeek)
    }, [value])
   
    function handleLogoutClick(e) {
        fetch(`/logout`, { method: "DELETE" }).then((res) => {
          if (res.ok) {
            dispatch(setUser(null))
            navigate("/")
          }
        });
      }

      function handleShowMonthClick(e) {
        setShowMonth(!showMonth)
      }
    
    const findWorkout = workouts.find((workout) => workout.date === value.toLocaleDateString('pt-br').split('/').reverse().join('-'))

return (
    <div id="profile">
        <h3>{user.first_name}</h3>
        <button onClick={handleShowMonthClick}>{showMonth ? "Hide Month" : "Show Month"}</button>
        {showMonth ?
            <Calendar 
            value={value} 
            onChange={onChange} 
            className="day" 
            calendarType="US"
        />
        :
        null
        }
        <DayThumbnailContainer currentWeek={currentWeek} workout={findWorkout}/>
            {
            findWorkout ? 
                <WorkoutCard workout={findWorkout} dateToString={dateToString}/>
                : 
                <CreateNewWorkout dateToString={dateToString} dateToISO={dateToISO}
                />
            }
        <div>
            <button onClick={handleLogoutClick}>Log out</button>
        </div>
    </div>
    
  );
}
export default Profile