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
import { format } from 'date-fns'

function Profile() {
    const [clickedDateValue, setClickedDate] = useState(new Date());
    const user = useSelector((state) => state.user.value);
    const workouts = useSelector((state) => state.workouts.value)
    const [currentWeek, setCurrentWeek] = useState([]);
    const [showMonth, setShowMonth] = useState(false);
    const dateToISO = format(clickedDateValue, 'yyyy-MM-dd');
    const dateToString = format(clickedDateValue, "eee LLL dd yyyy");

    const dispatch = useDispatch();
    const navigate = useNavigate();    
    
    useEffect(() => {
        createWeek(clickedDateValue)
    }, [clickedDateValue])

    function createWeek(clickedDate) {
      const mutableClickedDate = new Date (clickedDate)
      const fullWeek = []
      const prevSunday = new Date(mutableClickedDate.setDate(mutableClickedDate.getDate() - mutableClickedDate.getDay() - 1))
      for (let i = 0; i < 7; i++) {
        fullWeek.push(new Date(prevSunday.setDate(prevSunday.getDate() + 1)))
            }
      setCurrentWeek(fullWeek)
    }
       
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

      function onCalendarChange(date) {
        createWeek(date)
        setClickedDate(date)
      }

    const findWorkout = workouts.find((workout) => workout.date === format(clickedDateValue, 'yyyy-MM-dd'))

return (
    <div id="profile">
        <h3>{user.first_name}</h3>
        <button onClick={handleShowMonthClick}>{showMonth ? "Hide Month" : "Show Month"}</button>
        {showMonth
          ? <Calendar clickedDateValue={clickedDateValue} onChange={(date) => onCalendarChange(date)} className="day" calendarType="US"/>
          : null
        }
        <DayThumbnailContainer clickedDateValue={clickedDateValue} currentWeek={currentWeek} onCalendarChange={onCalendarChange} workout={findWorkout}/>
        <div className="workout-highlighted_web" >
          {
            findWorkout 
            ? <WorkoutCard workout={findWorkout} dateToString={dateToString}/>
            : <CreateNewWorkout dateToString={dateToString} dateToISO={dateToISO}/>
          }
        </div>

        <div>
          <button onClick={handleLogoutClick}>Log out</button>
        </div>
    </div>
    
  );
}
export default Profile