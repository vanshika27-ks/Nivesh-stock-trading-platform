import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
            <div className='col-8 p-4'>
            <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3></a>
            <ul className="text-muted" style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}}>
                <li>Calculates total brokerage charges before placing a trade</li>
                <li>Supports Equity Delivery, Intraday, F&O segments</li>
                <li>Shows flat ₹20 per order brokerage (as per platform rules)</li>
                <li>Automatically computes:Brokerage,STT,Exchange transaction charges,GST
                    SEBI charges,Stamp duty</li>
                <li>Displays net profit / loss after all deductions</li>
                <li>Real-time calculation based on buy price, sell price & quantity</li>
                <li>Simple and user-friendly UI for beginners</li>
                <li>Fully integrated with the NIVESH trading workflow</li>
            </ul>

            </div>
            <div className='col-4 p-4'>
            <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
            </a>

            

            </div>
    
       </div>
       </div>
     );
}

export default Brokerage;