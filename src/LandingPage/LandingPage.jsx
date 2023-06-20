import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./landingPage.scss";

import {
  aboutus1,
  aboutus2,
  corevalue1,
  heroImage,
} from "../assets/landingPage/index.js";
import Card from "../components/Card/Card";
import { coreValues } from "../constants";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navbar />
      {/* background circle */}
      <div className="dot"></div>

      {/* hero */}
      <div className="hero">
        <div className="heroContainer">
          <div className="left">
            <span>
              &quot;A Social startup helping students discover their full
              Potential&quot;
            </span>
          </div>
          <div className="right">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>

      {/* core values */}
      <div className="coreValues">
        <div className="coreValuesContainer">
          {/* titles */}
          <div className="titleContainer">
            <div className="titleWrapper">
              <div className="line"></div>
              <span className="title">Core Values</span>
            </div>
            <span className="subTitle">
              Lorem ipsum dolor sit amet consectetur, Qorem ipsum dolor sit amet
              consectetur
            </span>
          </div>

          {/* card */}
          <div className="cardContainer">
            {coreValues.map((coreValue) => (
              <Card
                key={coreValue.img}
                img={coreValue.img}
                title={coreValue.title}
                text={coreValue.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* video */}
      <div className="videoSection">
        <div className="videoSectionContainer">
          {/* title */}
          <div className="titleContainer">
            <div className="titleWrapper">
              <div className="line"></div>
              <span className="title">
                We are the Trailblazers of Innovation. We are ImpactShaala
              </span>
            </div>
          </div>

          {/* video placeholder */}
          <div className="videoPlaceholder"></div>
        </div>
      </div>

      {/* before about us */}
      <div className="beforeAboutUs">
        <div className="beforeAboutUsContainer">
          <div className="beforeAboutUsWrapperOne">
            {/* left */}
            <div className="left">
              {/* title1 */}
              <div className="titleContainer">
                <div className="line"></div>
                <span className="title">
                  Learn, Explore & Build your Future.
                </span>
              </div>
              {/* text */}
              <div className="textContainer">
                <span>
                  Welcome to Impactshaala, a collaborative platform that brings
                  together key stakeholders – including educational
                  institutions, students, corporations, social organizations and
                  citizens – to work together to address the pressing challenges
                  facing the education system in India and build a stronger and
                  more inclusive society.
                </span>
                <span>
                  Our platform provides a space for collaboration and
                  cooperation, enabling stakeholders to share resources, ideas,
                  and expertise, and to work together to achieve their aligned
                  goals. We are committed to supporting education and social
                  development, and to helping students discover their passions
                  and interests, and develop the skills and knowledge they need
                  to succeed in life.
                </span>
              </div>
            </div>

            {/* right */}
            <div className="right">
              <img src={aboutus1} alt="" />
            </div>
          </div>

          <div className="beforeAboutUsWrapperTwo">
            {/* left */}
            <div className="left">
              <img src={aboutus2} alt="" />
            </div>

            {/* right */}
            <div className="right">
              {/* title1 */}
              <div className="titleContainer">
                <div className="line"></div>
                <span className="title">What We are Building & Why....</span>
              </div>
              {/* text */}
              <div className="textContainer">
                <span>
                  Our startup is focused on creating a centralized platform that
                  connects all key education stakeholders, including educators,
                  learners, schools, and organizations. Our platform aims to
                  simplify the process of resource sharing and make educational
                  materials more accessible to everyone
                </span>
                <span>
                  To provide equal access to quality education, resources and
                  opportunities to students from all background through their
                  educational institutions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="aboutus">
        <div className="aboutusContainer">
          <div className="titleContainer">
            <div className="titleWrapper">
              <div className="line"></div>
              <span className="title">About Us</span>
            </div>
            <div className="textContainer">
              <span>
                Impactshaala was founded by Pratap Sonkar in the year 2022, who
                saw the need for a more inclusive and responsive education
                system that could support the development of a stronger and more
                equitable society
              </span>
            </div>
          </div>

          <div className="threequestions">
            <div className="firstQuestionContainer">
              <div className="firstQuestionWrapper">
                <h3>What are we?</h3>
                <p></p>
              </div>
            </div>
            <div className="secondQuestionContainer">
              <div className="secondQuestionWrapper">
                <h3>Who are we?</h3>
                <p></p>
              </div>
            </div>
            <div className="thirdQuestionContainer">
              <div className="thirdQuestionWrapper">
                <h3>How?</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
