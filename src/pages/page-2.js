import React from 'react'
import Link from 'gatsby-link'
import whaleProject from './whaleProject.gif'
import twitchProject from './twitch.gif'

const SecondPage = () => (
  <div>
    <h1>Projects</h1>
    <h3>Whale Sightings Map</h3>
    <img src={whaleProject} alt="project1" />
    <h4>Description:</h4>
    <p>This is a map of recent whale sightings in the Seattle Area. It's was built with React.js, Google Maps API, and google-map-react. Whale sightings data was provided by <a
      href="https://whalemuseum.org/" target="_blank"
      rel="noopener noreferrer"> The Whale Museum</a>'s API. The project is not live yet but the code is posted on Github and can be viewed <a
        href="https://github.com/AndrewZamora/Whale-Sightings-Map" target="_blank"
        rel="noopener noreferrer">here</a>.</p>
    <h3>Twitch TV Dashboard</h3>
    <img src={twitchProject} alt="project2"/>
    <h4>Description:</h4>
    <p>This project is a simple dashboard that shows a set of Twitch users and whether or not they are online. This project with created with HTML, CSS and Vanilla Javascript and Twitch API data provided by freeCodeCamp. A live demo can be viewed <a
        href="https://codepen.io/Supra_01/full/vdwZLG/" target="_blank"
        rel="noopener noreferrer">here</a> and code can be viewed <a
        href="https://codepen.io/Supra_01/pen/vdwZLG" target="_blank"
        rel="noopener noreferrer">here</a>. </p>
        <p>You can checkout more of my projects on 
        <a
        href="https://github.com/AndrewZamora" target="_blank"
        rel="noopener noreferrer">GitHub</a> and <a
        href="https://codepen.io/Supra_01" target="_blank"
        rel="noopener noreferrer">Codepen</a> </p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
