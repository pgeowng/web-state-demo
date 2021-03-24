import React, { useContext } from 'react'

import { I18N } from '../i18n'

export const LabelSelect = ({ id, value, optionsEnum, onChange }) => {
  const i18n = useContext(I18N)

  return (
    <div className="content-edit__line label-select">
      <label htmlFor={id}>{i18n[id]}</label>
      <select id={id} data-setting-key={id} onChange={onChange} value={value}>
        {i18n[optionsEnum].map((text, idx) => {
          return (
            <option key={text} value={idx}>
              {text}
            </option>
          )
        })}
      </select>
    </div>
  )
}
