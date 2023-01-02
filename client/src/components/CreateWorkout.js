import React, { useState } from "react";
import "../App.css";
import {useSelector, useDispatch} from 'react-redux'
import { setWorkouts } from '../features/workouts/workoutsSlice'
import IntervalForm from "./IntervalForm";
import RunDistanceOrDurationForm from "./RunDistanceOrDurationForm";

function CreateNewWorkout ({ dateToString, dateToISO }) {

    const dispatch = useDispatch()
    const workouts = useSelector((state) => state.workouts.value)

    const [newWorkoutFormData, setNewWorkoutFormData] = useState({
        date: dateToISO,
        workoutType: "",
        duration: "",
        pace: "",
        addOns: ""
    })

    function handleFormChange(e) {
        setNewWorkoutFormData({...newWorkoutFormData,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        // dispatch(setWorkouts(...workouts, newWorkoutFormData));
    }

    return (
        <div>
        <h2>{dateToString}</h2>
            <form onSubmit={handleFormSubmit} className="new_workout_form">
                <label htmlFor="workout_type">
                    workout type: 
                    <select name="workoutType" onChange={handleFormChange} value={newWorkoutFormData.workoutType}>
                        <option value="Long Run">Long Run</option>
                        <option value="Interval">Interval</option>
                        <option value="Recovery">Recovery</option>
                        <option value="Tempo">Tempo</option>
                        <option value="Race">Race</option>
                        <option value="Rest">Rest</option>
                    </select>
                </label><br/>
                { 
                    newWorkoutFormData.workoutType === "Long Run" || newWorkoutFormData.workoutType === "Recovery" 
                    ? <RunDistanceOrDurationForm/>
                    : newWorkoutFormData.workoutType === "Rest" 
                    ? null 
                    :  <IntervalForm/>
                }
                <input type="submit" value="Submit" />
            </form>
        </div>
        
    )
}

export default CreateNewWorkout