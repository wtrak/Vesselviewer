import { useState } from 'react'
import { Rnd } from 'react-rnd'

const base = import.meta.env.BASE_URL

const ships = [
  {
    name: 'MSC Seascape',
    length_m: 339,
    svg: `${base}ships/msc-seascape-true.svg`
  },
  {
    name: 'Titanic',
    length_m: 269,
    svg: `${base}ships/titanic.svg`
  },
  {
    name: 'Boeing 747',
    length_m: 70.6,
    svg: `${base}ships/boeing-747.svg`
  }
]

function App() {
  const [selected, setSelected] = useState([])

  const handleAdd = (name) => {
    const ship = ships.find(s => s.name === name)
    if (ship && !selected.find(s => s.name === name)) {
      setSelected([...selected, ship])
    }
  }

  const scale = 2 // 1px = 2 meters

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Ship & Plane Size Compare</h1>

      <div className="flex gap-4 mb-4">
        {ships.map(s => (
          <button
            key={s.name}
            onClick={() => handleAdd(s.name)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add {s.name}
          </button>
        ))}
      </div>

      <div className="relative w-full h-[600px] bg-gray-100 border">
        {selected.map((s, i) => (
          <Rnd
            key={s.name}
            default={{ x: 50 * i, y: 50 * i, width: s.length_m * scale, height: 'auto' }}
            bounds="parent"
            enableResizing={false}
          >
            <img src={s.svg} alt={s.name} style={{ width: s.length_m * scale }} title={s.name} />
          </Rnd>
        ))}
      </div>

      <div className="text-sm text-gray-500 mt-2">Scale: 1 pixel = {scale} meters</div>
    </div>
  )
}

export default App
