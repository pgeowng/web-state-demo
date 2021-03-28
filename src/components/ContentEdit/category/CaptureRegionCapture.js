import React from 'react'
import { CheckLabel, LabelSelect, CheckLabelNum, LabelNum } from '../UI'

const mouseButtonAction = [
  'Do nothing',
  'Cancel capture',
  'Remove shape or cancel capture',
  'Remove shape',
  'Swap tool type',
  'Capture fullscreen',
  'Capture active monitor',
]

export const CaptureRegionCapture = () => {
  return (
    <>
      <CheckLabel id="regionCapture.useMultiregion">
        Use multi region mode which will also allow resizing and moving regions
      </CheckLabel>
      <LabelSelect id="regionCapture.rmbAction" optionEnum={mouseButtonAction}>
        Mouse right click action:
      </LabelSelect>
      <LabelSelect id="regionCapture.mmbAction" optionEnum={mouseButtonAction}>
        Mouse middle click action:
      </LabelSelect>
      <LabelSelect id="regionCapture.m4bAction" optionEnum={mouseButtonAction}>
        Mouse 4 click action:
      </LabelSelect>
      <LabelSelect id="regionCapture.m5bAction" optionEnum={mouseButtonAction}>
        Mouse 5 click action:
      </LabelSelect>
      <CheckLabel id="regionCapture.allowHover">
        Detect window regions and allow cursor hover capture
      </CheckLabel>
      <CheckLabel id="regionCapture.detectInsideRegions">
        Also detect control regions inside window
      </CheckLabel>
      <CheckLabel id="regionCapture.dimBackground">
        Dim background so selection can be differentiated easily (affects
        startup speed)
      </CheckLabel>
      {/* checkbox + label + text input (help & validation) */}
      {/* <div className="content-edit__line">
                <input
                  id={regionCapture.overrideCustomCursorText}
                  type="checkbox"
                  value={settings[regionCapture.overrideCustomCursorText]}
                  onChange={changeSetting}
                />
                <label htmlFor={regionCapture.overrideCustomCursorText}>
                  {i18n[regionCapture.overrideCustomCursorText]}
                </label>
                <input
                  id={screen.customCursorText}
                  type="text"
                  value={settings[screen.customCursorText]}
                  data-settings-key={screen.customCursorText} onChange={changeSetting} /> </div> */}
      {/* label + extendableSelect<WindowSize>  */}
      {/*
            overrideCustomCursorText: 'Use custom info text near cursor:',
      customCursorText: null,
      snapRegion: 'Sizes region will snap to when holding "Alt" key:',
      <div className="content-edit__line">
                <label htmlFor={regionCapture.snapRegion}>
                  {i18n[regionCapture.snapRegion]}
                </label>
                <select id={regionCapture.snapRegion}>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div> */}
      <CheckLabel id="regionCapture.showPosition">
        Show position and size info
      </CheckLabel>
      <CheckLabel id="regionCapture.showMagnifier">
        Show magnifier near cursor
      </CheckLabel>
      <CheckLabel id="regionCapture.useSquareMagnifier">
        Use square magnifier instead of circle
      </CheckLabel>
      <LabelNum
        id="regionCapture.magnifierPixelCount"
        min={3}
        max={35}
        step={2}
      >
        Magnifier pixel count:
      </LabelNum>
      <LabelNum id="regionCapture.magnifierSizeCount" min={3} max={30} step={1}>
        Magnifier pixel size:
      </LabelNum>
      <CheckLabel id="regionCapture.showCrosshair">
        Show screen wide crosshair
      </CheckLabel>

      {/*

            useFixedSize: 'Fixed size region mode:',
      fixedSizeWidth: 'Width:',
      fixedSizeHeight: 'Height:',
       label + SizeInput (2 inputs) */}
      {/* <div className="content-edit__line">
                <input
                  id={regionCapture.useFixedSize}
                  type="checkbox"
                  value={settings[regionCapture.useFixedSize]}
                  onChange={changeSetting}
                />
                <label htmlFor={regionCapture.useFixedSize}>
                  {i18n[regionCapture.useFixedSize]}
                </label>
                <label htmlFor={regionCapture.fixedSizeWidth}>
                  {i18n[regionCapture.fixedSizeWidth]}
                </label>
                <input
                  id={regionCapture.fixedSizeWidth}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[regionCapture.fixedSizeWidth]}
                  data-settings-key={regionCapture.fixedSizeWidth}
                  onChange={changeSetting}
                />
                <label htmlFor={regionCapture.fixedSizeHeight}>
                  {i18n[regionCapture.fixedSizeHeight]}
                </label>
                <input
                  id={regionCapture.fixedSizeHeight}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[regionCapture.fixedSizeHeight]}
                  data-settings-key={regionCapture.fixedSizeHeight}
                  onChange={changeSetting}
                />
              </div> */}
      <CheckLabel id="regionCapture.showFPS">
        Show FPS in top left corner
      </CheckLabel>
    </>
  )
}
