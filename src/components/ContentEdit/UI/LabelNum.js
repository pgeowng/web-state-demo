import React, { useContext } from 'react'
import { I18N } from '../i18n'
import { Settings } from '../../../context/Settings'

import { Checkbox, InputNum } from '../../UI'

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
      <label htmlFor={id} className="text content-edit__left">
        {i18n[id]}
      </label>
      <InputNum
        className="content-edit__right"
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
      <Checkbox
        className="content-edit__left"
        id={checkId}
        value={settings[checkId]}
        onChange={(e) => setSetting(checkId, e.target.value)}
      >
        {i18n[checkId]}
      </Checkbox>
      <InputNum
        className="content-edit__right"
        min={min}
        max={max}
        step={step}
        value={settings[id]}
        onChange={(e) => setSetting(id, e.target.value)}
      />
    </div>
  )
}
