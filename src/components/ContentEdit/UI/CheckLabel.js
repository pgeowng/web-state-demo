import React, { useContext } from 'react'
import './CheckLabel.css'
import { I18N } from '../i18n'
import { Settings } from '../../../context/Settings'

import { Checkbox } from '../../Checkbox'

export const CheckLabel = ({ id }) => {
  const i18n = useContext(I18N)
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line check-label">
      <Checkbox
        className="check-label__label"
        id={id}
        value={settings[id]}
        onChange={(e) => setSetting(id, e.target.value)}
      >
        {i18n[id]}
      </Checkbox>
    </div>
  )
}
