import React from 'react';

const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <p class="nav-link">Home <span class="sr-only">(current)</span></p>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Experience">Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Extra">Extracurricular</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default NavBar;