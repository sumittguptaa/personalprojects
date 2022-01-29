import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
function Dashboard() {
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'))
    const handleSubmit = ()=>{
        localStorage.clear()
        history.push('/')
    }
    return (
        <div>
            <h1>Hi {user.name}, Welcome to your dashboard </h1>
            <img src={user.image} alt="User" />
            <button onClick={handleSubmit} >Logout</button>
        </div>
    )
}

export default Dashboard
