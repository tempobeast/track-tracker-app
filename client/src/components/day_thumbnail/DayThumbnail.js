import React from "react";
import "./DayThumbnail.css"
import "../../App.css";
import {useSelector} from 'react-redux'
import {format} from 'date-fns'


function DayThumbnail ({day, onCalendarChange}) {
    const user = useSelector((state) => state.user.value)
    const workouts = useSelector((state) => state.workouts.value)
    const fullDate = format(day, "eee LLL dd yyyy")
    const month = fullDate.slice(4, 7)
    const year = fullDate.slice(-4)
    const dateNumber = fullDate.slice(8, 10)

    function handleThumbnailClick(e) {
        onCalendarChange(day)
    }
    
    const workout = workouts.find((workout) => workout.date === format(day, "yyyy-LL-dd"))
    const createId = () => workout.workout_type.toLowerCase().split(" ").join("_")
    const detailsToDisplay = workout ? workout.details.map((detail) => <p key={detail}>{detail}</p>) : []


    return (
        <div>
        <div className="day_thumb" id={workout ? createId() : "no_workout"} onClick={handleThumbnailClick}>
            <div className="day_thumb_date_container">
                <h4 className="day_thumb_date">{dateNumber}</h4>
                <h4 className="day_thumb_month">{month.toUpperCase()}</h4>
                <h3 className="day_thumb_details">{detailsToDisplay}</h3>
            </div>
            {workout ? <h5 className="day_thumb_detail">{workout.workout_type}</h5> : <h5 className="day_thumb_detail">Add Workout</h5>}
        </div>
            <div className="workout_card day_thumb-mobile" id={workout ? createId() : "no_workout"}>
                <div className="workout_card_header">
                <h1 className="workout_date">{dateNumber}</h1>
                <h4 className="workout_month">{month.toUpperCase()}</h4>
                </div>
                {workout ?
                <h2 className="workout_type">{workout.workout_type}</h2>
                : null}
                {workout ? detailsToDisplay : <p>no workout scheduled</p>}
                <h3 className="workout_year">{year}</h3>
            </div>
        </div>
    )
}

export default DayThumbnail