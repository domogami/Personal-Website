import React from 'react'
import './ProjectCard.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const ProjectCard = props => (
  <div className="Card">
    <h1>{props.title}</h1>
    <p className="ProjectInfo">{props.text}</p>
    <div id="container">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <a href={props.link} className="button-text">
          Learn More
        </a>
      </button>
    </div>
  </div>
)

export default ProjectCard
