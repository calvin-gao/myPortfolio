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
                    <p class="nav-link">Link</p>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default NavBar;