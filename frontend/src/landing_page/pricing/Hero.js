import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 border-botton text-center' >
            <h1>Pricing & Charges</h1>
            <h3 className='text-muted mt-3 fs-5'> A transparent breakdown of platform fees and transaction costs.</h3>
            </div>
            <div className='row p-5 mt-5 text-center'>
            <div className='col-4 p-4'>
                <img src='/media/pricingEquity.svg'/>
                <h1 className='fs-3'>Zero Brokerage Equity Delivery</h1>
                <p className='text-muted'>A self-developed trading platform feature that allows users
                     to invest in equity delivery with zero brokerage charges. 
                     The interface is designed to be clean, fast, and beginner-friendly,
                      ensuring seamless order placement and transparent pricing for long-term investors.</p>

            </div>
            <div className='col-4 p-4'>
            <img src='/media/intradayTrades.svg'/>
                <h1 className='fs-3'>Low-Cost Trading Solution</h1>
                <p className='text-muted'>This module represents a low-cost trading structure where users 
                    are charged only ₹20 per order. The goal is to provide a fair, 
                    predictable, and modern pricing approach similar to leading 
                    fintech platforms.</p>
            </div>
            <div className='col-4 p-4'>
            <img src='/media/pricingEquity.svg'/>
                <h1 className='fs-3'>Commission-Free Stock Investing</h1>
                <p className='text-muted'>A core feature of my self-made trading application that enables
                     users to buy and hold stocks without paying any brokerage on 
                     equity delivery. The design emphasizes usability, performance,
                      and a professional fintech experience.</p>
            </div>
       </div>
       </div>
     );
}

export default Hero;