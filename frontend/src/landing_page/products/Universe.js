import React from 'react';

function Universe() {
  return ( 
    <div className="container my-5">
      <div className="row text-center mb-4">
        <h1>The NIVESH Ecosystem</h1>
        <p className="text-muted">
          An integrated set of modules designed to extend trading, analytics,
          portfolio management, and learning experiences.
        </p>
      </div>

      <div className="row text-center">

        <div className="col-4 p-3">
          <img src="media/smallcaseLogo.png" alt="TradeDesk" className="ecosystem-logo" />
          <p className="text-small text-muted">
            Trading and order execution interface
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/streakLogo.png" alt="Artha" className="ecosystem-logo" />
          <p className="text-small text-muted">
            Portfolio tracking and performance analysis
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/sensibullLogo.svg" alt="Insights" className="ecosystem-logo"  />
          <p className="text-small text-muted">
            Analytics, reports, and activity summaries
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img src="media/zerodhaFundhouse.png" alt="Learn" className="ecosystem-logo" />
          <p className="text-small text-muted">
            Educational content and market learning
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img src="media/goldenpiLogo.png" alt="TradeConnect API" className="ecosystem-logo" />
          <p className="text-small text-muted">
            Backend APIs and platform integrations
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img src="media/dittoLogo.png" alt="Future modules" className="ecosystem-logo"  />
          <p className="text-small text-muted">
            Planned extensions and future platform features
          </p>
        </div>
        <button className='p-3 btn btn-primary fs-5 mb-5'style={{width :"20%",margin :"0 auto"}}>Signup now</button>

      </div>
    </div>
  );
}

export default Universe;
