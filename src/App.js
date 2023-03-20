
import './App.css';  
import Navbar from './Navbar';
import TextForm from './TextForm';
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
    <Navbar title='TextUtil' homeText ='Home' aboutText='About Us' contactText='contact Us' />
    <div className="container my-3">
    <TextForm  heading='Enter the text to analize'/>
    </div>
   </>
  );
}

export default App;
