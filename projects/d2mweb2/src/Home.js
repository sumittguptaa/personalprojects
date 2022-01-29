import React from "react";
import Product from "./Product";
import ser1 from "./ser1.jpg";
import slick1 from "./slick1.jpg";
import {prod} from "./Products"
import pr1 from "./pr/pr1.jpg";
import pr2 from "./pr/pr2.jpg";
import pr3 from "./pr/pr3.jpg";
import pr4 from "./pr/pr4.jpg";
import pr6 from "./pr/pr6.jpg";
import pr7 from "./pr/pr7.jpg";
import pr8 from "./pr/pr8.jpg";
import pr9 from "./pr/pr9.jpg";
import pr11 from "./pr/pr11.jpg";
import pr12 from "./pr/pr12.jpg";
import pr13 from "./pr/pr13.jpg";
import pr14 from "./pr/pr14.jpg";
import pr16 from "./pr/pr16.jpg";
import pr17 from "./pr/pr17.jpg";
import pr18 from "./pr/pr18.jpg";
import pr19 from "./pr/pr19.jpg";
import Brands from "./Brands"
import Carousel from "react-elastic-carousel"
import Card from "./Card"
import "./Home.css";
export default () => (
  <div>
    <div>
      <Carousel enableAutoPlay >
        <Card number={ser1}/>
        <Card number={slick1}/>
        <Card number={ser1}/>
        <Card number={slick1}/>
        <Card number={ser1}/>
        <Card number={slick1}/>
        <Card number={ser1}/>
        <Card number={slick1}/>
      </Carousel>
    </div>
 
  {/* <div className="home__row">
    <Product
     key={1} 
      id={1}
      name="TShirt"
      src={pr1}
      price={340}
      rating={4}

    />
    <Product
     key={2} 
      id={2}
      name="TShirt"
      src={pr2}
      price={340}
      rating={3}

    />
    <Product
     key={3} 
      id={3}
      name="TShirt"
      src={pr3}
      price={340}
      rating={4}

    />
    <Product
     key={4} 
      id={4}
      name="TShirt"
      src={pr4}
      price={340}
      rating={5}

    />   
  </div> */}
  {/* <div className="home__row">
  <Product
   key={6} 
      id={6}
      name="TShirt"
      src={pr6}
      price={340}
      rating={5}

    />
    <Product
     key={7} 
      id={7}
      name="TShirt"
      src={pr7}
      price={340}
      rating={5}

    />
    <Product
     key={8} 
      id={8}
      name="TShirt"
      src={pr8}
      price={340}
      rating={5}

    />
    <Product
     key={9} 
      id={9}
      name="TShirt"
      src={pr9}
      price={340}
      rating={5}

    />
    </div>
    <div className="home__row">
    <Product
     key={11} 
      id={11}
      name="TShirt"
      src={pr11}
      price={340}
      rating={5}

    />
    <Product
     key={12} 
      id={12}
      name="TShirt"
      src={pr12}
      price={340}
      rating={5}

    />
    <Product
     key={13} 
      id={13}
      name="TShirt"
      src={pr13}
      price={340}
      rating={5}

    />
    <Product
     key={14} 
      id={14}
      name="TShirt"
      src={pr14}
      price={340}
      rating={5}

    />
    </div> */}

<div className="home__row">
 
    <Product
     key={16} 
      id={16}
      name="TShirt"
      src={pr16}
      price={340}
      rating={5}

    />
    <Product
     key={17} 
      id={17}
      name="TShirt"
      src={pr17}
      price={340}
      rating={5}

    />
    <Product
     key={18} 
      id={18}
      name="TShirt"
      src={pr18}
      price={340}
      rating={5}

    />
    <Product
      key={19}    
      id={19}
      name="TShirt"
      src={pr19}
      price={340}
      rating={5}

    />
     <Product
      key={12}    
      id={13}
      name="TShirt"
      src={pr13}
      price={340}
      rating={5}

    />
       <Product
      key={14}    
      id={14}
      name="TShirt"
      src={pr14}
      price={340}
      rating={5}

    />
    </div>
<Brands/>
</div>

);
