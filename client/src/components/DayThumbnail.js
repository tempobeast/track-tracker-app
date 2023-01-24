import React from "react";
import "../App.css";
import {useSelector} from 'react-redux'
import {format} from 'date-fns'


function DayThumbnail ({day, onCalendarChange}) {
    const user = useSelector((state) => state.user.value)
    const workouts = useSelector((state) => state.workouts.value)
    const fullDate = format(day, "eee LLL dd yyyy")
    const shortDate = fullDate.slice(0, 10)

    function handleThumbnailClick(e) {
        onCalendarChange(day)
    }
    
    const workout = workouts.find((workout) => workout.date === format(day, "yyyy-LL-dd"))
    const createId = () => workout.workout_type.toLowerCase().split(" ").join("_")
    
    return (
        <div className="day_thumb" id={workout ? createId() : "no_workout"} onClick={handleThumbnailClick}>
            <h4>{shortDate}</h4>
            {workout ? <h5>{workout.workout_type}</h5> : <h5>Add Workout</h5>}
        </div>
    )
}

export default DayThumbnail