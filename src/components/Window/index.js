import React, { useState } from 'react'
import './style.css'

export const Window = ({ title, children, startWidth = 400, height }) => {
  const [width, setWidth] = useState(startWidth)

  return (
    <div className="window" style={{ minWidth: width + 'px', float: 'left' }}>
      <div className="window__header">
        <div className="window__desc">
          <div className="window__icon"></div>
          <div className="window__title">{title}</div>
        </div>
        <div className="window__buttons"></div>
      </div>
      <div className="window__content">{children}</div>
    </div>
  )
}
