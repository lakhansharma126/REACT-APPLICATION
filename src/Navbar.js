import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:60}}>
          <li className="nav-item" >
            <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">{props.contactText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/form">{props.service}</a>
          </li>
          
        </ul>
       </div>
       {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>  */}

    <div className='button'>
    <app-login-btn _ngcontent-serverapp-c82=""> <a className="menu-item" class="btn btn-primary" title="Login/Register"  href="/login">
        
      <button class="btn btn-primary" title="Login/Register" >
       Login/Register </button></a></app-login-btn></div>
     { /* <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
  </div> */}
  </div>
   
    {/* <div className="container">
    <img  src={mainLogo} alt="fireSpot" style={{height:80,width:400, marginLeft:250}} />
    </div> */}

  </nav>
    </>
  )
}

Navbar.propTypes = 
{ 
    title:PropTypes.string,homeText:PropTypes.string,
    aboutText:PropTypes.string,contactText:PropTypes.string

}
