import React from 'react'

export const LabelCheckbox = ({ checkbox, label, id, children }) => {
  return (
    <div className="content-edit__line">
      <input type="checkbox" value={checkbox} id={id} />
      <label for={id}>{label}</label>
      {children}
    </div>
  )
}
