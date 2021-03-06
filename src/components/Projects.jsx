import React from 'react';

const Project = () => {
    return(
        <div id="Projects">
            <h1 class="pad-bot">Projects</h1>
            <h4>FoodPicker</h4>
            <h5><em>Implemented with : JavaScript, NodeJS · Sep 2019</em></h5>
            <p>Link to Project: <a href="https://github.com/calvin-gao/FoodPicker">https://github.com/calvin-gao/FoodPicker</a></p>
            <ul>
                <li>Created a web app that recommends users restaurants based on user specified parameters.</li>
                <li>Deployed using Heroku and incorporated Yelp user photos in search results.</li>
                <li>Incorporated YelpAPI and Google Maps Geolocation API.</li>
            </ul>

            <h4>TopMovies</h4>
            <h5><em>Implemented with : Java, AWS, MySQL  ·  March 2020</em></h5>
            <ul>
                <li>Developed web app selling movies to users using Java Servlets, AWS EC2 Instance, and MySQL.</li>
                <li>Implemented MySQL queries with JDBC to fetch database information within AWS.</li>
                <li> Incorporated Connection Pooling and improved query speed by 25%</li>
            </ul>

            <h4>ZotBoba</h4>
            <h5><em>Implemented with : NodeJS    July 2019</em></h5>
            <ul>
                <li>Created a RESTful API using the MERN stack, with user authentication.</li>
                <li>Incorporated responsive web design with fully functional forms.</li>
                <li>Created personal database for users and posts using MongoDB.</li>
            </ul>

            <h4>W-Warriors</h4>
            <h5><em>Implemented with : Unity, C#  ·  Jan. 2018 </em></h5>
            <ul>
                <li>Developed a mobile clicker game and launched on the Google Play Store with 500+ users.</li>
                <li>Assisted in deployment and optimizing run time by 20%.</li>
                <li>Improved database performance speed by 30%.</li>
            </ul>
        </div>
    )
}



export default Project;