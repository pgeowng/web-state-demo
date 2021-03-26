import React, { useContext } from 'react'

import { Select } from '../../UI'

import { I18N } from '../i18n'
import { Settings } from '../../../context/Settings'

export const LabelSelect = ({ id, optionEnum }) => {
  const i18n = useContext(I18N)
  const { settings, setSetting } = useContext(Settings)
  console.log(id)

  return (
    <div className="content-edit__line label-select">
      <label htmlFor={id} className="text content-edit__left">
        {i18n[id]}
      </label>

      <Select
        className="content-edit__right"
        id={id}
        onChange={(e) => setSetting(id, e.target.value)}
        value={settings[id]}
      >
        {i18n[optionEnum]}
      </Select>
    </div>
  )
}
