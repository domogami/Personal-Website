import React from 'react'
import './ProjectCard.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const ProjectCardNoLink = props => (
  <div className="Card">
    <h1>{props.title}</h1>
    <p className="ProjectInfo">{props.text}</p>
  </div>
)

export default ProjectCardNoLink
