import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import Welcome from '../Welcome';
import Header from './Header';
import '../Style.css';  
import '../App.css';  


export default function Login() {
const [userName,setUserName] = useState("");
const [userPassword,setUserPassword] = useState("");
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error" style={{marginLeft:270,color:'red'}}>{errorMessages.message}</div>
  );

    const errors = {
        uname: "Invalid User Name",
        pass: "Invalid Password"
      };

      const handleInputChange =(e)=>{
        const {id , value} = e.target;
        if(id === "uname"){
            setUserName(value);
        }

        if(id === "pass"){
            setUserPassword(value);
        }
    };
      
    const addPosts = async (obj) => {
        
    
         await fetch('http://localhost:3000/userC/findByName', {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {
             'Content-type': 'application/json; charset=UTF-8',
          },
          }).then((response) => response.json())
          .then((data) => {
            if(data.password !== undefined){
             if (data.password !== userPassword) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
                setTimeout(() => {
                    setErrorMessages({ name: "pass", message: '' });
                }, 5000);
              } else {
                setIsSubmitted(true);
              } 
            }else{
                setErrorMessages({ name: "uname", message: errors.uname });
                setTimeout(() => {
                    setErrorMessages({ name: "uname", message: '' });
                }, 5000);
            }

          })
          .catch((err) => {
            setErrorMessages({ name: "uname", message: errors.uname });
            setTimeout(() => {
                setErrorMessages({ name: "uname", message: '' });
            }, 5000);
          });

          };
    
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        // Compare user info
        const obj ={
            first_name:userName,
            password:userPassword
        }
        addPosts(obj);
   
   
      };      
      const renderForm = (<>
     <Header header="Login Form"/>
     <div className='loginForm' >
     <div className="form">
      <div className="form-body">
          <div className="username">
              <label className="form__label" htmlFor="firstName">User Name </label>
              <input className="form__input" type="text" id="uname" placeholder="User Name" value={userName} required onChange = {(e) => handleInputChange(e)}/>
              {renderErrorMessage("uname")}
          </div>
          <div className="password">
              <label className="form__label" htmlFor="lastName">Password</label>
              <input  type="text" name="pass" id="pass"  className="form__input" placeholder="Password" value={userPassword} required onChange = {(e) => handleInputChange(e)}/>
              {renderErrorMessage("pass")}
          </div>
          <div class="footer">
          <button type="submit" className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Login</button>
          </div>
         </div> 
         <Link to="/rform" style={{textAlign: 'left'}} >Please Sign Up New User</Link>
  </div> 
  </div>
  </>
       );

  return (
    <>
     <div  className="App">
        {isSubmitted ? <Welcome/>: renderForm}
      
    </div>
   </>
  )
}
