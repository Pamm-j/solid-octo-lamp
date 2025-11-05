import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>🚀 Release Flow Demo</h1>
      <p>Version: 1.0.1</p>
      
      <div>
        <button onClick={() => setCount(count + 1)}>
          Clicks: {count}
        </button>
      </div>
      
      <p>Make your changes here!</p>
    </div>
  )
}

export default App