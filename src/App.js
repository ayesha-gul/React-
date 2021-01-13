import React, { useState } from 'react' ; 
import './App.css'
function App() {
  let [count,setCount] = useState(1);
  let[isMorning,setMorning] = useState(false);

  
  return (  

 <div className={`box ${isMorning ? 'daylight' : ''}`}>
   
   <h1>Day TimE = {isMorning ? 'morning': 'night'}</h1>
    <h3> Value Of COunter is:{count}</h3>
  
   <button onClick={
     ()=> setCount(count + 1)} >
     click to update counter.
   </button>
   <button onClick={
     ()=>setMorning(!isMorning)}>update day</button>
  
   
 </div>
  );

}

export default App;
