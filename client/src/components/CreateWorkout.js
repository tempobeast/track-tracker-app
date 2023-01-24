import React, { useState } from "react";
import "../App.css";
import IntervalItemForm from "./IntervalItemForm";
import RunDistanceOrDurationForm from "./RunDistanceOrDurationForm";

function CreateNewWorkout ({ dateToString, dateToISO }) {

    const [ workoutType, setWorkoutType ] = useState("Long Run")

    return (
        <div>
        <h2>{dateToString}</h2>
            <form className="new_workout_form">
                <label htmlFor="workout_type">
                    workout type: 
                    <select name="workout_type" onChange={(e) => setWorkoutType(e.target.value)} value={workoutType}>
                        <option value="Long Run">Long Run</option>
                        <option value="Interval">Interval</option>
                        <option value="Recovery">Recovery</option>
                        <option value="Tempo">Tempo</option>
                        <option value="Race">Race</option>
                        <option value="Rest">Rest</option>
                    </select>
                </label><br/>
            </form>
            { 
                workoutType === "Long Run" || workoutType === "Recovery" 
                ? <RunDistanceOrDurationForm dateToString={dateToString} workoutType={workoutType}/>
                : workoutType === "Interval" || workoutType === "Tempo"
                ? <IntervalItemForm dateToString={dateToString} workoutType={workoutType}/>
                :  <p>Race or Rest placeholder</p>
            }
        </div>  
    )
}

export default CreateNewWorkout