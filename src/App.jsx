import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)  

  let about = {
    Hela_passion:"I like to play football and watch cricket",
    kesy_aim:"To be a millionire"
  }
  
  return (
    <>
      <h1 className='bg-yellow-400 rounded-xl p-2 text-black mb-4'>Tailwind CSS</h1>
      <Card username='Angelina' hero={about.Hela_passion} /> 
      <Card username='Hela' />
      <Card username='kesy' hero={about.kesy_aim}/> 
    </>
  )
}

export default App;

