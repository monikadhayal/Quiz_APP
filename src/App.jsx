import { useState } from 'react'
import Quiz from './component/Quiz.jsx'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  <Quiz/>
    </>
  )
}

export default App
