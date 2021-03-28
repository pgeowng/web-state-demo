import React from 'react'
import './Input.css'

const id = () => {}

export const Input = ({ className, ...props }) => (
  <input
    type="text"
    className={`input ${className || ''}`}
    {...props}
    onChange={id}
  />
)

export const InputWhite = ({ className, ...props }) => (
  <Input className={`input--white ${className || ''}`} {...props} />
)
