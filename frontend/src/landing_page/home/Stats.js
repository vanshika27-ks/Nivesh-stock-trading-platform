import React from 'react';
function Stats() {
    return ( 
       <div className='container p-3'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
             <h1 className='fs-2 mb-5'>Trust with confidence</h1>
             <h2 className='fs-4'>Built with Trust in Mind</h2>
             <p className='text-muted'>The platform is designed with a customer-first approach,
                 focusing on reliability, data integrity, and transparent system behavior throughout the trading workflow.</p>

                <h2 className='fs-4'>No Gimmicks, No Noise</h2>
                <p className='text-muted'>The system avoids unnecessary distractions such as spam, artificial gamification,
                     or intrusive notifications,ensuring a clean and focused trading experience.</p>

                <h2 className='fs-4'>A Modular Platform Ecosystem</h2>
                <p className='text-muted'>Rather than a single application, the project follows a modular architecture that allows seamless integration of multiple 
                    features and future enhancements based on user needs.</p>

                <h2 className='fs-4'>Designed for Better Financial Decisions</h2>
                <p className='text-muted'>The platform emphasizes clarity, risk awareness, and
                     informed decision-making by providing structured workflows and educational 
                     support alongside core trading functionality.</p>

         
            </div>
            <div className='col-6 p-5'>
                <img src='/media/ecosystem.png' style={{width:"90%"}}/>
                <div>
                    <a href=''className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration: "none"}}>Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Stats;