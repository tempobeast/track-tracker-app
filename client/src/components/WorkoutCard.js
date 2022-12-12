import React from "react";
import "../App.css";

function WorkoutCard ({ workout, dateToString }) {

    const {workout_type, details, approx_duration, add_ons} = workout

    // const averageWorkoutRating = workout.log_entries.reduce(function(acc, entry) {return acc + entry.workout_rating}, 0)/workout.log_entries.length;

    return (
        <div className="workout_card">
            <h4 className="workout_date">{dateToString}</h4>
            <h3 className="workout_type">{workout_type}</h3>
        </div>
    )
}

export default WorkoutCard