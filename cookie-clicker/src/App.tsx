import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [money, setMoney] = useState(0);
  const [autoClicks, setAutoClicks] = useState(0)
  const [small, setSmall] = useState(0)
  const [medium, setMedium] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney(prevMoney => prevMoney + autoClicks)
    }, 10000)
    console.log('money changed')
    return () => clearInterval(interval)
  }, [autoClicks])

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney(prevMoney => prevMoney + small)
    }, 1000)
    console.log('money changed')
    return () => clearInterval(interval)
  }, [small])

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney(prevMoney => prevMoney + (medium * 10))
    }, 1000)
    console.log('money changed')
    return () => clearInterval(interval)
  }, [medium])

  function buyAutoClick() {
    if (money >= 10) {
      setAutoClicks(autoClicks + 1)
      setMoney(money - 10)
    }
  }

  function buySmall() {
    if (money >= 100) {
      setSmall(small + 1)
      setMoney(money - 100)
    }
  }

  function buyMedium() {
    if (money >= 500) {
      setMedium(medium + 1)
      setMoney(money - 500)
    }
  }

  return (
    <div className="app-container">
      <h1>Money: {money}</h1>
      <h3>Auto Clicks: {autoClicks}</h3>
      <h3>Smalls: {small}</h3>
      <h3>Mediums: {medium}</h3>
      <button className='main-click' onClick={() => setMoney(money + 1)}>click</button>
      <div>
        <h2>store</h2>
        <div className='store-item'>
          <p>auto-clicker (cost:10) [+1 money per 10 seconds]</p>
        <button onClick={buyAutoClick}>buy auto click</button>
        </div>
        <div className='store-item'>
          <p>small (cost:100) [+1 money per second]</p>
        <button onClick={buySmall}>buy small</button>
        </div>
        <div className='store-item'>
          <p>medium (cost: 1000) [+10 money per second]</p>
        <button onClick={buyMedium}>buy medium</button>
        </div>
      </div>
    </div>
  )
}

export default App
