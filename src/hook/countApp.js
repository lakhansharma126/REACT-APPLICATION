import React, { useState,useEffect } from 'react';  

function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  const [plus, setPlus] = useState(0);  

  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${plus} times`;  
  });  
  return (  
    <div>  
       <br></br> 
      <p>You clicked {plus} times</p>  
      <button type='button' onClick={() => setPlus(plus + 1)}>  
        Plus  Count
      </button>  
      {' '}
      <button type='button' onClick={() => setPlus(plus -1)}>  
        Minus Count 
      </button>  
    </div>  
  );  
}  
export default CountApp;  