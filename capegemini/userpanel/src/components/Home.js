import React,{useState} from "react"
import Main from './main/Main'
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
const Home = ()=>{
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
            <Main />
            <Sidebar sideBaropen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}
export default Home