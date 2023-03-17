import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import About from './router/About'  
import Contact from './router/Contact'  
import NavComponent from './router/NavLink'
import Notfound from './router/notfound'  


const root = ReactDOM.createRoot(document.getElementById('root'));

const routing =(
<Router>
<div>
<h1 style={{color: "Green"}}>React Router Example</h1>
<NavComponent />
<Routes>
<Route exact path='/'  Component={App} /> 
<Route path="/about"  Component={About} />
<Route path='/contact' Component={Contact} />
</Routes>
</div>
</Router>
)

root.render(routing);  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
