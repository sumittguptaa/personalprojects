import React  , {useState , useEffect , useContext}from 'react' ; 
import fire from "./firebase"
import { StateContext } from './StateProvider';
import Order from './Order'
import "./Orders.css"


function Orders() {
    const[orders , setOrders] = useState([]);
    const [{basket , user} , dispatch] = useContext(StateContext);

    useEffect(() => {
        if(user){
            fire.firestore().collection('users').doc(user?.uid).collection('orders')
            .orderBy('created' , 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id : doc.id ,
                    data : doc.data()
                })
                ))
            ))
        }
        else{
            setOrders([])
        }
     } , [user])

    return (
        <div>
          
            <h2>Your Orders</h2>
            <div className="orders__order" >
                {orders?.map(order => (
                    <Order key={order.id} order={order}/>
                ))}

            </div>
            
        </div>
    )
}

export default Orders

