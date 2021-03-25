import React, { useContext } from 'react'

import { I18N } from '../i18n'
import { Settings } from '../../../context/Settings'

export const LabelSelect = ({ id, optionEnum }) => {
  const i18n = useContext(I18N)
  const { settings, setSetting } = useContext(Settings)
  console.log(id)

  return (
    <div className="content-edit__line label-select">
      <label htmlFor={id}>{i18n[id]}</label>
      <select
        id={id}
        onChange={(e) => setSetting(id, e.target.value)}
        value={settings[id]}
      >
        {i18n[optionEnum].map((text, idx) => {
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
