import React, { useContext } from 'react'

import { Select } from '../../UI'

import { Settings } from '../../../context/Settings'

export const LabelSelect = ({ id, optionEnum, children }) => {
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line label-select">
      <label htmlFor={id} className="text content-edit__left">
        {children}
      </label>

      <Select
        className="content-edit__right"
        id={id}
        onChange={(e) => setSetting(id, e.target.value)}
        value={settings[id]}
      >
        {optionEnum}
      </Select>
    </div>
  )
}
