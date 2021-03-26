import React from 'react'
import './Input.css'

export const Input = ({ className, ...props }) => (
  <input type="text" className={`input ${className || ''}`} {...props} />
)

export const InputWhite = ({ className, ...props }) => (
  <Input className={`input--white ${className || ''}`} {...props} />
)
