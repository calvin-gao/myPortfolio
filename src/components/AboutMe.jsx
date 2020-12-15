import React from 'react';
import calvinPic from '../img/calvin.jpg';

import { SocialIcon } from 'react-social-icons';

const AboutMe = () =>(
    <div class="center">
        <img src = {calvinPic} alt="Profile" width="250" height= "250"></img>
        <div class="mt-3 pb-2">
            <span class="mr-3">
                <SocialIcon url="https://github.com/calvin-gao" />
            </span>
            <SocialIcon url="https://www.linkedin.com/in/calvin-gao/"/>
            <p class="mt-2">E-mail: calvig1@uci.edu</p>
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