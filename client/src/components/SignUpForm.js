import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'


function SignUpForm() {

  const teams = useSelector((state) => state.teams.value);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })
  }

  function handleNewUserSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
    } else {
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          res.json().then((updatedUser) => {
            console.log(updatedUser)
            dispatch((setUser(updatedUser)));
          });
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }

console.log(formData)

  const selectTeam = teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)

  return (
    <div>
      <h1>Signup: </h1>
      <form onSubmit={handleNewUserSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password Confirmation: </label>
        <input
          type="password"
          id="password_confirmation"
          autoComplete="current-password"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="first_name">First Name: </label>
        <input
          type="first_name"
          id="first_name"
          autoComplete="off"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="last_name">Last Name: </label>
        <input
          type="last_name"
          id="last_name"
          autoComplete="off"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="team">Team: </label>
        <select id="team_id" onChange={handleChange} value={formData.team_id}>
            {selectTeam}
        </select>
        <br />
        <label htmlFor="type">Account Type: </label>
        <select id="type" onChange={handleChange} value={formData.type} placeholder="Select an option">
            <option defaultValue="">Select an option</option>
            <option value="Coach">Coach</option>
            <option value="Athlete">Athlete</option>
        </select>
        <br/>
        <button type="submit"> {isLoading ? "Loading..." : "Sign Up"} </button>
        {/* {errors ? errors.map((err) => <p key={err}>{err}</p>) : null} */}
      </form>
    </div>
  );
}

export default SignUpForm;
