import React, { useState } from "react";
import "./CreateWorkout.css";
import "../../App.css";
import IntervalItemForm from "../interval_item_form/IntervalItemForm";
import RunDistanceOrDurationForm from "../run_distance_or_duration_form/RunDistanceOrDurationForm";
import { setWorkouts } from "../../features/workouts/workoutsSlice";
import { useSelector, useDispatch } from "react-redux";

function CreateNewWorkout({ dateToString }) {
  const [workoutType, setWorkoutType] = useState("Long Run");
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts.value);
  const [errors, setErrors] = useState([]);

  function handleRestSubmit(e) {
    const formDataToSubmit = {
      date: dateToString,
      workout_type: workoutType,
      details: ["Take the day off"],
    };
    fetch("/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToSubmit),
    }).then((res) => {
      if (res.ok) {
        res.json().then((workout) => {
          dispatch(setWorkouts([...workouts, workout]));
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className='create_workout'>
      <h2>{dateToString}</h2>
      <form className='new_workout_form'>
        <label htmlFor='workout_type'>
          workout type:
          <select
            name='workout_type'
            onChange={(e) => setWorkoutType(e.target.value)}
            value={workoutType}
          >
            <option value='Long Run'>Long Run</option>
            <option value='Interval'>Interval</option>
            <option value='Recovery'>Recovery</option>
            <option value='Tempo'>Tempo</option>
            <option value='Race'>Race</option>
            <option value='Rest'>Rest</option>
          </select>
        </label>
        <br />
      </form>
      {workoutType === "Long Run" || workoutType === "Recovery" ? (
        <RunDistanceOrDurationForm
          dateToString={dateToString}
          workoutType={workoutType}
        />
      ) : workoutType === "Interval" || workoutType === "Tempo" ? (
        <IntervalItemForm
          dateToString={dateToString}
          workoutType={workoutType}
        />
      ) : workoutType === "Rest" ? (
        <button onClick={handleRestSubmit}>Submit Rest Day</button>
      ) : (
        <p>Race placeholder</p>
      )}
    </div>
  );
}

export default CreateNewWorkout;
