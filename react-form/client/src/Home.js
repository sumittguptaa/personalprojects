import React, { useState } from "react"
import './App.css';
import FileBase from "react-file-base64"
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import axios from "axios"
function Home() {
    const history = useHistory()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        image: ""
    })
    console.log(userData)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const result = await axios.post('http://localhost:5000/user',userData)
        console.log(result)
        localStorage.setItem('profile', JSON.stringify({result}))
        history.push('/dashboard')
    }
  
    return (
        <div className="App">
            <h3>MERN\MEAN Stack Test Form</h3>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input type="number" placeholder="Mobile" onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="state">State:</label>

                    <select name="state" id="cars">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>
                <div>
                    <label>Gender : </label>
                    <label htmlFor="male" >Male : </label>
                    <input type="checkbox" name="male" value="Male" />
                    <label htmlFor="female" >Female : </label>
                    <input type="checkbox" name="female" value="Female" />
                </div>
                <div>
                    <label>Qualification : </label>
                    <label htmlFor="Btech" >Btech : </label>
                    <input type="checkbox" name="Btech" value="BTech" />
                    <label htmlFor="BCA" >BCA : </label>
                    <input type="checkbox" name="BCA" value="Bca" />
                    <label htmlFor="MCA" >MCA : </label>
                    <input type="checkbox" name="MCA" value="Mca" />
                </div>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setUserData({ ...userData, image: base64 })}
                    />
                </div>
                <input type="submit"  name="Submit" />
            </form>
        </div>
    )
}

export default Home
