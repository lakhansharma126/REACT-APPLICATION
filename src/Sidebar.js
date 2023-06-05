import React, {useState} from 'react';
import {Link ,useNavigate} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./App.css";
import { SideBarData } from "./components/SideBardata";

function Sidebar(props) {
const [sidebar,setSidebar] = useState(false);
const navigate = useNavigate();
const showSidebar = ()=>{
      setSidebar(!sidebar);
   }

 const handleClick = (link) => {
  setSidebar(!sidebar);
  navigate(link);
}

  return (
    <>
    <div className='navbar'>
     <Link to="#" className="menu-bars">
     <FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
     </Link>
     <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`} style={{marginLeft:1000}}>
     <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
     <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
     </div>
    </div>
    <div style={{display: sidebar ? 'block' : 'none'}} id="sidebar">
    <div className="split"> 
    <ul className='SidebarList'>
    <li className='navbar-toggle' onClick={showSidebar}> 
    <AiIcons.AiOutlineClose />
    </li>
    { SideBarData.map((value,key) => {
    return (<li  className={value.cName} key={key} onClick={()=>{handleClick(value.link)}}>
     <div id="icon" >{value.icon}</div><div id="title">{value.title}</div>
    </li>
    );
  } )}
</ul>
</div>
</div>
</>
 ) ;
}
export default Sidebar;