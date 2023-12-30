import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-500 text-white rounded-full px-2 mb-3'>Tailwind css</h1>
      <div className='columns-2'>
      <Card username="Alishba" btnText="click me"/>
      <Card username="Hanzala"/>
      </div>
    </>
  )
}

export default App
