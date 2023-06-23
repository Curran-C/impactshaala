import { corporate, location } from "../../assets/companyProfile";
import Hex from "../Hex/Hex";
import ProfileLinks from "../ProfileLinks/ProfileLinks";
import "./companyProfileFeed.scss";

const CompanyProfileFeed = () => {
  return (
    <div className="profile">
      <div className="coverimg">
        <img src="https://picsum.photos/1000/300" alt="" />
      </div>
      <div className="info">
        <div className="info-container">
          <div className="pfp-text">
            <img className="pfp" src="https://picsum.photos/200/300" alt="" />
            <div className="company-info">
              <h3>Company Name</h3>
              <div className="profile-links">
                <img className="img" src={corporate} alt="" />
                <span className="linkText">corporate</span>
              </div>
              <div className="profile-links">
                <img className="img" src={location} alt="" />
                <span className="linkText">location</span>
              </div>
            </div>
            <div className="company-about">
              <p>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </div>
          </div>
          <div className="stats">
            <Hex />
          </div>
        </div>
      </div>

      <div className="feed">
        <div className="achievements">
          <h2>Achieviements</h2>
          <div className="achievements-container">
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
          </div>
        </div>

        <div className="posts">
          <h2>Your Posts</h2>
          <div className="post-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileFeed;
