import { useEffect, useState } from 'react'
import './App.css'

import { Window } from './components/Window'

import { ContentMain } from './components/ContentMain'
import { ContentEdit } from './components/ContentEdit'

import { Settings } from './context/Settings'

const data = `Screenshot,Print Screen
Record Audio,F3
Map Something,Ctrl + Shift + Backspace
Rename something,Shift + F
Screenshot,Print Screen
Record Audio,F3
Map Something,Ctrl + Shift + Backspace
Rename something,Shift + F
Screenshot,Print Screen
Record Audio,F3
Map Something,Ctrl + Shift + Backspace
Rename something,Shift + F
Screenshot,Print Screen
Record Audio,F3
Map Something,Ctrl + Shift + Backspace
Rename something,Shift + F
Screenshot,Print Screen
Record Audio,F3
Map Something,Ctrl + Shift + Backspace
Rename something,Shift + F`
  .split('\n')
  .map((e, i) => {
    const s = e.split(',')
    return {
      idx: i,
      desc: s[0],
      mapping: s[1],
      status: ['working', 'warning', 'failure'][Math.floor(Math.random() * 3)],
    }
  })

export const App = () => {
  const [settings, setSettings] = useState({})
  const [order, setOrder] = useState([2, 1, 0])

  const setSetting = (key, value) => {
    setSettings((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const [size, setSize] = useState({
    desktopWidth: window.innerWidth,
    desktopHeight: window.innerHeight,
  })

  useEffect(() => {
    let timeoutId = null

    window.addEventListener('resize', (e) => {
      /* timeout hack because of too many resize events */
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        console.log('setting')
        setSize({
          desktopWidth: window.innerWidth,
          desktopHeight: window.innerHeight,
        })
      }, 500)
    })
  })

  const onFocus = (idx) => {
    const newOrder = []
    const curr = order[idx]

    for (let i = 0; i < order.length; i++) {
      newOrder.push(order[i] < curr ? order[i] : order[i] - 1)
    }
    newOrder[idx] = newOrder.length

    setOrder(newOrder)
  }

  return (
    <>
      <Window
        title="ShareX - Hotkey Settings"
        startWidth={490}
        startHeight={490}
        minWidth={490}
        minHeight={300}
        {...size}
        zIndex={order[0]}
        onFocus={() => onFocus(0)}
        startShift={{ x: 50, y: 50 }}
      >
        <ContentMain
          bindings={data}
          selectedIdx={1}
          reducer={(obj) => console.log(obj)}
        />
      </Window>

      <Window
        title="ShareX - Edit"
        startWidth={490}
        startHeight={490}
        minWidth={490}
        minHeight={490}
        {...size}
        zIndex={order[1]}
        onFocus={() => onFocus(1)}
        startShift={{ x: 100, y: 100 }}
      >
        <Settings.Provider value={{ settings, setSetting }}>
          <ContentEdit />
        </Settings.Provider>
      </Window>
      <Window
        title="ShareX - Edit"
        startWidth={490}
        startHeight={490}
        minWidth={490}
        minHeight={490}
        {...size}
        zIndex={order[2]}
        onFocus={() => onFocus(2)}
        startShift={{ x: 150, y: 150 }}
      >
        <Settings.Provider value={{ settings, setSetting }}>
          <ContentEdit />
        </Settings.Provider>
      </Window>
    </>
  )
}
