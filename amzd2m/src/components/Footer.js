import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
        <div className="footer" >
            <div className="container">
                <div className="row" >
                    <div className="footer-col-1" >
                        {/* <h3>Download Our App</h3> */}
                        {/* <p>Download App for Android and IOS Mobile Phone</p> */}
                        <div className="app-logo" >
                            {/* <img src={playstore} alt="" />
                            <img src={appstore} alt="" /> */}
                        </div>
                    </div>
                    <div className="footer-col-2" >
                        {/* <img src={oppo} alt="" /> */}
                        <p>The Brain Developer <br/>
                        Visit Now at braindeveloper.com
                        </p>
                    </div>
                    <div className="footer-col-3" >
                        <h1>Usefull Links</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Services</li>
                           
                        </ul>
                    </div>
                    <div className="footer-col-4" >
                        <h1>Follow Us</h1>
                        <ul>
                            <li>FaceBook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className="copyright" >Copyright 2020 ©™ d2mmall</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
