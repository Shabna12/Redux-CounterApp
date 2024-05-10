import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100'>
      <Counter/>
    </div>
  )
}

export default App