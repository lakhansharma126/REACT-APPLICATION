import React, {useState} from 'react';
import Alert from '../Alert';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../Style.css';  

function RegistrationForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [alert, setAlert] = useState('');

    
const handleInputChange =(e)=>{
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

}

    const addPosts = async (obj) => {
      let response  =  await fetch('http://localhost:3000/userC/signup', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        });

        let data = await response.json();
        if(response.status === 201)
        setAlert({type:"success",msg:"User Register Successfully"});
        else
        setAlert({type:"danger",msg:"User is not Register Successfully"});

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

       setTimeout(() => {
        setAlert(null);
       }, 5000);
        
        };

        const  handleSubmit  = (e) => {
          setAlert({type:"success",msg:"Pleae Wait for while"});
            let body = {
                first_name : firstName,
                last_name:lastName,
                email:email,
                password:password,
            }       
            e.preventDefault();
            addPosts(body);

        }

    return(
        <> 
         <div  className="App">
        <Header header="Registration Form"/>
        <div className='loginForm'>
          <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" value={firstName} onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input" placeholder="LastName" value={lastName} onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" value={email} onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" value={password} onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange = {(e) => handleInputChange(e)}/>
              </div>
          </div>
          <Alert alert={alert} />
          <div class="footer">
              <button type="submit" className="btn btn-primary" onClick={(e)=>handleSubmit(e)}> Register</button>
          </div>
          <Link to="/login" >Please Sing In</Link>
      </div>      
      </div>
      </div>
      </>
    )       
}
export default RegistrationForm;