import React, { useState } from "react";
import "../App.css";
import {useSelector, useDispatch} from 'react-redux'
import { setWorkouts } from '../features/workouts/workoutsSlice'
import IntervalForm from "./IntervalForm";
import RunDistanceOrDurationForm from "./RunDistanceOrDurationForm";

function CreateNewWorkout ({ dateToString, dateToISO }) {

    const dispatch = useDispatch()
    const workouts = useSelector((state) => state.workouts.value)
    const [errors, setErrors] = useState([])

    const [newWorkoutFormData, setNewWorkoutFormData] = useState({
        date: dateToISO,
        workout_type: "Long Run",
        details: [],
        add_ons: ""
    })

    function handleFormChange(e) {
        setNewWorkoutFormData({...newWorkoutFormData,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        fetch("/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newWorkoutFormData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((workout) => dispatch(setWorkouts([...workouts, workout]))
                )
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    console.log(newWorkoutFormData)
    return (
        <div>
        <h2>{dateToString}</h2>
            {/* <form onSubmit={handleFormSubmit} className="new_workout_form"> */}
                <label htmlFor="workout_type">
                    workout type: 
                    <select name="workout_type" onChange={handleFormChange} value={newWorkoutFormData.workout_type}>
                        <option value="Long Run">Long Run</option>
                        <option value="Interval">Interval</option>
                        <option value="Recovery">Recovery</option>
                        <option value="Tempo">Tempo</option>
                        <option value="Race">Race</option>
                        <option value="Rest">Rest</option>
                    </select>
                </label><br/>
                { 
                    newWorkoutFormData.workout_type === "Long Run" || newWorkoutFormData.workout_type === "Recovery" 
                    ? <RunDistanceOrDurationForm 
                        // onDetailSubmit={onDetailSubmit}
k                        newWorkoutFormData={newWorkoutFormData} 
                        setNewWorkoutFormData={setNewWorkoutFormData} 
                        />
                    : newWorkoutFormData.workout_type === "Rest" 
                    ? null 
                    :  <IntervalForm/>
                }
                <button onClick={handleFormSubmit}>Submit Workout</button>
            {/* </form> */}
        </div>
        
    )
}

export default CreateNewWorkout