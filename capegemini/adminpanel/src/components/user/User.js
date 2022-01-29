import React,{useState,useEffect} from "react"
import { useDispatch ,useSelector} from "react-redux"
import "./User.css"
import { getuser } from "../actions"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
const User = ()=>{
    const dispatch = useDispatch()
    const users = useSelector((user) => user.detailsReducer)
    useEffect(() => {
     dispatch(getuser())
    }, [])
    console.log(users?.details?.data?.user)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const openSidebar = () => {
        setSidebarOpen(true)
    }
    const closeSidebar = () => {
        setSidebarOpen(false)
    }
    return(
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            {users?.details?.data.user.map((user)=>(
                <div className="user_details" key={user._id} >
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user._id}</p>
                </div>
            ))}
            <Sidebar sideBaropen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}
export default User