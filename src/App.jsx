import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Task1 from './components/Task1'
import MainSection from './section/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Task1 /> */}
      <MainSection/>
    </>
  )
}

export default App
