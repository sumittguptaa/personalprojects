import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';


import Header from './Header'

import a from './image/a.jpg'
import b from './image/b.jpg'
import c from './image/c.jpg'
import d from './image/d.jpg'
import e from './image/e.jpg'
import f from './image/f.jpg'
import g from './image/g.jpg'
import h from './image/h.jpg'
import i from './image/i.jpg'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
function Home() {

    return (
        <div>
            <Header />
            <section id="hero-banner" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-5 my-auto mr-auto " >
                            <h1 className="h1 h1-responsive" >Find Your Next Perfect Place to live </h1>
                            <p>In expecting display, thoughtIn expecting display, thought In expecting display, thought</p>
                            <button className="btn btn-theme-2" >Learn More</button>
                            <button className="btn btn-play ml-3" ><i className="fas fa-play" ></i></button>
                        </div>
                        <div className="col-md-5 ml-auto " >
                            <div className="image"  >
                                <img src={a} className="image1" alt="asdfgh" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="search-section" >
                <div className="container" >
                    <div className="col-md-10 mx-auto "  >
                        <div className="row" >
                            <div className="col-md-3" >
                                <select>
                                    <option>Mumbai</option>
                                    <option>Gurgaon</option>
                                    <option>Noida</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Location" />
                            </div>
                            <div className="col-md-3" >
                                <select>
                                    <option>Property Type</option>
                                    <option>Gurgaon</option>
                                    <option>Noida</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Location" />
                            </div>
                            <div className="col-md-3 " >
                                <select>
                                    <option>Property Type</option>
                                    <option>Gurgaon</option>
                                    <option>Noida</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Location" />
                            </div>
                            <div className="col-md-2 ml-auto" >
                                <button className="btn btn-theme-2" >Search</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="about-section" className="my-5" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-6 images "  >
                            <img src={a} alt="asdfgh" className="image1" />
                        </div>
                        <div className="col-md-5  " >
                            <h6 className="h6 color-primary" >About</h6>
                            <h1 className="h1 h1-responsive">We Provide the best infrastructure</h1>
                            <p>srhrhsst efdsadfsfhfb frhf fhb gfnv frh rfbrbr tfgngt g gftdmn gd dffdn  </p>
                            <br />
                            <p>dhftfbkjyu,cxthfbgkg,gjgkhfgfgbhmvhfmhbmvmh</p>
                            <button className="btn btn-theme-2" >Learn More</button>
                            <button className="btn btn-play ml-3" ><i className="fas fa-play" ></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services-section" className="my-5" >
                <div className="container" >
                    <div className="col-md-10 mx-auto" >
                        <div className="row" >
                            <div className="col-md-4 shadow service-show" >
                                <i className="fas fa-user" ></i>
                                <h4 className="h4" >Make Your Dream True </h4>
                                <p>Qwero eiie dj df f eferw ewd  w wr wr erw  ewrweq wfkv  ekvkg ekfkd egr sdg wdg dfg </p>
                            </div>
                            <div className="col-md-4 shadow service-show" >
                                <i className="fas fa-desktop" ></i>
                                <h4 className="h4" >Start Your New Membership </h4>
                                <p>Qwero eiie dj df f eferw ewd  w wr wr erw  ewrweq wfkv  ekvkg ekfkd egr sdg wdg dfg </p>
                            </div>
                            <div className="col-md-4 shadow service-show " >
                                <i className="fas fa-home" ></i>
                                <h4 className="h4" >Enjoy your new home </h4>
                                <p>Qwero eiie dj df f eferw ewd  w wr wr erw  ewrweq wfkv  ekvkg ekfkd egr sdg wdg dfg </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="property-section" >
                <Swiper freeMode={true} loop={true} slidesPerView={1} breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 50
                    }

                }} spaceBetween={30} pagination={{
                    "clickable": true
                }} className="mySwiper">

                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={a} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-0" >Palace</h4>
                                    <p className="m-0" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={b} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-0" >Palace</h4>
                                    <p className="m-0" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={c} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-O" >Palace</h4>
                                    <p className="m-O" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={d} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-O" >Palace</h4>
                                    <p className="m-O" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={e} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-O" >Palace</h4>
                                    <p className="m-O" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={f} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-O" >Palace</h4>
                                    <p className="m-O" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={g} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-O" >Palace</h4>
                                    <p className="m-O" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={h} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-O" >Palace</h4>
                                    <p className="m-O" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="property-list" >
                            <div className="image-slider" >
                                <img src={i} alt="eider" />
                            </div>
                            <div className="text-right" >
                                <h4>$45.459</h4>
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div className="item" >
                                    <h4 className="h5 m-O" >Palace</h4>
                                    <p className="m-O" >City,Country</p>
                                </div>
                                <div className="item d-flex align-self-center" >
                                    <i className="fas fa-bed mx-3 align-self-center "></i>
                                    <span>5</span>
                                    <i className="fas fa-bath mx-3 align-self-center "></i>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section id="feature-section" >
                <div className="container" >
                    <h6 className="h6 color-primary m-0" >Recent</h6>
                    <h1 className="h1 h1-responsive mb-4" >Our Featured Properties</h1>
                    <p>gdjsdewjn diwen wr w wrj wr3r eoilk egt rg ei e3 er idflrk  dgtk3 etgk <br /> gdjsdewjn diwen wr w wrj wr3r eoilk egt rg ei e3 er idflrk  dgtk3 etgk  </p>
                    <br />
                    <div className="row" >
                        <div className="col-md-3 mx-auto " >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={a} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto" >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={b} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto" >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={b} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto" >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={c} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto" >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={d} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto" >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={e} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto" >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={f} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto" >
                            <div className="property-list" >
                                <div className="image-slider" >
                                    <img src={g} alt="eider" />
                                </div>
                                <div className="text-right" >
                                    <h4>$45.459</h4>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div className="item" >
                                        <h4 className="h5 m-O" >Palace</h4>
                                        <p className="m-O" >City,Country</p>
                                    </div>
                                    <div className="item d-flex align-self-center" >
                                        <i className="fas fa-bed mx-3 align-self-center "></i>
                                        <span>5</span>
                                        <i className="fas fa-bath mx-3 align-self-center "></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
            <section id="footer" >
                    <div className="container" >
                        <div className="row" >
                            <div className="col-md-2" >
                                <h4 className="h4" >Brand</h4>
                            </div>
                            <div className="col-md-2" >
                                <h6 className="h6 m-0" >Quick Links</h6>
                                <hr/>
                                <ul>
                                    <li><a href="/" >Architecture</a></li>
                                    <li><a href="/" >Agency</a></li>
                                    <li><a href="/" >Asset Evaluation</a></li>
                                    <li><a href="/" >Building </a></li>
                                    <li><a href="/" >Business Rates</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2" >
                            <h6 className="h6 m-0" >Location</h6>
                            <hr />
                            <ul>
                                <li><a href="/" >Mumbai</a></li>
                                <li><a href="/" >Maharashtra</a></li>
                                <li><a href="/" >Nashik</a></li>
                                <li><a href="/" >Navi Mumbai </a></li>
                                <li><a href="/" >Kandi Vali</a></li>
                            </ul>
                            </div>
                            <div className="col-md-2" >
                                 <h6 className="h6 m-0" >Services</h6>
                                <hr/>
                                <ul>
                                    <li><a href="/" >Properties</a></li>
                                    <li><a href="/" >Auction</a></li>
                                   
                                </ul>
                            </div>
                            <div className="col-md-2" >
                            <h6 className="h6 m-0" >Contact US</h6>
                            <hr />
                            <ul>
                                <li><a href="/" >+9169593959353</a></li>
                                <li><a href="/" >d2mmallpvtltd@gmail.com</a></li>
                                <li><a href="/" >Mumbai Maharashtra</a></li>
                                
                            </ul>
                            </div>
                        </div>
                    </div>

            </section>

        </div>
    )
}

export default Home
