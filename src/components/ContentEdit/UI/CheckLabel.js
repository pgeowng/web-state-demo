import React, { useContext } from 'react'
import { I18N } from '../i18n'

export const CheckLabel = ({ id, value, onChange }) => {
  const i18n = useContext(I18N)

  return (
    <div className="content-edit__line check-label">
      <input
        type="checkbox"
        id={id}
        data-setting-key={id}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{i18n[id]}</label>
    </div>
  )
}
