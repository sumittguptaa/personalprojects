import React , {useState}from 'react'
import "./Profile.css"
import Header from "./Header"


function Profile() {
    const [image , setImage] = useState(null);
    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }
    const handleUpload = () => {
        console.log(image);
    }
    return (
        <div>
            <Header/>
            <h1>Name </h1>
            <p>Addrss</p>
            <p>Contact no.</p>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload} >Upload</button>

        </div>
    )
}

export default Profile
