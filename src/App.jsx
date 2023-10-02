import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [counter,setCounter] = useState(0);
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  return (
    <>
     <h2> Counter App</h2>
      <div> 
      <p> Let's do some Counting Here!!  </p>
   </div> 
      <div className= "buttons">
        <button onClick={handleIncrement} > Increase </button>
        <span> Count: {counter} </span>
        <button onClick={handleDecrement} > Decrease </button>
      </div>
      <button onClick={() => setCounter(0)} > Reset</button>
    </>
  )
}

export default App
