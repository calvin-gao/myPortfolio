import React from 'react';

const list_of_class = ["Data Structures", "Algorithms & Complexity", "Software Engineering",
    "Database Management", "Linear Algebra", "Computer Networks", "Web Development", "Machine Learning", "Operating Systems"];

const Education = () =>{
    return ( 
    <div class="center">
            <h1> UC Irvine </h1>
            <h4> 2018-2021 </h4>
            <h5> Courseworks</h5>
            <ul>
                {list_of_class.map((classes) => (
                    <li> {classes} </li>
                ))}
            </ul>
    </div>
    );
}

export default Education;