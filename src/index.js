import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import About from './router/About'  
import Contact from './router/Contact'  
import ClassBaseComponent from './components/ClassBaseComponent'  
import Render from './conditional/ConditionalRenderingExample';
import Notfound from './router/notfound'  
import Action from '../src/action'  
import ChangeState from './state/ChangeState';
import Hook from './hook/countApp';


const root = ReactDOM.createRoot(document.getElementById('root'));

const routing =(
<Router>
<div>
{/* <h1 style={{color: "Green"}}>React Router Example</h1> */}
{/* <NavComponent /> */}
<Routes>
<Route exact path='/'  Component={App} /> 
<Route path="/about"  Component={About} />
<Route path='/contact' Component={Contact} />
<Route path='/action' Component={Action} />
<Route path='/list' Component={ClassBaseComponent} />
<Route path='/conditionalRender' Component={Render}></Route>
<Route path='/state' Component={ChangeState}></Route>
<Route path='/hook' Component={Hook}></Route>


</Routes>
</div>
</Router>
)

root.render(routing);  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
