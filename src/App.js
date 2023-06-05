import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'  
import React ,{useState} from 'react'
import RegistrationForm from './registration/RegistrationForm';
import TextForm from './TextForm';
import About from './router/About'  
import Contact from './router/Contact'  
import ClassBaseComponent from './components/ClassBaseComponent'  
import Render from './conditional/ConditionalRenderingExample';  
import Action from '../src/action'  
import ChangeState from './state/ChangeState';
import Hook from './hook/countApp';
import LoginForm from './registration/Login';
import "./App.css"
import Sidebar from './Sidebar';
import arrayDestructring from './es6/arrayDestructring';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';

function App() {
const [mode,setMode] = useState('light');

const [alert,setAlert]  = useState(null);
const showAlert =(message,type)=>{
 alert(message);
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode =() =>{

  if(mode==="light"){
  setMode("dark")
  document.body.style.backgroundColor ="#042743";
  showAlert("Dark mode has been enabled","success");
}
  else{
  setMode("light");
  document.body.style.backgroundColor ="white";
  showAlert("Light mode has been enabled","success");
  }
}
  return (
    <>
  <Router>
  <Sidebar mode={mode} toggleMode={toggleMode} />
  <Routes>
 <Route path="/login"  Component={LoginForm} />
<Route path="/about"  Component={About} />
<Route path='/contact' Component={Contact} />
<Route path='/action' Component={Action} />
<Route path='/list' Component={ClassBaseComponent} />
<Route path='/conditionalRender' Component={Render}></Route>
<Route path='/state' Component={ChangeState}></Route>
<Route path='/hook' Component={Hook}></Route>
<Route path='/array' Component={arrayDestructring}></Route>
<Route path='/form'  Component={() => <TextForm  />}></Route>
<Route exact path='/rform'  Component={RegistrationForm} />
<Route exact path='/dasboard'  Component={Dashboard} />
<Route exact path='/booking'  Component={Booking} />
</Routes>
</Router>
</>
);
}

export default App;