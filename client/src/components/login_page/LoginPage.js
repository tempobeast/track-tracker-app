import { useState } from "react";
import LoginForm from "../login_form/LoginForm";
import SignUpForm from "../sign_up_form/SignUpForm";

function LoginPage({ onLogin, teams, onSignUpSubmit, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} setUser={setUser} />
          <br />
          <p className='login-form'>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm
            onLogin={onLogin}
            teams={teams}
            onSignUpSubmit={onSignUpSubmit}
          />
          <p className='login-form'>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default LoginPage;
