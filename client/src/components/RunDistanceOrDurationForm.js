import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { setWorkouts } from '../features/workouts/workoutsSlice'

function RunDistanceOrDurationForm({dateToString, workoutType}) {

    const dispatch = useDispatch()
    const workouts = useSelector((state) => state.workouts.value)
    const [errors, setErrors] = useState([])

    const [newWorkoutFormData, setNewWorkoutFormData] = useState({
        distance_or_duration: "",
        unit_of_measure: "mile",
        add_ons: ""
    })

    function handleFormChange(e) {
        setNewWorkoutFormData({...newWorkoutFormData,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        const runDetails = [`${newWorkoutFormData.distance_or_duration} ${newWorkoutFormData.unit_of_measure} run`]
        const formDataToSubmit = {
            date: dateToString,
            workout_type: workoutType,
            details: runDetails,
            add_ons: newWorkoutFormData.add_ons
        }
        fetch("/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataToSubmit),
        }).then((res) => {
            if (res.ok) {
                res.json().then((workout) => {
                    dispatch(setWorkouts([...workouts, workout]))
                }
                )
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="interval_form_item">
                    <label>Description:</label>
                    <input className="distance_or_duration_form" onChange={handleFormChange} name="distance_or_duration" type="number"></input>
                    <select name="unit_of_measure" onChange={handleFormChange}>
                        <option defaultValue="mile">miles</option>
                        <option value="kilometer">kilometers</option>
                        <option value="minute">minutes</option>
                    </select>
                </div>
                <button type="submit">{`Submit ${workoutType}`}</button>
            </form>
        </div>
    )
}

export default RunDistanceOrDurationForm