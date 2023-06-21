import { useNavigate } from "react-router-dom";
import { upload } from "../../assets/signUp";
import "./companyDetails.scss";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signup/companylocation");
  };

  return (
    <div className="companyDetails">
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Company Details</h1>

        <div className="inputs">
          <input placeholder="Company name" type="text" name="" id="" />
          <input placeholder="Industry" type="email" name="" id="" />
          <input placeholder="Tag Line" type="password" />
          <textarea placeholder="Description" />
        </div>

        <button type="submit">Next</button>
      </form>

      <div className="signup white">
        <div className="upload">
          <span>Select from your PC</span>
          <img src={upload} alt="" />
        </div>
        <input type="file" className="imageupload" name="filename"></input>
      </div>
    </div>
  );
};

export default CompanyDetails;
