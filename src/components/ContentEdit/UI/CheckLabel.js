import React, { useContext } from 'react'
import { I18N } from '../i18n'
import { Settings } from '../../../context/Settings'

export const CheckLabel = ({ id }) => {
  const i18n = useContext(I18N)
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line check-label">
      <input
        type="checkbox"
        id={id}
        value={settings[id]}
        onChange={(e) => setSetting(id, e.target.value)}
      />
      <label htmlFor={id}>{i18n[id]}</label>
    </div>
  )
}
