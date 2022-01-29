import React, {useContext, useState ,useEffect } from 'react';
import { StateContext } from './StateProvider';
import fbcover from './fbcover.png';
import './Checkout.css';
import fire from './firebase';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket , user}] = useContext(StateContext);
    const [name, setName] = useState("");
    
    useEffect(() => {
    if(user){
      
       var namee =  fire.database().ref('Users/'+ user?.uid);
       console.log(namee);
       namee.on('value', (snapshot) =>{
           setName(snapshot.toJSON().name) 
       })
    }
},[user])
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ads" src={fbcover} alt="logo"></img>
            {basket?.length === 0 ? (
                <div>
                    <h1>Hello {name}</h1>
                <h2>Your Cart is empty</h2>
                <p>
                    You Have no items in your basket , to add one or more items click on "add to basket" button next to image.
                </p>
                </div>
            ) :(
                <div className="checkout__title">
                    <h1>Hello {name}</h1>
                    <h2>Your Shopping Basket</h2>
                 {basket.map(item => (
                     <CheckoutProduct
                     key= {item.id}
                     id ={item.id} 
                     image = {item.src} 
                     name = {item.name}
                     price = {item.price}
                     rating ={item.rating}
                     
                     />
                    ))}
                </div>
            )}
            </div>
          {basket.length > 0 && (
              <div className="checkout__right" >
                  <Subtotal/>
            
              </div>
          )

          }
        </div>
    )
}

export default Checkout
