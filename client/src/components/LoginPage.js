import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function LoginPage({ onLogin, teams }) {
  const [showLogin, setShowLogin] = useState(true);
    console.log(teams)
  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <br />
          <p className="login-form">
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} teams={teams}/>
          <p className="login-form">
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default LoginPage;
