import React from 'react';
function Awards() {
    return ( 
   <div className='container mt-5'>
    <div className='row'>
        <div className='col-6 p-5'>
            <img src='/media/largestBroker.svg' alt='largestBroker'/>
        </div>
        <div className='col-6 p-5 mt-5'>
            <h1>Full Stack Stock Trading Platform</h1>
            <p className='mb-5'>This project is designed to support core trading and investment workflows commonly used
                 in modern stock trading systems, enabling users to explore and interact 
                 with multiple market instruments through a unified platform: </p>
                 <div className='row'>
        <div className='col-6'>
                 <ul>
                       <li>
                        <p>Futures and Options</p>
                        </li>
                       <li>
                        <p>Commodity derivatives</p>
                        </li>
                         <li>
                        <p>Currency derivatives</p>
                        </li>
                 </ul>
        </div>
        <div className='col-6'>  
                   <ul>
                    <li>
                        <p>Stock and IPOs</p>
                        </li>
                    <li>
                        <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                        </ul>
        </div>
        </div>
        <img src='/media/pressLogos.png' style={{width : "90%"}}/>
        </div>
        </div>
        </div>

   
   
     );
}

export default Awards;