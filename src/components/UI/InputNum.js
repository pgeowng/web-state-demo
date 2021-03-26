import React from 'react'
import './InputNum.css'

export const InputNum = ({ className, ...props }) => (
  <input
    type="number"
    className={`input input-num ${className || ''}`}
    {...props}
  />
)
