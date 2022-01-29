import React,{useState} from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router";
import { adminsignin } from "../actions";
const Login = ()=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const auth = useSelector((state)=> state.authReducer )
    console.log(auth)
    const [userData,setUserdata] = useState({
        email:"",password:""
    })
    const handleEmail = (e)=>{
        setUserdata({...userData , email: e.target.value})
    }
    const handlePassword = (e)=>{
        setUserdata({ ...userData, password: e.target.value })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(adminsignin(userData,history))
    }
    return(
        <div className="login_container" >
            <div className="heading" >
                <h1>Login</h1>
                <i className="fa fa-user"></i>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="input_container" >
                <h3>Email</h3>
                <input type="email" value={userData.email} onChange={handleEmail} placeholder="Your Email" />
                <h3>Password</h3>
                <input type="password" value={userData.password} onChange={handlePassword} placeholder="Password" />
            </div>
            <div className="button_container" >
                <button type="submit"  >Log In</button>
            </div>
            </form>
            <Link to='/signup'>
                <div className="button_container" >
                    <button>Sign Up</button>
                </div>
            </Link>
        </div>
    )
}
export default Login