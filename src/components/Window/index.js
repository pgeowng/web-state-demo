import React, { useEffect, useState } from 'react'
import './style.css'

const resizeIcon = (
  <svg className="window__resize-icon" viewBox="0 0 40 40">
    <rect x="0" y="30" width="10" height="10" />
    <rect x="15" y="15" width="10" height="10" />
    <rect x="15" y="30" width="10" height="10" />
    <rect x="30" y="0" width="10" height="10" />
    <rect x="30" y="15" width="10" height="10" />
    <rect x="30" y="30" width="10" height="10" />
  </svg>
)

const mouseOffset = {
  x: 5,
  y: 13,
}

const headerOffset = -30

export const Window = ({
  title,
  children,
  startWidth = 400,
  startHeight = 300,
  minWidth = 300,
  minHeight = 300,
}) => {
  const [shift, setShift] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ x: startWidth, y: startHeight })
  const [resizing, setResizing] = useState(false)

  const startResize = (e) => {
    console.log(e)
    setResizing(true)
  }

  useEffect(() => {
    if (resizing) {
      const mouseup = (e) => {
        setResizing(false)
      }

      const mousemove = (e) => {
        setSize({
          x: Math.max(e.clientX + mouseOffset.x, minWidth),
          y: Math.max(e.clientY + headerOffset + mouseOffset.y, minHeight),
        })
      }

      window.addEventListener('mouseup', mouseup)
      window.addEventListener('mousemove', mousemove)

      return () => {
        window.removeEventListener('mousemove', mousemove)
        window.removeEventListener('mouseup', mouseup)
      }
    }
  }, [resizing, minHeight, minWidth])

  return (
    <div
      className="window"
      style={{
        width: size.x + 'px',
        float: 'left',
      }}
    >
      <div className="window__header">
        <div className="window__desc">
          <div className="window__icon"></div>
          <div className="window__title">{title}</div>
        </div>
        <div className="window__buttons"></div>
      </div>
      <div
        className="window__content"
        style={{
          height: size.y + 'px',
        }}
      >
        {children}
      </div>
      <div className="window__resize-zone" onMouseDown={startResize}>
        {resizeIcon}
      </div>
    </div>
  )
}
