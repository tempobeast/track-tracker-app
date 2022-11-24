import React, { useState } from "react";

function SignUpForm({setUser}) {

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({})

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirmation) {
      alert("Passwords do not match");
    } else {
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          password_confirmation: formData.passwordConfirmation,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          type: formData.type,
        }),
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
          });
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }

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
          id="password-confirmation"
          autoComplete="current-password"
          value={formData.passwordConfirmation}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="first-name">First Name: </label>
        <input
          type="first-name"
          id="first-name"
          autoComplete="off"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="last-name"
          id="last-name"
          autoComplete="off"
          value={formData.lastName}
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
        <select id="type" onChange={handleChange} >
            <option value="Coach">Coach</option>
            <option value="Athlete">Athlete</option>
        </select>
        <button type="submit"> {isLoading ? "Loading..." : "Sign Up"} </button>
        {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
      </form>
    </div>
  );
}

export default SignUpForm;
