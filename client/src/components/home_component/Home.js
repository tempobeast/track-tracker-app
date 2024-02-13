import React from "react";
import LoginPage from "../login_page/LoginPage";

function Home() {
  return (
    <div id='home'>
      <h2>Welcome to Track-it!</h2>
      <h3>Sign Up / Login to plan and track your running progress</h3>
      <LoginPage />
    </div>
  );
}
export default Home;
