import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import bluelogo from './bluelogo.png'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {StateContext} from './StateProvider';
import fire from './firebase';
function Header() {
  
        const [{basket , user}, dispatch] = useContext(StateContext);
     console.log(user);
        const login = () =>{
            if(user)
            fire.auth().signOut();
        
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
            <span className="header__optionlineone">Hello {user?.email}</span>
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
