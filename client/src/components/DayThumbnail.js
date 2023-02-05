import React from "react";
import "../App.css";
import {useSelector} from 'react-redux'
import {format} from 'date-fns'


function DayThumbnail ({day, onCalendarChange}) {
    const user = useSelector((state) => state.user.value)
    const workouts = useSelector((state) => state.workouts.value)
    const fullDate = format(day, "eee LLL dd yyyy")
    const month = fullDate.slice(4, 7)
    const dateNumber = fullDate.slice(8, 10)

    function handleThumbnailClick(e) {
        onCalendarChange(day)
    }
    
    const workout = workouts.find((workout) => workout.date === format(day, "yyyy-LL-dd"))
    const createId = () => workout.workout_type.toLowerCase().split(" ").join("_")
    
    return (
        <div className="day_thumb" id={workout ? createId() : "no_workout"} onClick={handleThumbnailClick}>
            <div className="day_thumb_date_container">
                <h4 className="day_thumb_date">{dateNumber}</h4>
                <h4 className="day_thumb_month">{month.toUpperCase()}</h4>
            </div>
            {workout ? <h5 className="day_thumb_detail">{workout.workout_type}</h5> : <h5 className="day_thumb_detail">Add Workout</h5>}
        </div>
    )
}

export default DayThumbnail