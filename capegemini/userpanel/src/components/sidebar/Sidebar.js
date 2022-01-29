import React from "react"
import avatar from "./avatar.png"
import "./Sidebar.css"
import { useDispatch } from "react-redux"
import { logout } from "../actions"
const Sidebar = ({sideBaropen,closeSidebar})=>{
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(logout())
    }
    return(
        
        <div className={sideBaropen ? "sidebar-responsive" : ""}  id="sidebar" >
       
            <div className="sidebar__title" >
                <div className="sidebar__image" >
                    <img src={avatar} width="75px" alt="Logo" />
                    <h1>CodersBite</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={()=> closeSidebar()} ></i>
               
            </div>
            <div className="sidebar__menu" >
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="/" >Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="/" >Marks</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="/" >Attendance</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="/" >Details Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="/" >Contact Us</a>
                </div>
                <h2>Leave</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="/" >Requests</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="/" >Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="/" >Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="/" >Apply for Leave</a>
                </div>
                <h2>Payroll</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="/" >Fee Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="/" >Fee Receipt</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="/signin" onClick={handleClick} >Log Out</a>
                </div>

            </div>
        </div>
    )
}

export default Sidebar