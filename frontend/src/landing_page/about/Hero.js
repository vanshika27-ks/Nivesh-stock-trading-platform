import React from 'react';
function Hero() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 mb-5'>
       <h1 className='fs-2 text-center'>
       We changed the way India trades.
        <br />
        Now we are building what comes next.
         </h1>
           
        </div>

        <div className='row p-5 mt-5 border-top text-muted' style={{lineHeight:"1.8",fontSize:"1.2em"}}>
            <div className='col-6 p-5'>
            <p>
            This project focuses on the end-to-end development of NIVESH, a Full Stack Stock Trading
             Platform that leverages contemporary frontend and backend technologies to deliver 
             a reliable, scalable, and user-centric trading system. The implementation emphasizes 
             modular system design, data integrity, and optimized performance.
          </p> 
       <p>
       NIVESH was designed and developed independently, with in-house solutions
        implemented for trade workflow management, data handling, and backend 
        scalability across system components.
       </p>
<p>
The platform supports structured order placement
 and portfolio management through a robust, modular trading 
 ecosystem engineered to ensure performance, maintainability, and future extensibility.
</p>
            </div>
    <div className='col-6 p-5'>
    <p>
    In addition, NIVESH integrates educational and informational components aimed
     at improving user understanding of stock market concepts and trading workflows.
</p>
<p>
The platform architecture is designed to be extensible, enabling future integration
 of analytics modules, third-party services, and advanced fintech features to support
  continuous system growth and learning.
</p>
<p>
NIVESH is under active development, with ongoing enhancements focused on performance optimization,
 feature expansion, and overall system reliability.
</p>
    </div>
           
        </div>
       </div>
     );
}

export default Hero;