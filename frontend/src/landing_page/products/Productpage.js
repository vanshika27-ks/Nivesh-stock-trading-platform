import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection'; 
import RightSection from './RightSection'; 
import Universe from './Universe';

function ProductPage() {
  return ( 
    <>
      <Hero/>

      <LeftSection
        imageURL="media/kite.png"
        productName="TradeDesk"
        productDesription={`TradeDesk is a modern, web-based trading interface 
          designed for placing orders, tracking portfolios, and analyzing market 
          data through a clean and intuitive user experience.`}
        tryDemo=""
        LearnMore=""
      />

      <RightSection
        imageURL="media/console.png"
        productName="Insights"
        productDesription={`Insights is an analytics and reporting module 
          designed to help users understand their trading activity and portfolio performance
           through clear, structured data visualization. It provides detailed summaries of orders, 
           holdings, and historical performance, enabling users to track trends and evaluate outcomes over time.`}
        tryDemo=""
        LearnMore=""
      />
      <LeftSection
        imageURL="media/coin.png"
        productName="Vault"
        productDesription={`Vault is a centralized dashboard designed to help users track 
          holdings, monitor performance, and manage portfolios with clarity and precision.`}
        tryDemo=""
        LearnMore=""
      />
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="TradeConnect API"
        productDesription={`TradeConnect API enables secure communication between the frontend 
          and backend systems, supporting order execution, portfolio data access, and 
          real-time data exchange through well-defined endpoints.`}
        tryDemo=""
        LearnMore=""
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="Artha"
        productDesription={`Artha is a comprehensive portfolio management module designed 
          to provide users with a structured and transparent view of investments, enabling 
          tracking of holdings, performance monitoring, and asset allocation across instruments.`}
        tryDemo=""
        LearnMore=""
      />
      <p className='text-center mt-5 mb-5'>NIVESH is a modern, full-stack trading platform built to 
        simplify investing through clarity and technology.</p>
      <Universe/>
    </>
  );
}

export default ProductPage;
