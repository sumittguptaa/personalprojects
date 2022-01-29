import React , {useContext} from 'react'
import { StateContext } from './StateProvider';
import "./CheckoutProduct.css" ;
function CheckoutProduct({id, name , image ,price ,rating , hideButton}) {
    const [{basket , user} , dispatch] = useContext(StateContext)

    const removeBasket = (e) => {
        dispatch({
            type : "REMOVE_FROM_BASKET" ,
            id : id
        })
    }
    return (
        <div className="checkoutProduct" >
            <img className="checkoutProduct__image"  src={image} alt="pic"  />
            <div className="checkoutProduct__info" >
            <p className="checkoutProduct__title" >{name}</p>
            <p className="checkoutProduct__price" >
                <small>Rs</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating" >
                    {Array(rating)
                        .fill()
                        .map((_) => ( 
                            <p  key={Math.random()} >★</p>
                        ))
                    }
            </div>
            {!hideButton && (<button onClick={removeBasket} >Remove from Basket</button>) }
            
            </div>
        </div>
    )
}

export default CheckoutProduct
