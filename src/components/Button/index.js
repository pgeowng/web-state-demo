import React from 'react'
import './style.css'

export const Button = ({ className, ...props }) => (
  <button type="button" className={`button ${className || ''}`} {...props} />
)

export const ButtonWhite = ({ className, ...props }) => (
  <Button
    type="button"
    className={`button--white ${className || ''}`}
    {...props}
  />
)
