import React from 'react'
import './Label.css'

export const Label = ({ className, id, value, children, disabled }) => {
  return (
    <>
      <label
        className={`control-label ${
          disabled ? 'control-label--disabled' : ''
        } ${className || ''}`}
        htmlFor={id}
      >
        {value}
      </label>
      {children}
    </>
  )
}
