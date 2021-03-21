import './App.css'

import { Window } from './components/Window'

import { ContentMain } from './components/ContentMain'
import { useEffect, useState } from 'react'
import { ContentEdit } from './components/ContentEdit'

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

const categories = `Task
General
Image
Capture
Upload
Action
Watch folders
Tools
Advanced`
  .split('\n')
  .map((e) => ({
    key: e.toLowerCase(),
    label: e,
  }))

categories.splice(
  3,
  0,
  {
    key: 'image-effects',
    label: 'Effects',
    isSubitem: true,
  },
  {
    key: 'image-thumbnail',
    label: 'Thumbnail',
    isSubitem: true,
  }
)

categories.splice(
  6,
  0,
  {
    key: 'capture-region-capture',
    label: 'Region capture',
    isSubitem: true,
  },
  {
    key: 'capture-screen-recording',
    label: 'Screen recorder',
    isSubitem: true,
  },
  {
    key: 'capture-ocr',
    label: 'OCR',
    isSubitem: true,
  }
)

categories.splice(
  10,
  0,
  {
    key: 'upload-file-naming',
    label: 'File naming',
    isSubitem: true,
  },
  {
    key: 'upload-clipboard-upload',
    label: 'Clipboard upload',
    isSubitem: true,
  },
  {
    key: 'upload-uploader-filters',
    label: 'Uploader filters',
    isSubitem: true,
  }
)

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
    <>
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

      <Window
        title="ShareX - Edit"
        startWidth={490}
        startHeight={490}
        minWidth={490}
        minHeight={490}
        {...size}
      >
        <ContentEdit categories={categories} />
      </Window>
    </>
  )
}
