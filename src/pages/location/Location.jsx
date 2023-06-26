import { useNavigate } from "react-router-dom";
import "./location.scss";

const Location = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/company/profile");
  };

  return (
    <div className="location">
      <div className="signup white">
        <div className="upload">
          <span>Cover Photo</span>
          <input type="file" className="imageupload" name="filename"></input>
        </div>
      </div>

      <form className="signup" onSubmit={handleSubmit}>
        <h1>Address</h1>

        <div className="inputs">
          <input placeholder="Address 1" type="text" name="" id="" />
          <input placeholder="Address 2" type="email" name="" id="" />
          <div className="pin">
            <input placeholder="Pincode" type="text" />
            <input placeholder="City" type="text" />
          </div>
          <input type="text" placeholder="State" />
          <input type="number" placeholder="Phone number" />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Location;
