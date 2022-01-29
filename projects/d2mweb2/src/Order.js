import React from 'react'
import "./Order.css"
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format";

function Order({order}) {
    return (
        <div  className="order" >
           <h2>Order</h2> 
            <h3>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a')}</h3>
            <p className="order__id" >
               <small> {order.id}</small>
            </p>
        {order.data.basket?.map(item =>(
        
            <CheckoutProduct 
            key= {item.id}
            id = {item.id} 
            name = {item.name}
            image = {item.src}
            price = {item.price}
            rating = {item.rating}
            hideButton
            />
        ))}
            <CurrencyFormat
             renderText={(value) => (
                 <>
                <h3 className="order__total" >Order Total : {value} </h3>   
                 </>
             )
             }
             decimalScale={2}
             value={order.data.amount /100}
             displayType={"text"}
             thousandSeperator={true}
             prefix={"₹"}
             />
        </div>
    )
}

export default Order
