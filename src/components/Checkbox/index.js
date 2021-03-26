import React from 'react'
import './style.css'

export const Checkbox = ({ id, children, value, onChange }) => (
  <label htmlFor={id} className="checkbox">
    <input
      type="checkbox"
      className="checkbox__input"
      id={id}
      onChange={onChange}
      value={value}
    />

    <svg
      className="checkbox__svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      aria-hidden="true"
      focusable="false"
    >
      <polyline
        class="checkbox__checkmark"
        points="1,5 4,8 10,2"
        // stroke="#484848"
        stroke-width="1.2"
        fill="none"
      ></polyline>
    </svg>

    <span className="checkbox__label">{children}</span>
  </label>
)
