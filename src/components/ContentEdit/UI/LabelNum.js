import React, { useContext } from 'react'
import { I18N } from '../i18n'
import { Settings } from '../../../context/Settings'

/* important note
 labelnum links label by id with numinput
 checklabelnum - links label by checkId with checkbox

  be careful
*/

export const LabelNum = ({ id, min, max, step }) => {
  const i18n = useContext(I18N)
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line label-num">
      <label htmlFor={id}>{i18n[id]}</label>
      <input
        type="number"
        id={id}
        min={min}
        max={max}
        step={step}
        value={settings[id]}
        onChange={(e) => setSetting(id, e.target.value)}
      />
    </div>
  )
}

export const CheckLabelNum = ({ id, checkId, min, max, step }) => {
  const i18n = useContext(I18N)
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line label-num">
      <input
        type="checkbox"
        id={checkId}
        value={settings[checkId]}
        onChange={(e) => setSetting(checkId, e.target.value)}
      />
      <label htmlFor={checkId}>{i18n[checkId]}</label>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={settings[id]}
        onChange={(e) => setSetting(id, e.target.value)}
      />
    </div>
  )
}
