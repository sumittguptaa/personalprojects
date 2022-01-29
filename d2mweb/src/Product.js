import React, { useContext } from 'react'
import "./Product.css";
import { StateContext } from './StateProvider';
import {storeProducts} from './Store'
import fire from "./firebase"
function Product({id ,name ,src, price, rating}) {
    
   
        const [{basket , user} , dispatch] = useContext(StateContext)
        if(user){
            fire.firestore().collection('cart').doc(user?.email).collection('cart').doc('item').set({
               cart : basket
            })
        }else{

        }

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
         
        <div className="product"  >
            <img src={src}  alt=""/>
            <div className="product__info">
                       <strong> <p>{name}</p></strong>
                        <p className="product__price">
                        <small>₹</small>
                        <strong>{price}</strong>
                        </p>
                          
            </div>
              
            <div className="product__rating">  
                        {Array(rating)
                            .fill()
                            .map((_) =>(<p >★</p>))}
                        </div> 
        
            <button onClick={addToBasket}  >Add to Basket</button>
            
        </div>);
};

export default Product;
