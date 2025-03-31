import { useState } from 'react'
import WeatherApp from './WeatherApp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WeatherApp></WeatherApp>
     </>
  )
}

export default App;
