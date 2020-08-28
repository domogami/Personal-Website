import React, { Component } from "react";
import "./ProjectCard.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

class ProjectCard extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  render() {
    return (
      <div className="Card">
        <h1>{this.props.title}</h1>
        <p className="ProjectInfo">{this.props.text}</p>
        <div id="container">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <a href={this.props.link} className="button-text">
              Learn More
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
