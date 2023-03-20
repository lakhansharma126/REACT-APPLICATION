import React from 'react'  
import App from '../App';


class Contact extends React.Component {  
  
  render() {  
    const mystyle = {  
      color: "Green",  
      backgroundColor: "lightBlue",  
      padding: "10px",  
      fontFamily: "Arial"  
    };  
    return( 
   <>
    < App />
    <h1 style={mystyle}>Welcome to Contact</h1>
    </>
    ) 
  }  
}  
export default Contact;