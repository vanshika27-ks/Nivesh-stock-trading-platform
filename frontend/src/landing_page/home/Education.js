import React from 'react';
function Education() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='/media/education.svg' style={{width:"70%"}} alt='education'/>
            </div>
            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Market Learning Resources</h1>
                <p>An integrated learning section designed to help users understand stock market fundamentals,
                     trading concepts, and platform workflows through clear and structured content.</p>
                     <h1 className='fs-2'>Community & Discussion Support</h1>
                <p className=''>A discussion-oriented module aimed at enabling users to explore trading-related
                     questions, share insights, and improve market
                     understanding through guided interaction.</p>
                    
            </div>
        </div>
       </div>
     );
}

export default Education;