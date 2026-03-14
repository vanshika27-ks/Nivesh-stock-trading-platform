import React from 'react';
function Footer() {

    return ( 
        <footer style={{backgroundColor : "rgb(240,240,240)"}}>
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                <img src="media/nivesh.svg"style={{width: "50%"}}/>
                <p> 
                   &copy; 2026, NIVESH. All rights reserved.
                </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <br />
                    <a href="'">Products</a>
                    <br />
                    <a href="">Pricing</a>
                    <br />
                    <a href="">Referral programme</a>
                    <br />
                    <a href="">Careers</a>
                    <br /> 
                    <a href="">Press & media</a>
                    <br />
                </div>
                <div className='col'>
                <p>Support</p>
                <br />
                    <a href="'">Contact</a>
                    <br />
                    <a href="">Support portal</a>
                    <br />
                    <a href="">List of Charges</a>
                    <br /> 
                    <a href="">Download & resources</a>
                    <br />
                </div>
                <div className='col'>
                <p>Account</p>
                <br />
                    <a href="'">Open an account</a>
                    <br />
                    <a href="">Fund transfer</a>
                    <br />
                    <a href="">60 day challenge</a>
                    <br />
                </div>
            </div>
            <div className="mt-5 text-muted" style={{fontSize : "14px"}}>
            <p>NIVESH is an independently developed educational project created to demonstrate full-stack
web development concepts and trading platform workflows. This application is not a registered
broker, depository participant, or financial service provider, and it does not facilitate real
money trading or investment activities.All market-related data, workflows, and features are intended solely for learning and
demonstration purposes. Users are advised not to interpret any content on this platform as
financial, investment, or trading advice.Please ensure you understand the risks associated with stock market trading before participating
in real-world investments.
</p>

<p>Users can share feedback or report issues through the platforms support or contact section. 
    Basic details such as name, email address, and a brief description of the issue may be required
     to facilitate communication.</p>

<p>This process is intended to enable clear communication, timely issue resolution, and continuous improvement
     of the platforms features and user experience.</p>

<p>To ensure account security, users are advised to keep their registered contact details such as
mobile number and email address up to date. This helps in receiving timely notifications related
to account activity and platform updates.The platform is designed for educational and demonstration purposes only and does not facilitate
real-money trading, investment execution, or financial advisory services. No stock tips,
recommendations, or guaranteed returns are provided through this project.Users should remain cautious of third parties claiming association with this platform for
offering trading tips or financial services. Any such claims should be treated as unauthorised
and misleading.</p>



   </div>
        </div>
        </footer>
     );
}

export default Footer;