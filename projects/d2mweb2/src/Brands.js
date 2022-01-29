import React from "react"

import godrej from "./brands/godrej.png";
import oppo from "./brands/oppo.png";
import paypal from "./brands/paypal.png";
import philips from "./brands/philips.png";
import coca from "./brands/coca.png";
import appstore from "./brands/appstore.png";
import playstore from "./brands/playstore.png";
import "./Brands.css";

function Brand(){
    return (
        <div>
        <div className="brands" >
            <div className="small-container" >
                <div className="row" >
                    <div className="col-5">
                        <img src={godrej}  alt="er"/>
                    </div>
                    <div className="col-5">
                        <img src={oppo}  alt="er"/>
                    </div>
                    <div className="col-5">
                        <img src={philips}  alt="er"/>
                    </div>
                    <div className="col-5">
                        <img src={paypal}  alt="er"/>
                    </div>
                    <div className="col-5">
                        <img src={coca}  alt="er"/>
                    </div> 
                </div>
            </div>

        </div>
        <div className="footer" >
            <div className="container">
                <div className="row" >
                    <div className="footer-col-1" >
                        <h3>Download Our App</h3>
                        <p>Download App for Android and IOS Mobile Phone</p>
                        <div className="app-logo" >
                            <img src={playstore} alt="" />
                            <img src={appstore} alt="" />
                        </div>
                    </div>
                    <div className="footer-col-2" >
                        <img src={oppo} alt="" />
                        <p>The New Generation Shopping Mall . <br/>
                        Order Now at d2mmall.com
                        </p>
                    </div>
                    <div className="footer-col-3" >
                        <h1>Usefull Links</h1>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
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
export default Brand