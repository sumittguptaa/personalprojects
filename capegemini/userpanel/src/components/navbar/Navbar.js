import "./Navbar.css"
import avatar from './avatar.png'
const Navbar = ({sidebarOpen,openSidebar})=>{
    const changeProperty = () => {

    }

    return(
        <nav className="navbar" >
            <div className="nav_icon" onClick={()=> openSidebar()} >
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left" >
                <a href="/">Marks</a>
                <a href="/">Attendance</a>
                <a className="active_link" href="/">User</a>
            </div>
            <div className="navbar__right">
                <a href="/" >
                    <i className="fa fa-search"></i>
                </a>
                <a href="/" >
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="/" >
                <img width="30px" src={avatar} alt="Admin" />
                </a>
            </div>
        </nav>
    )
}
export default Navbar