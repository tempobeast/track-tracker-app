import React from "react";
import "../App.css";

function WorkoutCard ({ workout, dateToString }) {

    const {workout_type, details, approx_duration, add_ons} = workout
    const createId = () => workout_type.toLowerCase().split(" ").join("_")
    const dateSplit = dateToString.split(" ")
    const day = dateSplit[0]
    const month = dateSplit[1]
    const dateNumber = dateSplit[2]
    const year = dateSplit[3]

    // const displayWorkoutDetails = details.map((detail) => <p>{detail}</p>)
    
    // const averageWorkoutRating = workout.log_entries.reduce(function(acc, entry) {return acc + entry.workout_rating}, 0)/workout.log_entries.length;

    return (
        <div className="workout_card" id={workout ? createId() : "no_workout"}>
            <div className="workout_card_header">
                <h1 className="workout_date">{dateNumber}</h1>
                <h4 className="workout_month">{month.toUpperCase()}</h4>
            </div>
            <h2 className="workout_type">{workout_type}</h2>
            {workout_type === "Long Run" ? <p>{details}</p> : details.map((detail) => <p>{detail}</p>)}
            <h3 className="workout_year">{year}</h3>
        </div>
    )
}

export default WorkoutCard