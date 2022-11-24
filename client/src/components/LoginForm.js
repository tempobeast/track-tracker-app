import { useState } from "react";

function LoginForm({setUser}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      } else {
        res.json().then((data) => setErrors(data.errors));
      }
    });
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div >
      <h1 className="login-form">Login:</h1>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="username">
          Username:{" "}
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />
        <label className="label" htmlFor="password">
          Password:{" "}
        </label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button type="submit"> {isLoading ? "Loading..." : "Login"} </button>
        {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
      </form>
    </div>
  );
}

export default LoginForm;
