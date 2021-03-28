import React, { useContext } from 'react'
import './CheckLabel.css'
import { Settings } from '../../../context/Settings'

import { Checkbox } from '../../UI'

export const CheckLabel = ({ id, children }) => {
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line check-label">
      <Checkbox
        className="check-label__label"
        id={id}
        value={settings[id]}
        onChange={(e) => setSetting(id, e.target.value)}
      >
        {children}
      </Checkbox>
    </div>
  )
}
