import React from 'react'
import { Label } from '../controller/Label'
import { InputNum } from '../controller/InputNum'

const keys = {
  fps: 'screen-recording-fps',
  gifFps: 'gif-fpg',
}

Object.keys(keys).forEach((e) => {
  keys[e] = 'capture-screen-recorder--' + keys[e]
})

export const CaptureScreenRecorder = ({ settings }) => {
  return (
    <>
      <Label id={keys.fps} value="Screen recording FPS:">
        <InputNum
          id={keys.fps}
          value={settings[keys.fps]}
          min={1}
          max={30}
          step={1}
        />
      </Label>
      <Label id={keys.gifFps} value="GIF FPS:">
        <InputNum
          id={keys.gifFps}
          value={settings[keys.gifFps]}
          min={1}
          max={30}
          step={1}
        />
      </Label>{' '}
    </>
  )
}
