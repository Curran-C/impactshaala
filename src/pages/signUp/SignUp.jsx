import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apple, facebook, gmail } from "../../assets/signUp";
import "./signUp.scss";

import Location from "../location/Location.jsx";

const SignUp = () => {
  // states
  const [signUpState, setSignUpState] = useState(false);
  const [signInState, setSignInState] = useState(true);
  const [companyDetailsState, setCompanyDetailsState] = useState(false);
  const [locationDetailsState, setLocationDetailsState] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    phNum: "",
    industry: "",
    tagline: "",
    description: "",
    pfp: "",
    coverPic: "",
    addressOne: "",
    addressTwo: "",
    pinCode: "",
    city: "",
    state: "",
  });
  const navigate = useNavigate();

  // function
  const handleInputChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSignInChange = () => {
    setSignInState(true);
    setSignUpState(false);
  };

  const handleSignUpChange = () => {
    setSignInState(false);
    setSignUpState(true);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setSignInState(false);
    setSignUpState(false);
    // setBlueState(false);
    setCompanyDetailsState(true);
  };

  const handleCompanySubmit = (e) => {
    e.preventDefault();
    setCompanyDetailsState(false);
    setLocationDetailsState(true);
  };

  const handleLocationSubmit = (e) => {};

  // constants
  const locationDetails = (
    <div className="location">
      <div className="signup white">
        <div className="upload">
          <span>Cover Photo</span>
          <input type="file" className="imageupload" name="filename"></input>
        </div>
      </div>

      <form className="signup" onSubmit={handleLocationSubmit}>
        <h1>Address</h1>

        <div className="inputs">
          <input required placeholder="Address 1" type="text" name="" id="" />
          <input required placeholder="Address 2" type="email" name="" id="" />
          <div className="pin">
            <input required placeholder="Pincode" type="text" />
            <input required placeholder="City" type="text" />
          </div>
          <input required type="text" placeholder="State" />
          <input required type="number" placeholder="Phone number" />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );

  const companyDetails = (
    <div className="companyDetails">
      <form className="signup" onSubmit={handleCompanySubmit}>
        <h1>Company Details</h1>

        <div className="inputs">
          <input
            required
            placeholder="Company name"
            type="text"
            name=""
            id=""
          />
          <input required placeholder="Category" type="text" name="" id="" />
          <input required placeholder="Industry" type="text" name="" id="" />
          <input required placeholder="Tag Line" type="password" />
          <textarea placeholder="Description" />
        </div>

        <button type="submit">Next</button>
      </form>

      <div className="signup white">
        <div className="upload">
          <span>Profile Picture</span>
          {/* <img src={upload} alt="" /> */}
        </div>
        <input
          required
          type="file"
          className="imageupload"
          name="filename"
        ></input>
      </div>
    </div>
  );

  const signUp = (
    <div className="signinpage">
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
          <input
            required
            placeholder="Enter you name"
            type="text"
            name=""
            id=""
          />
          <input
            required
            placeholder="Enter you email"
            type="email"
            name=""
            id=""
          />
          <input
            required
            placeholder="Enter you password"
            type="password"
            name=""
            id=""
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <div className="signupblue">
        <div className="bluecontainer">
          <h1>WELCOME BACK</h1>
          <p>
            To Keep connected With us Please login with you login credentials
          </p>
          <button onClick={handleSignInChange} type="submit">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );

  const signIn = (
    <div className="signinpage">
      <div className="signupblue">
        <div className="bluecontainer">
          <h1>Hello</h1>
          <p>Enter your personal details and start journey with us</p>
          <button onClick={handleSignUpChange} type="submit">
            Sign Up
          </button>
        </div>
      </div>
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
          <input
            required
            placeholder="Enter your email"
            type="email"
            name=""
            id=""
          />
          <input
            required
            placeholder="Enter your password"
            type="password"
            name=""
            id=""
          />
        </div>
        <a>Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );

  return (
    <div className="container">
      {signInState && signIn}
      {signUpState && signUp}
      {/* {signUp} */}
      {companyDetailsState && companyDetails}
      {locationDetailsState && locationDetails}
    </div>
  );
};

export default SignUp;
