import React from 'react';
import calvinPic from '../img/calvin.jpg';

const AboutMe = () =>(
    <div>
        <h1>About Me</h1>
        <img src = {calvinPic} alt="Profile" width="150" height= "150"></img>
        <p>E-mail: calvig1@uci.edu</p>
        <p>

            Senior studying Computer Science at the University of California, Irvine. I'm passionate about software development and web development. I am actively seeking full time positions/ new grad internships for Software Engineering. I will graduate in March 2021.
        </p>
        <p>
            Specialties:
            Skills: Java, Python, , C++, SQL, JavaScript, HTML/CSS, Node.js
            Tool: Eclipse, Visual Studio Code, Git, Unix
        </p>
    </div>
)

export default AboutMe;