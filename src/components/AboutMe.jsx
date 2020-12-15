import React from 'react';
import calvinPic from '../img/calvin.jpg';

const AboutMe = () =>(
    <div class="center">
        <img src = {calvinPic} alt="Profile" width="250" height= "250"></img>
        <div class="mt-3 pb-2">
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
    </div>
)

export default AboutMe;