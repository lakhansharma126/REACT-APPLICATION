import {NavLink} from 'react-router-dom'  
import "../Style.css";
function NavComponent(){
return (<ul >  
        <li>  
        <NavLink to="/list"
         className="linkRow">Class Component Example</NavLink>  
        </li>  
        <li>  
        <NavLink to="/conditionalRender" 
           className="linkRow">Conditional Rendering Component</NavLink>  
        </li>  
        <li>  
          <NavLink to="/state"  className="linkRow">State Example</NavLink>  
        </li>  
        <li>  
          <NavLink to="/form"className="linkRow" >Change Letter In Upper Case</NavLink>  
        </li>
        <li>
        <NavLink to="/hook"  className="linkRow">Hook Use</NavLink>  
        </li>  
        <li>
        <NavLink to="/array"  className="linkRow">Array Destrcuting </NavLink>  
        </li>
        <li>
        <NavLink to="/rform" className="linkRow">Registration Form</NavLink>  
        </li>  
        <li>
        <NavLink to="/login" className="linkRow">Login Form</NavLink>  
        </li>  
      </ul>  );

}
export default NavComponent;
