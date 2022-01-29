import React , {useState} from 'react';
import './Login.css';
import {  Link, useHistory } from "react-router-dom";
import bluelogo from "./bluelogo.png";
import fire from "./firebase";


function Login() {
            const history = useHistory();
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');


        const login = event =>{
            event.preventDefault();
            fire.auth().signInWithEmailAndPassword(email, password)
            .then(cred =>{
                   
                history.push("/");
            })
            .catch(e => alert(e.message));
        };

        const register = event =>{
            event.preventDefault();
            fire.auth().createUserWithEmailAndPassword(email, password)
            .then((user) =>{
                // alert("You have registered Succesfully");
                history.push("/");

            })
            .catch(e => alert(e.message));
        };
    return (
        <div className="login">
            <Link to="/">
            <img src={bluelogo} className="login__logo" alt="logo" />
            
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button className="login__signinbutton" type="submit" onClick={login}>Sign In</button>
                    
                </form>
                <p>
                    By Signing-in you agree to d2mmall's condition of use& sale .Please see our privacy notice, cookies notice and our interest based ads notice.
                </p>
                <button className="login__registerbutton" onClick={register}>Create your d2mmall account</button>
            </div>
        </div>
    )
}

export default Login
