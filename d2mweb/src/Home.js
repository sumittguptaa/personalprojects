import React from "react";
import { Carousel } from "react-responsive-carousel";
import webcar from "./webcar.png"
import Product from "./Product";
import ser from "./ser.jpg";
import slick from "./slick.jpg";
import pr1 from "./pr/pr1.jpg";
import pr2 from "./pr/pr2.jpg";
import pr3 from "./pr/pr3.jpg";
import pr4 from "./pr/pr4.jpg";
import pr5 from "./pr/pr5.jpg";
import pr6 from "./pr/pr6.jpg";
import pr7 from "./pr/pr7.jpg";
import pr8 from "./pr/pr8.jpg";
import pr9 from "./pr/pr9.jpg";
import pr10 from "./pr/pr10.jpg";
import pr11 from "./pr/pr11.jpg";
import pr12 from "./pr/pr12.jpg";
import pr13 from "./pr/pr13.jpg";
import pr14 from "./pr/pr14.jpg";
import pr15 from "./pr/pr15.jpg";
import pr16 from "./pr/pr16.jpg";
import pr17 from "./pr/pr17.jpg";
import pr18 from "./pr/pr18.jpg";
import pr19 from "./pr/pr19.jpg";
import pr20 from "./pr/pr21.jpg";
import Brands from "./Brands"
import "./Home.css";
export default () => (
  <div>
  <Carousel autoPlay>
    <div>
      <img alt="" src={ser} />
       
    </div>
    <div>
      <img alt="" src={slick} />
     
    </div>
    <div>
      <img alt="" src={ser} />
      
    </div>
    <div>
      <img alt="" src={slick} />
      
    </div>
    <div>
      <img alt="" src={ser} />
      
    </div>
  </Carousel>
  <div className="home__row">
    <Product
      id={1}
      name="TShirt"
      src={pr1}
      price={34}
      rating={4}

    />
    <Product
      id={2}
      name="TShirt"
      src={pr2}
      price={34}
      rating={3}

    />
    <Product
      id={3}
      name="TShirt"
      src={pr3}
      price={34}
      rating={4}

    />
    <Product
      id={4}
      name="TShirt"
      src={pr4}
      price={34}
      rating={5}

    />
   
    
    
    {/* <Product
      id={5}
      name="TShirt"
      src={pr5}
      price={34}
      rating={5}

    /> */}
    
  </div>
  <div className="home__row">
  <Product
      id={6}
      name="TShirt"
      src={pr6}
      price={34}
      rating={5}

    />
    <Product
      id={7}
      name="TShirt"
      src={pr7}
      price={34}
      rating={5}

    />
    <Product
      id={8}
      name="TShirt"
      src={pr8}
      price={34}
      rating={5}

    />
    <Product
      id={9}
      name="TShirt"
      src={pr9}
      price={34}
      rating={5}

    />
    {/* <Product
      id={10}
      name="TShirt"
      src={pr10}
      price={34}
      rating={5}

    /> */}
    </div>
    <div className="home__row">
    <Product
      id={11}
      name="TShirt"
      src={pr11}
      price={34}
      rating={5}

    />
    <Product
      id={12}
      name="TShirt"
      src={pr12}
      price={34}
      rating={5}

    />
    <Product
      id={13}
      name="TShirt"
      src={pr13}
      price={34}
      rating={5}

    />
    <Product
      id={14}
      name="TShirt"
      src={pr14}
      price={34}
      rating={5}

    />
    {/* <Product
      id={15}
      name="TShirt"
      src={pr15}
      price={34}
      rating={5}

    /> */}
    </div>

<div className="home__row">
    <Product
      id={16}
      name="TShirt"
      src={pr16}
      price={34}
      rating={5}

    />
    <Product
      id={17}
      name="TShirt"
      src={pr17}
      price={34}
      rating={5}

    />
    <Product
      id={18}
      name="TShirt"
      src={pr18}
      price={34}
      rating={5}

    />
    <Product
      id={19}
      name="TShirt"
      src={pr19}
      price={34}
      rating={5}

    />
    {/* <Product
      id={20}
      name="TShirt"
      src={pr20}
      price={34}
      rating={5}

    /> */}
    </div>
<Brands/>
</div>

);
