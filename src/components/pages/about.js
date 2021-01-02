import React from 'react';
import profile from '../../img/profile.jpeg';
import '../styles/pages/about.scss';

function About() {
  return(
    <section id="about" className="anchor">
      <div className="bio">
        <h2>Hi,</h2>
        <h2>I'm Sam.</h2>
        <p>Since graduating with a Bachelor of Science in Mechanical Engineering from Carnegie Mellon, I've used my technical background to automate the boring stuff and provide transformative solutions to complex problems.</p>
        <p>By connecting my passions for mechanical engineering and programming, I have been recognized as an autonomous leader bringing about proactive change in start-up environments. My brand equity has been built off of my eagerness to delve into uncharted technologies.</p>
        <p>Currently, I am a key player in driving out losses throughout the Beauty Care business at Procter & Gamble. Professionally, I have prided myself in not only exceeding business expectations, but growing the capability of my peers in the process. In addition, I am an advocate for STEM education to increase diversity within the engineering field. I enjoy traveling to new and familiar places, exercising, and learning how to cook one bad recipe at a time. And most importantly, I would say that my greatest weakness is Candy Crush.</p>
      </div>
      <div className="profile-wrapper">
        <img className="profile" src={profile} alt="Graduate Samantha Ealy at Carnegie Mellon University"></img>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-container">
          <div className="programming">
            <h4>Programming</h4>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>C</li>
              <li>MATLAB</li>
            </ul>
          </div>
          <div className="web-dev">
            <h4>Web Development</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
            </ul>
          </div>
          <div className="mechanical">
            <h4>Mechanical</h4>
            <ul>
              <li>SolidWorks</li>
              <li>CNC Machining</li>
              <li>3D Printing</li>
              <li>Laser Cutting</li>
            </ul>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default About;