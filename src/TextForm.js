import React,{useState} from 'react'

export default function TextForm(props) {
  
  const [text, setText]  = useState('Hello React');

 const convertToUpperCase = ()=>{
   
    let newText = text.toUpperCase();
    setText(newText);
 }

 const handleOnChange = (event) => {
     setText(event.target.value);
 }
    return (
    <div>
    <h1>{props.heading}</h1>
   <div className="mb-3">
   <textarea class="form-control" id="my-box" rows="6" value={text} onChange={handleOnChange}></textarea>
   </div>
   <button className="btn btn-primary" onClick={convertToUpperCase}>Convert To Uppercase</button>
</div>
  )
}
