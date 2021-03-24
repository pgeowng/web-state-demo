import React from 'react'
import { i18n, keys } from '../../../i18n'
import { Label } from '../controller/Label'
import { InputNum } from '../controller/InputNum'

import { LabelCheckbox } from '../controller/LabelCheckbox'

const i = keys.capture.screenRecorder

export const CaptureScreenRecorder = ({ settings, reducer }) => {
  return (
    <>
      <Label id={i.FPS} value={i18n[i.FPS]}>
        <InputNum
          id={i.FPS}
          value={settings[i.FPS]}
          min={1}
          max={30}
          step={1}
          onChange={reducer}
          data-key={i.FPS}
        />
      </Label>
      <Label id={i.gifFPS} value={i18n[i.gifFPS]}>
        <InputNum
          id={i.gifFPS}
          value={settings[i.gifFPS]}
          min={1}
          max={30}
          step={1}
          onChange={reducer}
          data-key={i.gifFPS}
        />
      </Label>
      <LabelCheckbox
        checkbox={settings[i.showCursor]}
        label={i18n[i.showCursor]}
        id={i.showCursor}
        onChange={reducer}
        key={22}
      />

      <LabelCheckbox
        checkbox={settings[i.override]}
        label={i18n[i.override]}
        id={i.override}
        key={i.override}
        onChange={reducer}
      >
        <InputNum
          min={0}
          max={60}
          step={0.1}
          value={i.startDelay}
          data-key={i.startDelay}
          onChange={reducer}
        />
      </LabelCheckbox>
    </>
  )
}
