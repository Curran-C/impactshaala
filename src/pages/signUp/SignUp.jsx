import { useState } from "react";
import { apple, facebook, gmail } from "../../assets/signUp";
import "./signUp.scss";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUpState, setSignUpState] = useState(false);
  const [signInState, setSignInState] = useState(true);
  const navigate = useNavigate();

  const handleSignInChange = () => {
    setSignInState(true);
    setSignUpState(false);
  };

  const handleSignUpChange = () => {
    setSignInState(false);
    setSignUpState(true);
  };

  const handleSignUpSubmit = () => {
    navigate("/signup/companydetails");
  };

  const signUp = (
    <form className="signup" onSubmit={handleSignUpSubmit}>
      <h1>Sign Up</h1>
      <div className="signupButtons">
        <img src={gmail} alt="" />
        <img src={apple} alt="" />
        <img src={facebook} alt="" />
      </div>
      <div className="or">
        <hr />
        <p>Or</p>
        <hr />
      </div>
      <div className="inputs">
        <input placeholder="Enter you name" type="text" name="" id="" />
        <input placeholder="Enter you email" type="email" name="" id="" />
        <input placeholder="Enter you password" type="password" name="" id="" />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );

  const signIn = (
    <form className="signup">
      <h1>Sign In</h1>
      <div className="signupButtons">
        <img src={gmail} alt="" />
        <img src={apple} alt="" />
        <img src={facebook} alt="" />
      </div>
      <div className="or">
        <hr />
        <p>Or</p>
        <hr />
      </div>
      <div className="inputs">
        <input placeholder="Enter your email" type="email" name="" id="" />
        <input
          placeholder="Enter your password"
          type="password"
          name=""
          id=""
        />
      </div>
      <a>Forgot your password?</a>
      <button type="submit">Sign In</button>
    </form>
  );

  const signUpBlue = (
    <div className="signupblue">
      <div className="bluecontainer">
        <h1>Hello</h1>
        <p>Enter your personal details and start journey with us</p>
        <button onClick={handleSignUpChange} type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );

  const signInBlue = (
    <div className="signupblue">
      <div className="bluecontainer">
        <h1>WELCOME BACK</h1>
        <p>To Keep connected With us Please login with you login credentials</p>
        <button onClick={handleSignInChange} type="submit">
          Sign In
        </button>
      </div>
    </div>
  );

  return (
    <div className="container">
      {signUpState ? signUp : signUpBlue}
      {signInState ? signIn : signInBlue}
    </div>
  );
};

export default SignUp;
