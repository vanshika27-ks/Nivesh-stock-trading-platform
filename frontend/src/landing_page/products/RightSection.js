import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  LearnMore
}) {
  return ( 
    <div className="container">
      <div className="row align-items-center">

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          <a href={tryDemo}>
            Explore features{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <a href={LearnMore} style={{ marginLeft: "50px" }}>
            Platform details{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-6 mt-5 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
