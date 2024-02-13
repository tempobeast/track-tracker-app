import React, { useState } from "react";
import "../../App.css";
import "./IntervalItemForm.css";
import { useSelector, useDispatch } from "react-redux";
import { setWorkouts } from "../../features/workouts/workoutsSlice";

function IntervalItemForm({ dateToString, workoutType }) {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts.value);
  const [errors, setErrors] = useState([]);

  const [warmUp, setWarmUp] = useState({
    warm_up_description: "",
    warm_up_unit: "mile",
  });

  const [coolDown, setCoolDown] = useState({
    cool_down_description: "",
    cool_down_unit: "mile",
  });

  const [intervalInputFields, setIntervalInputFields] = useState([
    {
      qty: "",
      description: "",
      interval_unit: "meters",
      pace: "",
      rest_unit: "",
      rest: "",
    },
  ]);

  function handleFormDataChange(index, e) {
    let data = [...intervalInputFields];
    data[index][e.target.name] = e.target.value;
    setIntervalInputFields(data);
  }

  function handleAddRepClick(e) {
    e.preventDefault();
    let newField = {
      qty: "",
      description: "",
      interval_unit: "meters",
      pace: "",
      rest_unit: "",
      rest: "",
    };
    setIntervalInputFields([...intervalInputFields, newField]);
  }

  function handleWarmUpChange(e) {
    setWarmUp({ ...warmUp, [e.target.name]: e.target.value });
  }

  function handleCoolDownChange(e) {
    setCoolDown({ ...coolDown, [e.target.name]: e.target.value });
  }

  function handleIntervalFormSubmit(e) {
    e.preventDefault();
    const intervalDetails = intervalInputFields.map((rep) =>
      rep.rest < 0
        ? `${rep.qty} x ${rep.description} ${rep.interval_unit} @ ${rep.pace} pace with ${rep.rest} ${rep.rest_unit} rest`
        : `${rep.qty} x ${rep.description} ${rep.interval_unit} @ ${rep.pace} pace`
    );
    const warmUpString = `${warmUp.warm_up_description} ${warmUp.warm_up_unit} warm up`;
    const coolDownString = `${coolDown.cool_down_description} ${coolDown.cool_down_unit} cool down`;
    intervalDetails.unshift(warmUpString);
    intervalDetails.push(coolDownString);
    fetch("/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: dateToString,
        workout_type: workoutType,
        details: intervalDetails,
        add_ons: "none",
      }),
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
    <div>
      <form onSubmit={handleIntervalFormSubmit}>
        <input
          className='distance_or_duration_form'
          name='warm_up_description'
          type='number'
          placeholder='warm up'
          onChange={(e) => handleWarmUpChange(e)}
        />
        <select
          className='interval_form_entry_item'
          name='warm_up_unit'
          onChange={(e) => handleWarmUpChange(e)}
        >
          <option value='meter'>meters</option>
          <option value='mile'>miles</option>
          <option value='minute'>minutes</option>
        </select>
        {intervalInputFields.map((input, index) => {
          return (
            <div key={index} className='interval_form_entry'>
              <input
                id='qty_input'
                className='interval_form_entry_item'
                name='qty'
                placeholder='1'
                type='number'
                value={input.qty}
                onChange={(e) => handleFormDataChange(index, e)}
              />
              <p> x </p>
              <input
                className='interval_form_entry_item'
                name='description'
                type='number'
                placeholder='distance'
                value={input.description}
                onChange={(e) => handleFormDataChange(index, e)}
              />
              <select
                className='interval_form_entry_item'
                name='interval_unit'
                onChange={(e) => handleFormDataChange(index, e)}
              >
                <option value='meters'>meters</option>
                <option value='miles'>miles</option>
                <option value='minutes'>minutes</option>
              </select>
              <p className='interval_form_entry_item'> @ </p>
              <input
                className='interval_form_entry_item'
                name='pace'
                placeholder='pace'
                value={input.pace}
                onChange={(e) => handleFormDataChange(index, e)}
              />
              <p className='interval_form_entry_item'> with </p>
              <input
                className='interval_form_entry_item'
                name='rest'
                placeholder='rest duration'
                value={input.rest}
                onChange={(e) => handleFormDataChange(index, e)}
              />
              <select
                className='interval_form_entry_item'
                name='rest_unit'
                onChange={(e) => handleFormDataChange(index, e)}
              >
                <option value='meters'>meters</option>
                <option value='minutes'>minutes</option>
              </select>
              <p className='interval_form_entry_item'> rest </p>
            </div>
          );
        })}
        <button onClick={handleAddRepClick}>Add Rep</button>
        <br />
        <input
          className='distance_or_duration_form'
          name='cool_down_description'
          type='number'
          placeholder='cool down'
          onChange={(e) => handleCoolDownChange(e)}
        />
        <select
          className='interval_form_entry_item'
          name='cool_down_unit'
          onChange={(e) => handleCoolDownChange(e)}
        >
          <option value='meter'>meters</option>
          <option value='mile'>miles</option>
          <option value='minute'>minutes</option>
        </select>
        <br />
        <button onClick={handleIntervalFormSubmit}>
          Submit {workoutType} Form
        </button>
      </form>
      {errors ? errors.map((err) => <p>{errors}</p>) : null}
    </div>
  );
}

export default IntervalItemForm;
