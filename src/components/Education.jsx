import React from 'react';

const list_of_class = ["Data Structures", "Algorithms & Complexity", "Software Engineering",
    "Database Management", "Linear Algebra", "Computer Networks", "Web Development", "Machine Learning", "Operating Systems"];

const Education = () =>{
    return ( <div>
            <h1> UC Irvine </h1>
            <h3> 2018-2021 </h3>
            <h3> Courseworks :</h3>
            <ul>
                {list_of_class.map((classes) => (
                    <li> {classes} </li>
                ))}
            </ul>
    </div>);
}

export default Education;