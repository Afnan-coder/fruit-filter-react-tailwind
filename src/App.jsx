import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="container w-1/2 h-1/2 bg-green-700 mx-auto my-5 rounded-sm boxShadow p-10 text-center">
        <h1 className='text-4xl my-9 font-bold text-white'>Fruit  Filter</h1>
        <input type="text" className='w-full outline-green-400 rounded-sm p-3 text-2xl bg-white mb-9' placeholder='Enter fruit' onChange={(e) => setFruit(e.target.value)} />
        <div className="content h-full max-h-72 overflow-y-scroll">
          <ul className='overflow-y-auto '>
            <li>Apple</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
