import React from "react";
import ProjectCard from "../components/ProjectCard.js";
import ProjectCardNoLink from "../components/ProjectCardNoLink.js";
import CasualPhoto from "../images/casualPhoto2.jpg";
import Resume from "../downloads/technical_resume.pdf";
import Light from "../images/Light.png";
import Office from "../images/Office.png";
import Time from "../images/Time.png";
import Profile from "../images/profile.jpg";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import LogiLeap from "../images/LogiLeapLogoCircle.png";
import IEEE from "../images/ieeelogodark.png";
var ReactRotatingText = require("react-rotating-text");

const IndexPage = () => (
  <div>
    <div className="Main">
      <div className="MainGroup">
        <img src={Profile} alt="" className="profile-img" />
        <p>Hey, I'm</p>
        <h1>Dominick Lee</h1>
        {/* A JSX comment */}
        <h3>
          <ReactRotatingText
            items={["Student", "Developer", "Leader", "Designer"]}
          />
        </h3>

        <a href={Resume} download="Resume">
          Download Résumé{" "}
        </a>
        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="#EFEEEE">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
            />
          </path>
        </svg>
      </div>
    </div>
    <div id="Projects">
      <h1 className="TopicHeader">Projects</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div className="Projects">
      <div className="ProjectDescription">
        <ProjectCard
          title="Office Inc."
          link="https://github.com/domogami/Office-Simulator"
          text="Office Inc. is an iOS game coming soon to the App Store. You are in the shoes of an averege office employee and make decisions leading you closer down the path of your choosing. You can discover the dark secrets of the company or find some office romance."
        />
      </div>
      <img src={Office} className="enlightenUI" />
    </div>
    <div className="Projects">
      <img src={Time} className="enlightenUI" />
      <div className="ProjectDescription">
        <ProjectCard
          title="TimeZone Hero"
          link="https://github.com/domogami/"
          text="TimeZone Hero is an application that shows the user the current time in different regions. Uniquely, the user can alter the time in one zone and see all corresponding timezone changes across regions, making scheduling meetings a breeze. Coming soon to the AppStore"
        />
      </div>
    </div>
    <div className="Projects">
      <div className="ProjectDescription">
        <ProjectCard
          title="enLIGHTen"
          link="https://github.com/domogami/enLIGHTen"
          text="enLIGHTEN is an IEEE First Place project that allows users to not only control light switches from an app but also enable a machine learning camera to turn on only the lights in the area you are currently in. The project earned first place at UCSD's IEEE Branch QP Competiton and made use of SwiftUI, Python, ESPs, and a Raspberry pi"
        />
      </div>
      <img src={Light} className="enlightenUI" />
    </div>

    <div id="Experience">
      <h1 className="TopicHeader">Experience</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div className="ExperienceCard">
      <img src={LogiLeap} className="ExperienceImage" />
      <div className="ExperienceText">
        <h1>iOS Development Internship</h1>
        <p>
          Developed three mobile applications including a timezone converting
          app, augmented reality app and a grocery application using Firebase,
          SwiftUI and ARKit
        </p>
      </div>
    </div>
    <div className="ExperienceCard">
      <img src={IEEE} className="ExperienceImage" />
      <div className="ExperienceText">
        <h1>IEEE Officer - Webmaster</h1>
        <p>
          Developed IEEE San Diego Branch Website using React with Javascript,
          CSS and HTML
        </p>
      </div>
    </div>

    <div id="AboutMe">
      <h1 className="TopicHeader">About Me</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div className="AboutMe">
      <img src={CasualPhoto} className="CasualPhoto" />
      <div className="AboutMeDescription">
        <ProjectCardNoLink
          title="I'm Dominick Lee"
          text="I am a second year at UC San Diego in search of a software development internship. I have varied experience with Swift, Python, Java, C, ARM, HTML, CSS, Javascript, React, and React Native. I hope to expand my skillsets and be an asset to an employer willing to provide me with an opportunity."
        />
      </div>
    </div>
    <div className="footer">
      <ul>
        <li>
          <a href="https://www.facebook.com/d314lee">
            <i className="fa fa-facebook"></i>{" "}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dom3_lee">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/domogami/">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/domogami">
            <i className="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default IndexPage;
