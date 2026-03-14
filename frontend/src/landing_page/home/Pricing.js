import React from 'react';
function Pricing() {
    return ( 
      <div className='container'>
        <div className='row'>
        <div className='col-4'>
            <h1 className='mb-3 fs-2'>Simple & Transparent Pricing</h1>
            <p>Designed and implemented independently, the platform prioritizes clarity and transparency 
                in all trading and system operations.</p>
                <a href='' style={{textDecoration: "none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

        </div>
        <div className='col-2'>

        </div>
        <div className='col-6 mb-5'>
            <div className='row text-center'>
                <div className='col p-3 border'>
                <h1><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                <p>Free equity delivery and <br/>direct mutual funds</p>
                </div>
                <div className='col p-3 border'>
                <h1><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                <p>Intraday and F&O</p>
                </div>
        
            </div>

        </div>
        </div>
      </div>
     );
}

export default Pricing;