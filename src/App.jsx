import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const minus10 = () => {
    setCount(count - 10);
  }
  const minus1 = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  const plus1 = () => {
    setCount(count + 1);
  }
  const plus10 = () => {
    setCount(count + 10);
  }


  return (
    <>
      <div className='wrap'>
        <h1>Simple Counter</h1>
        <p className='number'>{count}</p>
        <div className='btn'>
          <button onClick={minus10}>-10</button>
          <button onClick={minus1}>-1</button>
          <button onClick={reset} className='reset'>RESET</button>
          <button onClick={plus1}>+1</button>
          <button onClick={plus10}>+10</button>
        </div>
      </div>
    </>
  )
}

export default App
