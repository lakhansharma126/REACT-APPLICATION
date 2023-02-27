import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function App() {

  const [name , setName] = useState('');
  const [age , setAge] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [confPassword , setConfPassword] = useState('');

const handleChange =(e) =>{
setName(e.target.value);
}

const handleAgeChange =(e)=>{

  setAge(e.target.value);
}

const handleEmailChange =(e)=>
{
  setEmail(e.target.value);
}

const handlePasswordChange =(e)=>{
  setPassword(e.target.value);
}

const handleConfPasswordChange =(e)=>{
  setConfPassword(e.target.value);
}

const handleSubmit =(e)=>{
  if(password !=confPassword){
    alert("password is not match");
  }else{
    alert('A form was submitted with Name :"' + name +
    '" ,Age :"'+age +'" and Email :"' + email + '"');
  }
  
  e.preventDefault();
}

  return (
  
    <div className="App">
      <header className="App-header">
      <form onSubmit={(e) => {handleSubmit(e)}}>
      <h2> Welcome to Sign Up Form </h2>
      <img src="/gfg.png"  alt="" />
      <label>  Name: </label>
      <br />
      <input type="text" name="name" value={name} required onChange={(e)=>{handleChange(e)} } /><br/>
       
      <label >
          Age:
        </label><br/>

        <input type="text" name="Age" value={age} required onChange={(e)=>{handleAgeChange(e)} } /><br/>

        <label >
          Email:
        </label><br/>

        <input type="text" name="Email" value={email} required onChange={(e)=>{handleEmailChange(e)} } /><br/>

        <label >
          Password:
        </label><br/>

        <input type="password" name="Password" value={password} required onChange={(e)=>{handlePasswordChange(e)} } /><br/>

        <label >
          confirmPassword:
        </label><br/>

        <input type="password" name="confirmPassword" value={confPassword} required onChange={(e)=>{handleConfPasswordChange(e)} } /><br/>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <input type="submit" value="Submit"/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        </form>
      </header>
    </div>
  );
}

export default App;
