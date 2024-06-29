// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-zinc-800 min-h-dvh'>
        <nav className="w-full flex items-center justify-between h-14 border-b border-slate-500">
          <div className='h-full flex flex-row'>
            <button className='text-xl md:text-2xl hover:bg-gray-600 h-full px-4 md:px-6'>Home</button>
          </div>
          <div>
            <input type="search" className='h-14 pl-2 w-[220px] placeholder:text-xl' placeholder='Search for relics...' />
          </div>
        </nav >
      </div >
    </>
  )
}

export default App
