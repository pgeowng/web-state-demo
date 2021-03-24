import React, { useContext } from 'react'
import { I18N } from '../i18n'

/* important note
 labelnum links label by id with numinput
 checklabelnum - links label by checkId with checkbox

  be careful
*/

export const LabelNum = ({ id, min, max, step, value, onChange }) => {
  const i18n = useContext(I18N)

  return (
    <div className="content-edit__line label-num">
      <label htmlFor={id}>{i18n[id]}</label>
      <input
        type="number"
        id={id}
        data-setting-key={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export const CheckLabelNum = ({
  id,
  checkId,
  checkValue,
  min,
  max,
  step,
  value,
  onChange,
}) => {
  const i18n = useContext(I18N)

  return (
    <div className="content-edit__line label-num">
      <input
        type="checkbox"
        id={checkId}
        data-setting-key={checkId}
        value={checkValue}
        onChange={onChange}
      />
      <label htmlFor={checkId}>{i18n[checkId]}</label>
      <input
        type="number"
        data-setting-key={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
