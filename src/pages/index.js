import React from 'react'
import Link from 'gatsby-link'
import profilePic from './headShot.jpg'
import './index.css'

const IndexPage = () => (
  <div>
    <h1>Hello! I'm Andrew!</h1>

    <div className="container" style={{display:"flex",}}>
      <img src={profilePic} alt="Profile Pic" style={{ width: "250px", height: "250px", borderRadius: "50%" }} />

      <div className="about" style={{display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:"0.7em"}}>
        <p>I'm an English teacher living in Japan. I've been studying programming on freeCodeCamp since 2017!<br/> I want to be part of this up coming hackathon! If possible I would like a chance to apply what I've learned!</p>
      </div>

    </div>

    <Link to="/page-2/">Check out my projects</Link>
  </div>
)

export default IndexPage
