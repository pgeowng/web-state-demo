import './App.css'

import { Window } from './components/Window'

import { ContentMain } from './components/ContentMain'
import { useEffect, useState } from 'react'

const data = `Screenshot,Print Screen
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
  const [size, setSize] = useState({
    desktopWidth: window.innerWidth,
    desktopHeight: window.innerHeight,
  })

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setSize({
        desktopWidth: window.innerWidth,
        desktopHeight: window.innerHeight,
      })
    })
  })

  return (
    <Window
      title="ShareX - Hotkey Settings"
      startWidth={490}
      startHeight={490}
      minWidth={490}
      minHeight={300}
      {...size}
    >
      <ContentMain
        bindings={[...data, ...data, ...data]}
        selectedIdx={1}
        reducer={(obj) => console.log(obj)}
      />
    </Window>
  )
}
