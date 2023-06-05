import React from 'react';
function Header(props) {
   
    return(
        <nav class="navbar-dark">
            <div className="row col-12 d-flex justify-content-center text-white" style={{backgroundColor:'Wheat'}}>
                <h3 style={{textAlign:'center'}}>{props.header}</h3>
            </div>
        </nav>
    )
}
export default Header;

