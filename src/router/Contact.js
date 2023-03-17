import React from 'react'  


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
    <h1 style={mystyle}>Welcome to Contact</h1>
    </>
    ) 
  }  
}  
export default Contact;