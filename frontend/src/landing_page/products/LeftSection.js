import React from 'react';
function LeftSection({
    imageURL, productName, productDesription,
     tryDemo, LearnMore
}) {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-6 mt-5'>
                <img src={imageURL} alt="" />
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDesription}</p>
                <a href={tryDemo}>Explore features<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={LearnMore} style={{marginLeft: "50px"}}>Platform details<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
            </div>
        </div>
       </div>
     );
}

export default LeftSection;