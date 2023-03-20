import {NavLink} from 'react-router-dom'  
function NavComponent(){
return (<ul>  
        <li>  
        <NavLink to="/list" exact activeStyle={  
             {color:'red'}  
          }>React List Example</NavLink>  
        </li>  
        <li>  
        <NavLink to="/conditionalRender" exact activeStyle={  
             {color:'green'}  
          }>Conditional Rendering Component</NavLink>  
        </li>  
        <li>  
          <NavLink to="/state" exact activeStyle={  
             {color:'magenta'}  
          }>State Example</NavLink>  
        </li>  
        <li>  
          <NavLink to="/state" exact activeStyle={  
             {color:'magenta'}  
          }>Change Letter In Upper Case</NavLink>  
        </li>
        <li>
        <NavLink to="/hook" exact activeStyle={  
             {color:'magenta'}  
          }>Hook Use</NavLink>  
        </li>  

      </ul>  );

}
export default NavComponent;
