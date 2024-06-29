import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import birdLogo from '/other/bird.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [p_text, setp_text] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onInputHandler(e: any) {
    setp_text(e.target.value);
  }

  return (
    <>
      <div className='bg-zinc-800 min-h-dvh'>
        <nav className="w-full flex items-center justify-between h-14 border-b border-slate-500">
          <div className='h-full flex flex-row'>
            <button className='text-lg md:text-2xl hover:bg-gray-600 h-full px-4 md:px-6'>
              <img className='h-14 w-20 rounded-full' src={birdLogo}></img>
            </button>
          </div>
          <div>
            <input type="search" onInput={onInputHandler} className='h-14 pl-2 w-[220px] placeholder:text-xl' placeholder='Search for relics...' />
          </div>
        </nav >
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <p>Text will be here: {p_text}</p>
      </div >
    </>
  )
}

export default App
