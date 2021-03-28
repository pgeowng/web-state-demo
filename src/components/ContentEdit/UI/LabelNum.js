import React, { useContext } from 'react'
import { Settings } from '../../../context/Settings'

import { Checkbox, InputNum } from '../../UI'

/* important note
 labelnum links label by id with numinput
 checklabelnum - links label by checkId with checkbox

  be careful
*/

export const LabelNum = ({ id, min, max, step, children }) => {
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line label-num">
      <label htmlFor={id} className="text content-edit__left">
        {children}
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

export const CheckLabelNum = ({ id, checkId, min, max, step, children }) => {
  const { settings, setSetting } = useContext(Settings)

  return (
    <div className="content-edit__line label-num">
      <Checkbox
        className="content-edit__left"
        id={checkId}
        value={settings[checkId]}
        onChange={(e) => setSetting(checkId, e.target.value)}
      >
        {children}
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
