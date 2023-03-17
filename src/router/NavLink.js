import {NavLink} from 'react-router-dom'  
function NavComponent(){
return (<ul>  
        <li>  
        <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
        <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul>  );

}
export default NavComponent;
