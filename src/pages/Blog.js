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
        I went to visit my Grandma's house to help my dad clear his old things
        out and I found my uncles old road bike. He said I could have it so I
        brought it back and began restoring it. I now have a beautiful 1989
        Bianchi SuperLeggera and have began cycling! I'm considering joining the
        UCSD Cycling team to see where that leads me.
        <br></br>
        <br></br>
      </p>
    </div>
    <div id="Projects">
      <h1 className="TopicHeader">July 2020</h1>
      <h1 className="FancyRectangle"></h1>
    </div>
    <div className="Entry">
      <p className="BlogText">
        At the time of writing this I have been interning with LogiLeap for a
        little over a month. During that time I had the opportunity to connect
        with some incredible people and collaborate on an Augmented Reality
        application. Additionally, I singlehandedly made a time zone converstion
        app using SwiftUI that I am told will be published to the App Store
        soon! LogiLeap is an amazing company that does some amazing work and I
        am proud to be an intern here.
        <br></br>
        <br></br>
        With the help of some friends, I have been able to start development of
        a passion project called Office Inc. which is an iOS mobile game about
        an average office employee who slowly uncovers the dark secrets about
        the company they work for. The game features a non-linear storyline and
        can be played dozens of times with interesting and unique endings! With
        the help of two of my friends, I was able to make this vision into a
        reality. My friend Max Zekowski wrote the storylines and my friend Eric
        drew all illusrations by hand using Adobe Illustrator. Combined, this
        application may become a reality with a little more work from my friends
        and me.
        <br></br>
        <br></br>
        This summer I have done some traveling to Bakersfield and San Francisco
        to visit my Grandmother's grave. She passed away this Spring and I was
        unable to go to her funeral because of Covid but I am thankful that I
        was able to have some sort of gathering months later. Quarentine has
        been a unique experience and I have used the time for self-reflection
        and self-improvement. I've learned so many new skills and I hope that I
        will come away from this summer with more passion and an even greater
        number of tools to achieve my dream of becoming a Software Engineer.
        <br></br>
        <br></br>
        On a personal note, I am lucky enough to live about 2 hours away from my
        girlfriend and have been able to commute to visit her around once a
        week. She inspires me to work harder but to maintain a healthy balance
        of exercise, sleep, hobbies and work.
      </p>
    </div>
  </div>
);
export default BlogPage;
