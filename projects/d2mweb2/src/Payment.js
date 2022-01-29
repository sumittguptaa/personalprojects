import React ,{useContext , useEffect, useState} from 'react'
import CheckoutProduct from './CheckoutProduct';
import axios from './axios';
import "./Payment.css"
import {Link ,useHistory } from 'react-router-dom'
import { StateContext } from './StateProvider';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import fire from "./firebase"


function Payment() {
    const history = useHistory();
    const [{basket , user} , dispatch] = useContext(StateContext);
    const [address , setAddress] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded , setSucceeded] = useState(false);
    const [processing , setProcessing] = useState(false);
    const [error , setError] = useState(null);
    const [disabled , setDisabled] = useState(true);
    const [clientSecret , setClientSecret] = useState(true);

    useEffect(() =>{

        const getClientSecret = async () => {
            const response = await axios({
                method : 'post' ,
                url : `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();
    } ,[basket])
   

    const handleSubmit = async(event) => {
            event.preventDefault();
            setProcessing(true);
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({paymentIntent}) => {

                fire.firestore().collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id)
                .set({
                    basket : basket , 
                    address : address ,
                    amount : paymentIntent.amount ,
                    created : paymentIntent.created
                })

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                    dispatch({
                        type : "EMPTY_BASKET"
                    })

            
                history.replace('/orders');
             
            })
    }
    const handleChange = event => {


        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

   
    return (
        <div className="payment" >
            <div className="payment__container">
                <h1>
    Checkout (<Link to="/cart" >{basket?.length} items</Link>) 
                </h1>
                <div className="payment__section" >
                        <div className="payment__title" >
                            <h3>
                                Delievery Address :
                            </h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p><h3 >✎ Edit</h3>
                           <h3>Address</h3> <input value={address} placeholder="Address" type="text" onChange={(e) => setAddress(e.target.value)} /> 
                         <p>{address}</p>
                        </div>
                </div>
                <div className="payment__section" >
                <div className="payment__title" >
                    <h3>Review Items and Delievery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(items => (
                            <CheckoutProduct 
                           key = {items.id}
                            id ={items.id} 
                            image = {items.src} 
                            name = {items.name}
                            price = {items.price}
                            rating ={items.rating}
                            />
                        ))}
                    </div>

                </div>
                
                <div className="payment__section" >
                <div className="payment__title" >
                    <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details" >
                        
                                <h1>Online Payment</h1>
                                <form onSubmit={handleSubmit} >
                                    <CardElement  onChange={handleChange} />
                                    <div className="payment__priceContainer" >
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                           <h3>Order Total : {value} </h3>   
                                            </>
                                        )
                                        }
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeperator={true}
                                        prefix={"₹"}
                                        />
                                        <button disabled={processing || disabled || succeeded} >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                        </button>
                                    </div>
                                    {error && <div>error</div>}
                                </form>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment


