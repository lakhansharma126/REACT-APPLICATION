
import React ,{useState} from 'react'
import './App.css';  
import Navbar from './Navbar';
function App() {
const [mode,setMode] = useState('light');

const toggleMode =() =>{
if(mode==="light"){
  setMode("dark")
  document.body.style.backgroundColor ="#042743";
}
  else{
  setMode("light");
  document.body.style.backgroundColor ="white";
  }
}
  return (
    <>
    <Navbar title='TextUtil' homeText ='Home' aboutText='About Us'
     contactText='contact Us' mode={mode} toggleMode={toggleMode}/>
   </>
  );
}

export default App;
