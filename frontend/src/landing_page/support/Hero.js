import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
        <div className='p-5' id='supportWrapper'>
       <h4>Support Portal</h4>    
       <a href=''>Track Tickets</a>
       
       </div>

       <div className='row p-3'>
       <div className='col-6 p-5'>
        <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
        <input placeholder='Please provide a clear description of the issue, including any relevant details'/>
        <br/>
        <a href='' style={{marginLeft : "20px"}}>Getting-started</a>
        <a href=''style={{marginLeft : "20px"}}>Account-security</a>
        <a href=''style={{marginLeft : "20px"}}>Orders-trading</a>
        <a href=''style={{marginLeft : "20px"}}>Funds-transactions</a>

       </div>
       <div className='col-6 p-5'>
        <h1 className='fs-3 '>Featured</h1>
        <ol>
            <li><a href=''style={{lineHeight : "2.5"}}>Support platform-features</a></li>
            <li><a href='' style={{lineHeight : "2.5"}}>Learn trading-basics</a></li>
        </ol>

       </div>
       </div> 
        </section>
     );
}

export default Hero;