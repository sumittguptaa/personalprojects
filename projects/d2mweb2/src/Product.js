import React, { useContext } from 'react'
import "./Product.css";
import { StateContext } from './StateProvider';
import {Link , useHistory} from "react-router-dom"

function Product({id ,name ,src, price, rating}) {
    
    const history = useHistory();
        const [{basket , user} , dispatch] = useContext(StateContext)
       
        const addToBasket = (e) =>{
        dispatch({
            type : "ADD_TO_BASKET" ,
            item : {
                id : id ,
                name : name ,
                src : src ,
                price : price ,
                rating : rating }})}
     return(
         
        <div className="product">
           
            <Link  to={`/product/${id}`}  className="product" >
                 <img src={src}  alt=""/>
                 </Link>
            <div className="product__info">
            <Link  to={`/product/${id}`}>
                <h1  >{name}</h1></Link>
                <p className="product__price"> 
                <small>₹</small>
                <strong>{price}</strong>
                </p>                     
            </div>
     
            <div className="product__rating"> 
                {Array(rating).fill().map((_) =>(<p key={Math.random()} >★</p>))}
            </div> 

            <button><Link to={`/product/${id}`}>View Details</Link></button>
            <button onClick={addToBasket}  >Add to Basket</button>
    
        </div>
        );
};
export default Product;
