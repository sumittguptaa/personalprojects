import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch ,useSelector} from "react-redux"
import { useHistory } from "react-router"
import "./Signup.css"
import { usersignup } from "../actions"
const Signup = ()=>{
    const auth = useSelector((state)=> state.authReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    console.log(auth)
    const[userData,setUserData] = useState({
        name:"",email:"",password:""
    })
    console.log(userData)
    const handleName = (e)=>{
        setUserData({...userData,name:e.target.value})
    }
    const handleEmail = (e)=>{
        setUserData({...userData,email:e.target.value})
    }
    const handlePassword = (e)=>{
        setUserData({...userData,password:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("this action has been")
        dispatch(usersignup(userData,history))

    }
    return(
        <div className="login_container" >
            <div className="heading" >
                <h1>Sign Up</h1>
                <i className="fa fa-user"></i>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="input_container" >
                <h3>Name</h3>
                <input type="text" value={userData.name} onChange={handleName} placeholder="Your Name" />
                <h3>Email</h3>
                <input type="email" value={userData.email} onChange={handleEmail} placeholder="Your Email" />
                <h3>Password</h3>
                <input type="password" value={userData.password} onChange={handlePassword} placeholder="Password" />
            </div>
            <div className="button_container" >
                <button type="submit"  >Sign Up</button>
            </div>
            </form>
            <Link to='/signin'>
                <div className="button_container" >
                    <button>Sign In</button>
                </div>
            </Link>
        </div>
    )
}

export default Signup