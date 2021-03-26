import React, { useEffect, useState, useMemo } from 'react'
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
  x: 5 / 12, // em
  y: 0.5 - 2.5, // em
}

const dragOffset = {
  left: -100,
  top: 0,
  right: 32,
  bottom: 32,
}

const resizeOffset = {
  bottom: 10,
  right: 2,
}

const clamp = (value, min, max) => {
  console.log('clamp', value, min, max)
  return Math.min(Math.max(value, min), max)
}

const cssOffset = (value, offset) => `calc(${value}px + ${offset}em)`

export const Window = ({
  title,
  children,
  startWidth,
  startHeight,
  minWidth = 300,
  minHeight = 300,
  desktopWidth,
  desktopHeight,
  zIndex = 0,
  onFocus,
}) => {
  const [shift, setShift] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ x: startWidth, y: startHeight })

  /* resizing */
  const [resizing, setResizing] = useState(false)

  const startResize = (e) => {
    setResizing(true)
  }

  useEffect(() => {
    if (resizing) {
      const mouseup = (e) => {
        setResizing(false)
      }

      const mousemove = (e) => {
        setSize({
          x: clamp(
            e.clientX - shift.x,
            minWidth,
            desktopWidth - shift.x - resizeOffset.right
          ),
          y: clamp(
            e.clientY - shift.y,
            minHeight,
            desktopHeight - shift.y - resizeOffset.bottom
          ),
        })
      }

      window.addEventListener('mouseup', mouseup)
      window.addEventListener('mousemove', mousemove)

      return () => {
        window.removeEventListener('mousemove', mousemove)
        window.removeEventListener('mouseup', mouseup)
      }
    }
  }, [resizing, minHeight, minWidth, shift, desktopHeight, desktopWidth])

  /* dragging */
  const [dragging, setDragging] = useState(false)
  const [dragShift, setDragShift] = useState({ x: 0, y: 0 })

  const startDrag = (e) => {
    console.log('startdrag')
    /* check lmb */
    setDragging(true)
    setDragShift({ x: e.clientX - shift.x, y: e.clientY - shift.y })
  }

  useEffect(() => {
    if (dragging) {
      const mouseup = (e) => {
        setDragging(false)
      }

      const mousemove = (e) => {
        const x = clamp(
          e.clientX - dragShift.x,
          dragOffset.left,
          desktopWidth - dragOffset.right
        )
        const y = clamp(
          e.clientY - dragShift.y,
          dragOffset.top,
          desktopHeight - dragOffset.bottom
        )

        if (x + size.x > desktopWidth || y + size.y > desktopHeight) {
          setSize({
            x: clamp(
              size.x,
              minWidth,
              Math.max(desktopWidth - x - resizeOffset.right, minWidth)
            ),
            y: clamp(
              size.y,
              minHeight,
              Math.max(desktopHeight - y - resizeOffset.bottom, minHeight)
            ),
          })
        }

        setShift({
          x,
          y,
        })
      }

      window.addEventListener('mouseup', mouseup)
      window.addEventListener('mousemove', mousemove)

      return () => {
        window.removeEventListener('mousemove', mousemove)
        window.removeEventListener('mouseup', mouseup)
      }
    }
  }, [
    dragging,
    dragShift,
    desktopWidth,
    desktopHeight,
    size,
    minWidth,
    minHeight,
  ])

  return (
    <div
      className="window"
      style={{
        width: cssOffset(size.x, mouseOffset.x),
        left: shift.x + 'px',
        top: shift.y + 'px',
        zIndex: zIndex,
      }}
      onMouseDown={onFocus}
    >
      <div className="window__header">
        <div className="window__desc" onMouseDown={startDrag}>
          <div className="window__icon"></div>
          <div className="window__title">{title}</div>
        </div>
        <div className="window__buttons"></div>
      </div>
      <div
        className="window__content"
        style={{
          height: cssOffset(size.y, mouseOffset.y),
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
