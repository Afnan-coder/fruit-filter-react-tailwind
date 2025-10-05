import './App.css'
import { useState, useMemo } from 'react'

function App() {
  let allFruits = ["🍎 Apple", "🍇 Grapes", "🍊 Orange", "🍌 Banana", "🥭 Mango", "🍍 Pineapple", "🍓 Strawberry", "🍉 Watermelon", "🍒 Cherry", "🍑 Peach", "🍐 Pear", "🥝 Kiwi", "🥥 Coconut", "🍋 Lemon", "🍈 Melon", "🥭 Papaya", "🍏 Green Apple", "🫐 Blueberry", "🍇 Blackberry", "🍊 Tangerine", "🐉 Dragonfruit", "🍈 Cantaloupe", "🥭 Guava", "🍅 Tomato"];

  const [fruit, setFruit] = useState('')

  const filteredFruit = useMemo(() => {
    return allFruits.filter((item) => {
      return item.toLowerCase().includes(fruit.toLowerCase())
    })

  }, [fruit])

  return (
    <>
      <div className="container w-1/2 h-1/2 bg-green-700 mx-auto my-5 rounded-sm boxShadow p-10 text-center">
        <h1 className='text-4xl my-9 font-bold text-white'>Fruit  Filter</h1>
        <input type="text" className='w-full outline-green-400 rounded-sm p-3 text-2xl bg-white mb-9' placeholder='Enter fruit' onChange={(e) => setFruit(e.target.value)} />
        <div className="content h-full max-h-72 overflow-y-scroll">
          <ul className='overflow-y-auto '>
            {
              filteredFruit.map((item) => {
                return <li className='w-[98%] rounded-sm text-xl border-2 border-green-400 bg-white mb-2 p-2'>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
