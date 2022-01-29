import React , {useState} from 'react';
import './Register.css';
import {  Link, useHistory } from "react-router-dom";
import bluelogo from "./bluelogo.png";
import fire from "./firebase";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
function Login() {
            const history = useHistory();
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [name, setName] = useState('');
            const register = event =>{
            event.preventDefault();
            fire.auth().createUserWithEmailAndPassword(email, password)
            .then((user) =>{
                var id=fire.auth().currentUser.uid;
                console.log(id);
                fire.database().ref('Users/'+id).set({
                    email : email ,
                    name : name
                  
                   });
                toast.success("User Registerd Succesfully")
                history.push("/");
               
            })
            .catch(e =>
                toast.error(e.message)
            );   
        };
       
    return (
        <div className="login">
            <Link to="/">
            <img src={bluelogo} className="login__logo" alt="logo" />
            
            </Link>
            <div className="login__container">
                <h1>Sign Up</h1>
                <form>
                    <h5>Name</h5>
                    <input placeholder="name" value={name} onChange={event => setName(event.target.value)} type="text" />
                    <h5>E-Mail</h5>
                    <input placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} type="password"/>            
                </form>
                <p>
                    By SignUp you agree to d2mmall's condition of use& sale .Please see our privacy notice, cookies notice and our interest based ads notice.
                </p>
                <button className="login__registerbutton" onClick={register}>Create your d2mmall account</button>
                    <Link to="/login">Alerady a user? Sign In</Link>
            </div>
        </div>
    )
}
export default Login