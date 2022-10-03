import React from "react";

function Skills() {
    return (
        <div className='text-info'>
           <h1 className='font-semibold text-lg'>TECHNICAL SKILLS</h1>
            <ul className='p-10 flex flex-grid justify-around items-center'>
                <li className='secondary-btn-icon'> 
                JavaScript </li>
                <li className='secondary-btn-icon'> 
                NodeJS </li>
                <li className='secondary-btn-icon'> 
                ReactJS </li>
                <li className='secondary-btn-icon'> 
                Ruby on Rails </li>
            </ul>

        </div>
    );
};

export default Skills;