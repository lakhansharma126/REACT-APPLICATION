import FunctionalComponent from './components/FunctionalComponent'
import StateComponent from './state/stateExample';
import ChangeState from './state/ChangeState';
import ClassBaseComponent from './components/ClassBaseComponent'
import SignUp from './conditional/If'
import Logical from './conditional/Logical&&'
import Render from './conditional/ConditionalRenderingExample';

function App() {

//   const [name , setName] = useState('');
//   const [age , setAge] = useState('');
//   const [email , setEmail] = useState('');
//   const [password , setPassword] = useState('');
//   const [confPassword , setConfPassword] = useState('');

// const handleChange =(e) =>{
// setName(e.target.value);
// }

// const handleAgeChange =(e)=>{

//   setAge(e.target.value);
// }

// const handleEmailChange =(e)=>
// {
//   setEmail(e.target.value);
// }

// const handlePasswordChange =(e)=>{
//   setPassword(e.target.value);
// }

// const handleConfPasswordChange =(e)=>{
//   setConfPassword(e.target.value);
// }

// const handleSubmit =(e)=>{
//   if(password !=confPassword){
//     alert("password is not match");
//   }else{
//     alert('A form was submitted with Name :"' + name +
//     '" ,Age :"'+age +'" and Email :"' + email + '"');
//   }
  
//   e.preventDefault();
// }
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log("one="+one);
console.log("two="+two);
console.log("array="+rest);

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle);
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  < ClassBaseComponent />
  < FunctionalComponent />
  < StateComponent />
  < ChangeState />
  < Render />
</>

  );
}

export default App;
