import React from 'react'

import { CheckLabel, LabelSelect, CheckLabelNum, LabelNum } from '../UI'

export const CaptureScreenRecorder = ({ settings, reducer }) => {
  return (
    <>
      <div className="content-edit__line">
        <button type="button">Screen recording options...</button>
      </div>

      <LabelNum id="screenRecorder.FPS" min={1} max={60} step={1}>
        Screen recording FPS:
      </LabelNum>
      <LabelNum id="screenRecorder.gifFPS" min={1} max={60} step={1}>
        GIF FPS:
      </LabelNum>
      <CheckLabel id="screenRecorder.showCursor">
        Show cursor in recording
      </CheckLabel>
      <CheckLabelNum
        id="screenRecorder.startDelay"
        min={1}
        max={60}
        step={1}
        checkId="screenRecorder.overrideStartDelay"
      >
        Start recoring after
      </CheckLabelNum>
      <CheckLabelNum
        id="screenRecorder.fixedDuration"
        min={1}
        max={60}
        step={1}
        checkId="screenRecorder.overrideFixedDuration"
      >
        Fixed duration:
      </CheckLabelNum>
      <CheckLabel id="screenRecorder.useLossless">
        Record using lossless encoding and then apply user encoding option
      </CheckLabel>
      <CheckLabel id="screenRecorder.transparentSelection">
        Use transparent region selection
      </CheckLabel>
      <CheckLabel id="screenRecorder.conformation">
        Ask for conformation
      </CheckLabel>
    </>
  )
}
