import React from "react";
import Link from "gatsby-link";
import "../layouts/blog.css";
import DrawingAvatar from "../images/DrawingAvatarSquare.jpg";

const BlogPage = () => (
  <div>
    <div className="Main">
      <div className="MainGroup">
        <img src={DrawingAvatar} alt="" className="profile-img" />
        <p>Welcome!</p>
        <h1>This is my blog</h1>
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
      <h1 className="TopicHeader">August 2020</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div className="Entry">
      <p className="BlogText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis
        blandit turpis cursus in. Non enim praesent elementum facilisis leo.
        Dignissim enim sit amet venenatis urna cursus. Non sodales neque sodales
        ut etiam sit amet nisl purus. Odio euismod lacinia at quis. Leo vel orci
        porta non pulvinar neque laoreet suspendisse interdum. Enim ut tellus
        elementum sagittis vitae et. Vitae proin sagittis nisl rhoncus mattis.
        Pharetra massa massa ultricies mi quis hendrerit dolor. Aliquet eget sit
        amet tellus cras. Aliquet bibendum enim facilisis gravida neque
        convallis a cras semper. Viverra maecenas accumsan lacus vel facilisis
        volutpat. Amet tellus cras adipiscing enim eu turpis. Enim praesent
        elementum facilisis leo. <br></br>
        <br></br>
        Sed nisi lacus sed viverra tellus. Sodales ut etiam sit amet nisl. Id
        porta nibh venenatis cras. Sit amet risus nullam eget felis eget nunc
        lobortis mattis. Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Eget arcu dictum varius duis. Morbi enim nunc faucibus a pellentesque
        sit amet porttitor. Mi quis hendrerit dolor magna. Sit amet dictum sit
        amet justo donec enim diam vulputate. Et magnis dis parturient montes
        nascetur ridiculus. Imperdiet dui accumsan sit amet. Rhoncus aenean vel
        elit scelerisque mauris pellentesque pulvinar pellentesque. Urna duis
        convallis convallis tellus id interdum velit laoreet. Euismod lacinia at
        quis risus sed vulputate. Tincidunt nunc pulvinar sapien et ligula
        ullamcorper malesuada proin. <br></br>
        <br></br>
        Est pellentesque elit ullamcorper dignissim. Adipiscing tristique risus
        nec feugiat in fermentum. Tortor condimentum lacinia quis vel. Imperdiet
        proin fermentum leo vel orci. Non odio euismod lacinia at quis. Eget mi
        proin sed libero enim sed faucibus. Sit amet est placerat in egestas
        erat imperdiet. Sit amet cursus sit amet dictum sit. Tellus in metus
        vulputate eu scelerisque. In cursus turpis massa tincidunt dui ut ornare
        lectus sit. Viverra justo nec ultrices dui sapien eget mi proin. Sed
        adipiscing diam donec adipiscing. Iaculis at erat pellentesque
        adipiscing commodo elit at. Ac tincidunt vitae semper quis lectus nulla.
        Faucibus a pellentesque sit amet porttitor eget. Venenatis a condimentum
        vitae sapien pellentesque habitant. Felis imperdiet proin fermentum leo
        vel.
      </p>
    </div>
    <div id="Projects">
      <h1 className="TopicHeader">July 2020</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div className="Entry">
      <p className="BlogText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis
        blandit turpis cursus in. Non enim praesent elementum facilisis leo.
        Dignissim enim sit amet venenatis urna cursus. Non sodales neque sodales
        ut etiam sit amet nisl purus. Odio euismod lacinia at quis. Leo vel orci
        porta non pulvinar neque laoreet suspendisse interdum. Enim ut tellus
        elementum sagittis vitae et. Vitae proin sagittis nisl rhoncus mattis.
        Pharetra massa massa ultricies mi quis hendrerit dolor. Aliquet eget sit
        amet tellus cras. Aliquet bibendum enim facilisis gravida neque
        convallis a cras semper. Viverra maecenas accumsan lacus vel facilisis
        volutpat. Amet tellus cras adipiscing enim eu turpis. Enim praesent
        elementum facilisis leo. <br></br>
        <br></br>
        Sed nisi lacus sed viverra tellus. Sodales ut etiam sit amet nisl. Id
        porta nibh venenatis cras. Sit amet risus nullam eget felis eget nunc
        lobortis mattis. Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Eget arcu dictum varius duis. Morbi enim nunc faucibus a pellentesque
        sit amet porttitor. Mi quis hendrerit dolor magna. Sit amet dictum sit
        amet justo donec enim diam vulputate. Et magnis dis parturient montes
        nascetur ridiculus. Imperdiet dui accumsan sit amet. Rhoncus aenean vel
        elit scelerisque mauris pellentesque pulvinar pellentesque. Urna duis
        convallis convallis tellus id interdum velit laoreet. Euismod lacinia at
        quis risus sed vulputate. Tincidunt nunc pulvinar sapien et ligula
        ullamcorper malesuada proin. <br></br>
        <br></br>
        Est pellentesque elit ullamcorper dignissim. Adipiscing tristique risus
        nec feugiat in fermentum. Tortor condimentum lacinia quis vel. Imperdiet
        proin fermentum leo vel orci. Non odio euismod lacinia at quis. Eget mi
        proin sed libero enim sed faucibus. Sit amet est placerat in egestas
        erat imperdiet. Sit amet cursus sit amet dictum sit. Tellus in metus
        vulputate eu scelerisque. In cursus turpis massa tincidunt dui ut ornare
        lectus sit. Viverra justo nec ultrices dui sapien eget mi proin. Sed
        adipiscing diam donec adipiscing. Iaculis at erat pellentesque
        adipiscing commodo elit at. Ac tincidunt vitae semper quis lectus nulla.
        Faucibus a pellentesque sit amet porttitor eget. Venenatis a condimentum
        vitae sapien pellentesque habitant. Felis imperdiet proin fermentum leo
        vel.
      </p>
    </div>
  </div>
);
export default BlogPage;
