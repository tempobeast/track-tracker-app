import React from "react";
import "../App.css";
import {useSelector} from 'react-redux'


function DayThumbnail ({day, onCalendarChange}) {
    const user = useSelector((state) => state.user.value)
    const {workouts} = user
    const fullDate = day.toString().slice(0, 15)
    const shortDate = fullDate.slice(0, 10)

    function handleThumbnailClick(e) {
        onCalendarChange(day)
    }
    
    const workout = workouts.find((workout) => workout.date === day.toISOString().slice(0, 10))
    const createId = () => workout.workout_type.toLowerCase().split(" ").join("_")
    
    return (
        <div className="day_thumb" id={workout ? createId() : "no_workout"} onClick={handleThumbnailClick}>
            <h4>{shortDate}</h4>
            {workout ? <h5>{workout.workout_type}</h5> : <h5>Add Workout</h5>}
        </div>
    )
}

export default DayThumbnail