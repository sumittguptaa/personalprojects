import React, { useContext ,useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import bluelogo from './bluelogo.png'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {StateContext} from './StateProvider';
import fire from './firebase';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
function Header() {
  
        const [{basket , user}, dispatch] = useContext(StateContext);
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
        const login = () =>{
            if(user){
            fire.auth().signOut();
            setName("")
            toast.success("Signed Out Succefully")
            }
            else{
                
            }
        }

    return (
        <nav className="header">
           <Link to="/">
       <img className="header__logo" src={bluelogo} alt="logo" /></Link>
       <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Search" />
        <Link to="">
        <SearchIcon className="header__searchIcon" /></Link>
        </div>
        <div className="header__nav">
            <Link to={!user && "/login"} className="header__link">
            <div className="header__option">
            <span className="header__optionlineone">Hello {name}</span>
            {/* <span className="header__optionlineone">Hello {user?.email}</span> */}
            <span onClick ={login} className="header__optionlinetwo">{user ? 'SignOut' : 'Sign In'}</span>
            </div>
            </Link>
            <Link to={user?"/orders" : "/login"} className="header__link">
            <div  className="header__option">
            <span className="header__optionlineone" >Returns & </span>
            <span className="header__optionlinetwo">Orders </span>
            </div>
            </Link>
        </div>
        <Link to="/cart" className="header__link">
            <div className="header__optionBasket">
            <ShoppingCartIcon/>
    <span className="header__optionlinetwo header__basketcount">{basket.length}</span>
            </div>
        </Link>
        </nav>
    );
}

export default Header;
