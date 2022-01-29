import React, { useEffect, useState , useContext} from 'react'
import { useParams } from 'react-router-dom'
import fire from "./firebase"
import "./Productinfo.css";
import download from "./download.jpg"
import Carousel from "react-elastic-carousel"
import Card from "./Card"
import { StateContext } from './StateProvider';
function Productinfo() {

    const {id} = useParams()
    const [info , setInfo] = useState([])
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if(id){
            fire.firestore().collection("info").doc(id).onSnapshot((snapshot) => (
                setInfo(snapshot.data())
            ))
        }

    } , [id])
    const [{basket , user} , dispatch] = useContext(StateContext)
        
        const addToBasket = (e) =>{
        dispatch({
            type : "ADD_TO_BASKET" ,
            item : {
                id : id ,
                name : info.title,
                src : info.imageurl ,
                price : info.price ,
                rating : info.rating }})}
    return (
        <div className="container" >
            <div className="row" >
             <div className="col-md-5">   
                 <img src={info.imageurl} alt="i" />                
            </div>
            <div className="col-md-7" >
                         <p class="newarrival text-center" >NEW</p>
                        <h2>{info.title}</h2>
                        <p>Product Code - ISBC3456</p>
                        <img src={download} alt="" />
                        <p class="price" > Rs  : {info.price}</p>
                        <p><b>Availiability :</b>In Stock</p>
                        <p><b>Condition :</b>New</p>
                        <p><b>Brand :</b>XYZ Company</p>
                        <label><b>Quantity :</b></label>
                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <button onClick={addToBasket}  >Add to Basket</button>
                         <p className="details"><b>Product Details :</b> {info.details}</p>
            </div>
            </div>
        </div>
    )
}

export default Productinfo
