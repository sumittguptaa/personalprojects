import React from 'react'
import Navbar from './Navbar'
import "./Contactus.css"

function Contactus() {
    return (
        <div>
            <section className="contact" >
                <div className="content" >
                    <h2>Contact us</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the pri
                    </p>
                    <div className="container" >
                        <div className="contactInfo" >
                            <div className="box" >
                                <div className="icon" ><i class="fa fa-map-marker" aria-hidden="true"></i> </div>
                                <div className="text" >
                                    <h3>Address</h3>
                                    <p>Indira Nagar , Padrauna <br/>Kushinagar 274304 <br/>Uttar Pradesh</p>
                                </div>
                                </div>
                                <div className="box" >
                                <div className="icon" ><i class="fa fa-phone" aria-hidden="true"></i></div>
                                <div className="text" >
                                    <h3>Phone</h3>
                                    <p>9793043590</p>
                                </div>
                                </div>
                                <div className="box" >
                                <div className="icon" ><i class="fa fa-envelope" aria-hidden="true"></i> </div>
                                <div className="text" >
                                    <h3>Email</h3>
                                    <p>sanjaylccgupta@gmail.com</p>
                                </div>
                                </div>
                        </div>
                            <div className="contactForm" >
                                <form>
                                    <h3>Send Message</h3>
                                    <div className="inputBox" >
                                        <input type="text" required="required" name="" />
                                            <span>Full Name</span>
                                    </div>
                                    <div className="inputBox" >
                                        <input type="text" required="required" name="" />
                                            <span>E-Mail</span>
                                    </div>
                                    <div className="inputBox" >
                                    <textarea required="required" />
                                            <span>Type Your Message</span>
                                    </div>
                                    <div className="inputBox" >
                                        <input type="submit" name="" value="Send" />
                                            
                                    </div>
                                </form>
                            </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contactus
