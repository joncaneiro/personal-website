import React from "react";


function Contact() {

    return (
        <div className='text-info'>

            <h1 className='font-semibold text-lg'>CONTACT INFORMATION</h1>
                <ul className='p-10 flex flex-col justify-center items-center'>
                    <li className='secondary-btn-icon'>
                    <a href="https://www.linkedin.com/in/jon-caneiro-b69423191" >LinkedIn</a>
                    </li>   

                    <li className='secondary-btn-icon'>
                    <a href="https://github.com/joncaneiro" >GitHub</a>
                    </li>

                    <li className='secondary-btn-icon'>
                    <a href="https://google.com">Email</a>
                    </li>
                </ul>  
                
        </div>
      
    );
};


export default Contact;