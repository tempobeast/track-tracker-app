import React, { useState } from "react";

function SignUpForm({onSignUpSubmit, teams, isLoading}) {

  const [formData, setFormData] = useState({})

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSignUpSubmit(formData)
  }

  const selectTeam = teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)

  return (
    <div>
      <h1>Signup: </h1>
      <form onSubmit={handleSubmit}>
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
        <select id="type" onChange={handleChange} value={formData.type} >
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
