import React from 'react'
import './Select.css'

export const Select = ({ className, children, ...props }) => (
  <select className={`select ${className || ''}`} {...props}>
    {children.map((text, idx) => (
      <option key={text} value={idx}>
        {text}
      </option>
    ))}
  </select>
)
