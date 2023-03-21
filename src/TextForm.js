import React,{useState} from 'react'
import { useSearchParams } from "react-router-dom";
import App from './App';

export default function TextForm(props) {
  
  const [text, setText]  = useState('');

 const convertToUpperCase = ()=>{
   
    let newText = text.toUpperCase();
    setText(newText);
 }

 const handleOnChange = (event) => {
     setText(event.target.value);
 }

 const convertToLowerCase = ()=>{
   
    let newText = text.toLowerCase();
    setText(newText);
 }

 const clearText = ()=>{
    let newText = '';
    setText(newText);
 }


    return (
   <>
    <App />
    <div div className='container my-3'>
    <h3>Enter Text Here {props.mode}</h3>
   <div className="container my-3">
   <textarea class="form-control" id="my-box" rows="6" value={text} onChange={handleOnChange}></textarea>
   </div>
   <button className="btn btn-primary mx-1" onClick={convertToUpperCase}>Convert To Uppercase</button>
   <button className="btn btn-primary mx-1" onClick={convertToLowerCase}>Convert To Lowercase</button>
   <button className="btn btn-primary mx-1" onClick={clearText}>Convert To Lowercase</button>
   <div className="container my-3">
   <h3> Your Text Summary</h3>
   <p> {text.split(" ").length} words and {text.length} characters</p>
   <h3>Preview</h3>
   <p>{text}</p>
   </div>
   </div>
</>
  )
}
