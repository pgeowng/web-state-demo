import React, { useState } from 'react'
import './style.css'

import { ButtonReset } from '../Button'
import { I18N } from './i18n'

import { CheckLabel } from './UI/CheckLabel'
import { LabelSelect } from './UI/LabelSelect'
// import { CaptureScreenRecorder } from './category/CaptureScreenRecorder'

const Select = ({ className, ...props }) => (
  <select className={`content-select ${className || ''}`} {...props} />
)

const keys = {
  capture: {
    regionCapture: {
      useMultiregion:
        'Use multi region mode which will also allow resizing and moving regions',
      rmbAction: 'Mouse right click action:',
      mmbAction: 'Mouse middle click action:',
      m4bAction: 'Mouse 4 click action:',
      m5bAction: 'Mouse 5 click action:',
      allowHover: 'Detect window regions and allow cursor hover capture',
      detectInsideRegions: 'Also detect control regions inside window',
      dimBackground:
        'Dim background so selection can be differentiated easily (affects startup speed)',
      overrideCustomCursorText: 'Use custom info text near cursor:',
      customCursorText: null,
      snapRegion: 'Sizes region will snap to when holding "Alt" key:',
      showPosition: 'Show position and size info',
      showMagnifier: 'Show magnifier near cursor',
      useSquareMagnifier: 'Use square magnifier instead of circle',
      magnifierPixelCount: 'Magnifier pixel count:',
      magnifierSizeCount: 'Magnifier pixel size:',
      showCrosshair: 'Show screen wide crosshair',
      useFixedSize: 'Fixed size region mode:',
      fixedSizeWidth: 'Width:',
      fixedSizeHeight: 'Height:',
      showFPS: 'Show FPS in top left corner',
    },
    screenRecorder: {
      FPS: 'Screen recording FPS:',
      gifFPS: 'GIF FPS:',
      showCursor: 'Show cursor in recording',
      overrideStartDelay: 'Start recoring after',
      startDelay: null,
      overrideFixedDuration: 'Fixed duration:',
      fixedDuration: null,
      useLossless:
        'Record using lossless encoding and then apply user encoding option',
      transparentSelection: 'Use transparent region selection',
      conformation: 'Ask for conformation',
    },
  },
}

const i18n = {}
const selectEnum = {
  mouseButtonAction: `Do nothing
Cancel capture
Remove shape or cancel capture
Remove shape
Swap tool type
Capture fullscreen
Capture active monitor`.split('\n'),
}

console.log(i18n)

Object.keys(keys).forEach((section) =>
  Object.keys(keys[section]).forEach((group) =>
    Object.keys(keys[section][group]).forEach((entry) => {
      const k = `${section}.${group}.${entry}`
      const i = keys[section][group][entry]
      i18n[k] = i
      keys[section][group][entry] = k
    })
  )
)

Object.keys(selectEnum).forEach((entry) => {
  const k = `selectEnum.${entry}`
  i18n[k] = selectEnum[entry]
  selectEnum[entry] = k
})

console.log(keys)

const screen = keys.capture.screenRecorder
const region = keys.capture.regionCapture

const _uid = 'qwefqwef'
const uid = (a) => _uid + '--' + a

export const ContentEdit = ({ categories, onSettingSet, settings }) => {
  const [category, setCategory] = useState('capture-region-capture')

  const onCategory = (e) => {
    setCategory(e.target.dataset.category)
  }

  const changeSetting = (e) => {
    console.log('hi')
    // onSettingSet({ key: e.target.dataset.key, value: e.target.value })
  }

  return (
    <I18N.Provider value={i18n}>
      <div className="content-edit">
        <div className="content-edit__list">
          {categories.map(({ key, label, isSubitem }) => (
            <ButtonReset
              key={key}
              className={`content-edit__item ${
                isSubitem ? 'content-edit__item--subitem' : ''
              } ${key === category ? 'content-edit__item--selected' : ''}`}
              data-category={key}
              onClick={onCategory}
            >
              {label}
            </ButtonReset>
          ))}
        </div>
        <div className="content-edit__inner">
          {/* <CaptureScreenRecorder settings={settings} onChange={onChange} /> */}
          {category === 'capture-screen-recording' ? (
            <>
              <div className="content-edit__line">
                <button type="button">Screen recording options...</button>
              </div>
              {/* label + number input */}
              <div className="content-edit__line">
                <label htmlFor={screen.FPS}>{i18n[screen.FPS]}</label>
                <input
                  id={screen.FPS}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[screen.FPS]}
                  data-settings-key={screen.FPS}
                  onChange={changeSetting}
                />
              </div>
              {/* label + number input */}
              <div className="content-edit__line">
                <label htmlFor={screen.gifFPS}>{i18n[screen.gifFPS]}</label>
                <input
                  id={screen.gifFPS}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[screen.gifFPS]}
                  data-settings-key={screen.gifFPS}
                  onChange={changeSetting}
                />
              </div>
              <CheckLabel
                id={screen.showCursor}
                value={settings[screen.showCursor]}
                onChange={changeSetting}
              />
              {/* checkbox + label + number input*/}
              <div className="content-edit__line">
                <input
                  id={screen.overrideStartDelay}
                  type="checkbox"
                  value={settings[screen.overrideStartDelay]}
                  onChange={changeSetting}
                />
                <label htmlFor={screen.overrideStartDelay}>
                  {i18n[screen.overrideStartDelay]}
                </label>
                <input
                  id={screen.startDelay}
                  type="number"
                  max={60}
                  min={0}
                  step={0.1}
                  value={settings[screen.startDelay]}
                  data-settings-key={screen.startDelay}
                  onChange={changeSetting}
                />
              </div>
              <div className="content-edit__line">
                <input
                  id={screen.overrideFixedDuration}
                  type="checkbox"
                  value={settings[screen.overrideFixedDuration]}
                  onChange={changeSetting}
                />
                <label htmlFor={screen.overrideFixedDuration}>
                  {i18n[screen.overrideFixedDuration]}
                </label>
                <input
                  id={screen.fixedDuration}
                  type="number"
                  max={60}
                  min={0}
                  step={0.1}
                  value={settings[screen.fixedDuration]}
                  data-settings-key={screen.fixedDuration}
                  onChange={changeSetting}
                />
              </div>
              <CheckLabel
                id={screen.useLossless}
                value={settings[screen.useLossless]}
                onChange={changeSetting}
              />
              <CheckLabel
                id={screen.transparentSelection}
                value={settings[screen.transparentSelection]}
                onChange={changeSetting}
              />
              <CheckLabel
                id={screen.conformation}
                value={settings[screen.conformation]}
                onChange={changeSetting}
              />
            </>
          ) : category === 'capture-region-capture' ? (
            <>
              <CheckLabel
                id={region.useMultiregion}
                value={settings[region.useMultiregion]}
                onChange={changeSetting}
              />

              <LabelSelect
                id={region.rmbAction}
                value={settings[region.rmbAction]}
                onChange={changeSetting}
                optionsEnum={selectEnum.mouseButtonAction}
              />
              <LabelSelect
                id={region.mmbAction}
                value={settings[region.mmbAction]}
                onChange={changeSetting}
                optionsEnum={selectEnum.mouseButtonAction}
              />
              <LabelSelect
                id={region.m4bAction}
                value={settings[region.m4bAction]}
                onChange={changeSetting}
                optionsEnum={selectEnum.mouseButtonAction}
              />
              <LabelSelect
                id={region.m5bAction}
                value={settings[region.m5bAction]}
                onChange={changeSetting}
                optionsEnum={selectEnum.mouseButtonAction}
              />
              <CheckLabel
                id={region.allowHover}
                value={settings[region.allowHover]}
                onChange={changeSetting}
              />
              <CheckLabel
                id={region.detectInsideRegions}
                value={settings[region.detectInsideRegions]}
                onChange={changeSetting}
              />
              <CheckLabel
                id={region.dimBackground}
                value={settings[region.dimBackground]}
                onChange={changeSetting}
              />
              {/* checkbox + label + text input (help & validation) */}
              <div className="content-edit__line">
                <input
                  id={region.overrideCustomCursorText}
                  type="checkbox"
                  value={settings[region.overrideCustomCursorText]}
                  onChange={changeSetting}
                />
                <label htmlFor={region.overrideCustomCursorText}>
                  {i18n[region.overrideCustomCursorText]}
                </label>
                <input
                  id={screen.customCursorText}
                  type="text"
                  value={settings[screen.customCursorText]}
                  data-settings-key={screen.customCursorText}
                  onChange={changeSetting}
                />
              </div>
              {/* label + extendableSelect<WindowSize>  */}
              <div className="content-edit__line">
                <label htmlFor={region.snapRegion}>
                  {i18n[region.snapRegion]}
                </label>
                <select id={region.snapRegion}>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <CheckLabel
                id={region.showPosition}
                value={settings[region.showPosition]}
                onChange={changeSetting}
              />
              <CheckLabel
                id={region.showMagnifier}
                value={settings[region.showMagnifier]}
                onChange={changeSetting}
              />
              {/* label + number input */}
              <div className="content-edit__line">
                <label htmlFor={region.magnifierPixelCount}>
                  {i18n[region.magnifierPixelCount]}
                </label>
                <input
                  id={region.magnifierPixelCount}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[region.magnifierPixelCount]}
                  data-settings-key={region.magnifierPixelCount}
                  onChange={changeSetting}
                />
              </div>
              {/* label + number input */}
              <div className="content-edit__line">
                <label htmlFor={region.magnifierSizeCount}>
                  {i18n[region.magnifierSizeCount]}
                </label>
                <input
                  id={region.magnifierSizeCount}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[region.magnifierSizeCount]}
                  data-settings-key={region.magnifierSizeCount}
                  onChange={changeSetting}
                />
              </div>
              <CheckLabel
                id={region.showCrosshair}
                value={settings[region.showCrosshair]}
                onChange={changeSetting}
              />
              {/* label + SizeInput (2 inputs) */}
              <div className="content-edit__line">
                <input
                  id={region.useFixedSize}
                  type="checkbox"
                  value={settings[region.useFixedSize]}
                  onChange={changeSetting}
                />
                <label htmlFor={region.useFixedSize}>
                  {i18n[region.useFixedSize]}
                </label>
                <label htmlFor={region.fixedSizeWidth}>
                  {i18n[region.fixedSizeWidth]}
                </label>
                <input
                  id={region.fixedSizeWidth}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[region.fixedSizeWidth]}
                  data-settings-key={region.fixedSizeWidth}
                  onChange={changeSetting}
                />
                <label htmlFor={region.fixedSizeHeight}>
                  {i18n[region.fixedSizeHeight]}
                </label>
                <input
                  id={region.fixedSizeHeight}
                  type="number"
                  max={60}
                  min={1}
                  step={1}
                  value={settings[region.fixedSizeHeight]}
                  data-settings-key={region.fixedSizeHeight}
                  onChange={changeSetting}
                />
              </div>
              <CheckLabel
                id={region.showFPS}
                value={settings[region.showFPS]}
                onChange={changeSetting}
              />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </I18N.Provider>
  )
}