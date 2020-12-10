import React from 'react';

const list_of_class = ["Data Structures", "Algorithms & Complexity", "Software Engineering",
    "Database Management", "Linear Algebra", "Computer Networks", "Web Development", "Machine Learning", "Operating Systems"];

const Skill = () => {
    return (
        <div class="center" id="Skills">
            <h1>Skills</h1>
            <p><b> Programming Languages </b> – Python, Java, C#, JavaScript, C++</p>
            <p><b> Frontend </b> – HTML, CSS, jQuery, JavaScript, React</p>
            <p><b> Backend </b> - NodeJS, Express, MySQL, MongoDB</p>
            <p><b> Other </b> – Linux/Unix, Unity, bash, git, Agile Development, AWS </p>
            <h2> Courseworks</h2>
            <ul>
                {list_of_class.map((classes) => (
                    <li> {classes} </li>
                ))}
            </ul>
        </div>
    );
}

export default Skill;