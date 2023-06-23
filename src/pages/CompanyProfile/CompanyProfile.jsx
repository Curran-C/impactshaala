import {
  chat,
  feedback,
  home,
  logout,
  savedposts,
} from "../../assets/companyProfile";
import CompanyProfileFeed from "../../components/CompanyProfileFeed/CompanyProfileFeed";
import ProfileLinks from "../../components/ProfileLinks/ProfileLinks";
import "./companyProfile.scss";

const CompanyProfile = () => {
  return (
    <div className="companyProfile">
      <div className="profileContainer">
        <div className="left">
          <button className="createpost">Create Post +</button>
          <ProfileLinks img={chat} linkText={"Chat"} />
          <ProfileLinks img={home} linkText={"Home"} />
          <ProfileLinks img={savedposts} linkText={"Saved Posts"} />
          <ProfileLinks img={feedback} linkText={"Feedbacks"} />
          <button className="logout">
            <img src={logout} alt="" />
            <span>Logout</span>
          </button>
        </div>
        <div className="right">
          <div className="intro">
            <h1>Hello, Mr. Karthik</h1>
            <p>Today is Monday, 20 Oct 2023</p>
          </div>
          <CompanyProfileFeed />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
