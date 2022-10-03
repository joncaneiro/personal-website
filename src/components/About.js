import React from "react";
import Skills from "./Skills";


function About() {

    return (
        <div>
            <div className='text-info'>
                <h1 className='font-semibold text-lg'>ABOUT JON CANEIRO</h1>
                    <p className='p-10'>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                    odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia 
                    </p>
             </div>

             <Skills />

        </div>
    );
};


export default About;