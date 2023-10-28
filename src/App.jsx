import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1 className='bg-yellow-400 rounded-xl p-2 text-black mb-4'>Tailwind CSS</h1>
      <Card username='Angelina' />
      <Card username='Hela'/>
      <Card username='kesy'/>
    </>
  )
}

export default App
