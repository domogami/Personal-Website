import React from "react";
import ProjectCard from "../components/ProjectCard.js";
import ProjectCardNoLink from "../components/ProjectCardNoLink.js";
import CasualPhoto from "../images/casualPhoto2.jpg";
import Resume from "../downloads/technical_resume.pdf";
import Light from "../images/Light.jpg";
import Office from "../images/Office.jpg";
import Time from "../images/Time.jpg";
import Profile from "../images/profile.jpg";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import LogiLeap from "../images/LogiLeapLogoCircle.png";
import Amazon from "../images/amazonLogo.png"
import IEEE from "../images/ieeelogodark.png";
import IEEEMockUp from "../images/IEEEMockUp.jpg"
{/*import AppStore from "../images/AppStore.png"*/ }
import SnowStorm from 'react-snowstorm';
var ReactRotatingText = require("react-rotating-text");

import Cursor from "../components/cursor"
function renderSnow() {
  if (typeof window !== 'undefined') {
    return (
      <SnowStorm />
    )
  }
}
function renderCursor() {
  if (typeof window !== 'undefined') {
    const cursor = new Cursor();
  }
}

const IndexPage = () => (
  <div>
    {/* <div class="cb-demo">
      <div class="cb-demo-content">
        <div class="cb-demo-container">
          <div class="cb-demo-items">
            <div class="cb-demo-row">
              <div class="cb-demo-item" data-cursor="-color-red">
                <div class="cb-demo-item-title">Set Color</div>
                <div class="cb-demo-item-text" data-cursor="-color-green">Any color via CSS class with <b>.setState('colorClass')</b> or <b>[data-cursor="colorClass"</b>] attribute</div>
              </div>
              <div class="cb-demo-item" data-cursor-text="Hello!">
                <div class="cb-demo-item-title">Set Text</div>
                <div class="cb-demo-item-text">Set text with <b>.setText('Text string')</b> or <b>[data-cursor-text="Text string"</b>] attribute</div>
              </div>
              <div class="cb-demo-item" data-cursor="-opaque">
                <div class="cb-demo-item-title">Exclusion mode</div>
                <div class="cb-demo-item-text">Exclusion or opaque mode with <b>.setState('-opaque')</b> or <b>[data-cursor="-opaque"</b>] attribute</div>
              </div>
            </div>
            <div class="cb-demo-row">
              <div class="cb-demo-item" data-cursor="-lg">
                <div class="cb-demo-item-title">Set size</div>
                <div class="cb-demo-item-text">Any size via CSS class with <b>.setState('sizeClass')</b> or <b>[data-cursor="sizeClass"</b>] attribute</div>
              </div>
              <div class="cb-demo-item" data-cursor="-exclusion -lg" data-cursor-stick="#cursor-stick-area">
                <div class="cb-demo-item-title" id="cursor-stick-area">Stick</div>
                <div class="cb-demo-item-text">Set sticky cursor with <b>.setStick(element)</b> or <b>[data-cursor-stick="selector"</b>] attribute</div>
              </div>
              <div class="cb-demo-item" data-magnetic data-cursor="-opaque">
                <div class="cb-demo-item-title">Magnetic</div>
                <div class="cb-demo-item-text">Magnetic via [data-magnetic] attribute and opaque style cursor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <div class="cb-demo-item" data-cursor="-color-white">
    
      <div className="Main">
        {/* {renderSnow()} */}
        {renderCursor()}
        <div className="MainGroup">
          <img src={Profile} alt="Profile" className="profile-img" />
          <p>Hey, I'm</p>
          <h1>Dominick Lee</h1>
          <h3>
            <ReactRotatingText
              items={["Student", "Developer", "Leader", "Designer"]}
            />
          </h3>
          <a href={Resume} download="Resume">
            Download Résumé{" "}
          </a>
          <div class="cb-demo-item" data-cursor="-color-black">
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
          </svg></div>
        </div>
      </div>
    </div>
    <div id="Projects">
      <h1 className="TopicHeader">Projects</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="11000"
    >
      <div className="Projects">
      <div class="cb-demo-item" data-cursor-text="IEEE Site!">
        <a href="https://ieeeucsd.org"><img src={IEEEMockUp} alt="IEEE" className="enlightenUI" /></a>
      </div>
        <div className="ProjectDescription">
          <ProjectCard
            title="IEEE Website"
            link="https://ieeeucsd.netlify.app"
            text="As the IEEE UCSD Webmaster, I created IEEE UCSD's main website using React. The site is responsive and features engaging animations with a minimalist user interface."
          />
        </div>
      </div>
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="11000"
    >
      <div className="Projects">
        <div className="ProjectDescription">
          <ProjectCard
            title="Office Inc."
            link="https://github.com/domogami/Office-Simulator"
            text="Office Inc. is an iOS game coming soon to the App Store. You are in the shoes of an averege office employee and make decisions leading you closer down the path of your choosing. You can discover the dark secrets of the company or find some office romance."
          />
        </div>
        <div class="cb-demo-item" data-cursor-text="Git Code!">
          <a href="https://github.com/domogami/Office-Simulator"><img src={Office} alt="Office" className="enlightenUI" /></a>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="11000"
    >
      <div className="Projects">
        
        <div class="cb-demo-item" data-cursor-text="App Store!">
          <a href="https://apps.apple.com/us/app/timezone-hero/id1521513208"><img src={Time} alt="Timezone App" className="enlightenUI" /></a>
        </div>
        <div className="ProjectDescription">
          <ProjectCard
            title="TimeZone Hero"
            link="https://apps.apple.com/us/app/timezone-hero/id1521513208"
            text="TimeZone Hero is an application that shows the user the current time in different regions. Uniquely, the user can alter the time in one zone and see all corresponding timezone changes across regions, making scheduling meetings a breeze. Coming soon to the AppStore"
          />
        </div>
      </div>
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="11000"
    >
      <div className="Projects">
        <div className="ProjectDescription">
          <ProjectCard
            title="enLIGHTen"
            link="https://github.com/domogami/enLIGHTen"
            text="enLIGHTEN is an IEEE First Place project that allows users to not only control light switches from an app but also enable a machine learning camera to turn on only the lights in the area you are currently in. The project earned first place at UCSD's IEEE Branch QP Competiton and made use of SwiftUI, Python, ESPs, and a Raspberry pi"
          />
        </div>
        <div class="cb-demo-item" data-cursor-text="Git Code!">
          <img src={Light} alt="Enlighten App" className="enlightenUI" />
        </div>
      </div>
    </div>

    <div id="Experience">
      <h1 className="TopicHeader">Experience</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="11000"
    >
      <div className="ExperienceCard">
        <img src={Amazon} alt="Amazon" className="ExperienceImage" />
        <div className="ExperienceText">
          <h1>Amazon SDE Internship</h1>
          <p>
            Preparing for a Summer 2021 Software Development Engineering Internship at Amazon!
          </p>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="11000"
    >
      <div className="ExperienceCard">
        <img src={LogiLeap} alt="logileap" className="ExperienceImage" />
        <div className="ExperienceText">
          <h1>iOS Development Internship</h1>
          <p>
            Developed three mobile applications including a timezone converting
            app, augmented reality app and a grocery application using Firebase,
            SwiftUI and ARKit
          </p>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="11000"
    >
      <div className="ExperienceCard">
        <img src={IEEE} alt="IEEE" className="ExperienceImage" />
        <div className="ExperienceText">
          <h1>IEEE Officer - Webmaster</h1>
          <p>
            Developed IEEE San Diego Branch Website using React with Javascript,
            CSS and HTML
          </p>
        </div>
      </div>
    </div>

    <div id="AboutMe">
      <h1 className="TopicHeader">About Me</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div className="AboutMe">
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        data-aos-duration="11000"
      >
        <img src={CasualPhoto} alt="Profile" className="CasualPhoto" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        data-aos-duration="11000"
      >
        <div className="AboutMeDescription">
          <ProjectCardNoLink
            title="I'm Dominick Lee"
            text="I am a Junior at UC San Diego in search of a software development internship. I have varied experience with Swift, SwiftUI, Python, Java, C, C++, ARM, HTML, CSS, Javascript, React, React Native, and Dart. I hope to expand my skillsets and be an asset to an employer willing to provide me with an opportunity."
          />
        </div>
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
