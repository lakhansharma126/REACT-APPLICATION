function UserLoggin(props) {  
    return <h1>Welcome back!</h1>;  
  }  

  function GuestLoggin(props) {  
    return <h1>Please sign up.</h1>;  
  } 

  function SignUp(props) {  
    const isLoggedIn = props.isLoggedIn;  
    if (isLoggedIn) {  
      return (< UserLoggin />);  
    }  
    return (< GuestLoggin />);  
  }  

  export  default SignUp;