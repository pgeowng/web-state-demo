import React, { useState } from 'react'
import './style.css'

import { ButtonReset } from '../UI'
import { I18N } from './i18n'

import { CheckLabel } from './UI/CheckLabel'
import { LabelSelect } from './UI/LabelSelect'
import { LabelNum, CheckLabelNum } from './UI/LabelNum'
// import { CaptureScreenRecorder } from './category/CaptureScreenRecorder'

const Select = ({ className, ...props }) => (
  <select className={`content-select ${className || ''}`} {...props} />
)

const keys = {
  image: {
    default: {
      override: 'Override image settings',
      imageFormat: 'Image format:',
      pngDepth: 'PNG bit depth:',
      jpegQuality: 'JPEG quality:',
      gifQuality: 'GIF quality:',
      jpegThreshold:
        'If image size bigger than specified size then use JPEG as image format',
      jpegThresholdValue: null,
      existAction: 'If file exists:',
    },
  },

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
  imageFormat: 'PNG JPEG GIF BMP TIFF'.split(' '),
  pngDepth: 'Default,Automatically detect,32 bit,24 bit'.split(','),
  gifQuality: `Default .NET encoding (Fast encoding but average quality)
Octree quantizer 256 colors (Slow encoding but better quality)
Octree quantizer 16 colors
Palette quantizer grayscale 256 colors`.split('\n'),
  existAction: `Ask what to do
Overwrite file
Append number to the filename
Do not save`.split('\n'),
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
const image = keys.image.default

const _uid = 'qwefqwef'
const uid = (a) => _uid + '--' + a

export const ContentEdit = ({ categories }) => {
  //const [category, setCategory] = useState('image')
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
          {category === 'image' ? (
            <>
              <CheckLabel id={image.override} />
              <LabelSelect
                id={image.imageFormat}
                optionEnum={selectEnum.imageFormat}
                oneLine={false}
              />
              <LabelSelect
                id={image.pngDepth}
                optionEnum={selectEnum.pngDepth}
                oneLine={false}
              />
              <LabelNum id={image.jpegQuality} min={1} max={100} step={1} />
              <CheckLabelNum
                id={image.jpegThresholdValue}
                checkId={image.jpegThreshold}
                min={100}
                /* max */
                max={Number.MAX_SAFE_INTEGER}
                step={1}
              />
              <LabelSelect
                id={image.existAction}
                optionEnum={selectEnum.existAction}
                oneLine={false}
              />
            </>
          ) : category === 'capture-screen-recording' ? (
            <>
              <div className="content-edit__line">
                <button type="button">Screen recording options...</button>
              </div>

              <LabelNum id={screen.FPS} min={1} max={60} step={1} />
              <LabelNum id={screen.gifFPS} min={1} max={60} step={1} />
              <CheckLabel id={screen.showCursor} />
              <CheckLabelNum
                id={screen.startDelay}
                min={1}
                max={60}
                step={1}
                checkId={screen.overrideStartDelay}
              />
              <CheckLabelNum
                id={screen.fixedDuration}
                min={1}
                max={60}
                step={1}
                checkId={screen.overrideFixedDuration}
              />
              <CheckLabel id={screen.useLossless} />
              <CheckLabel id={screen.transparentSelection} />
              <CheckLabel id={screen.conformation} />
            </>
          ) : category === 'capture-region-capture' ? (
            <>
              <CheckLabel id={region.useMultiregion} />

              <LabelSelect
                id={region.rmbAction}
                optionEnum={selectEnum.mouseButtonAction}
              />
              <LabelSelect
                id={region.mmbAction}
                optionEnum={selectEnum.mouseButtonAction}
              />
              <LabelSelect
                id={region.m4bAction}
                optionEnum={selectEnum.mouseButtonAction}
              />
              <LabelSelect
                id={region.m5bAction}
                optionEnum={selectEnum.mouseButtonAction}
              />
              <CheckLabel id={region.allowHover} />
              <CheckLabel id={region.detectInsideRegions} />
              <CheckLabel id={region.dimBackground} />
              {/* checkbox + label + text input (help & validation) */}
              {/* <div className="content-edit__line">
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
              </div> */}
              {/* label + extendableSelect<WindowSize>  */}
              {/* <div className="content-edit__line">
                <label htmlFor={region.snapRegion}>
                  {i18n[region.snapRegion]}
                </label>
                <select id={region.snapRegion}>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div> */}
              <CheckLabel id={region.showPosition} />
              <CheckLabel id={region.showMagnifier} />
              <LabelNum
                id={region.magnifierPixelCount}
                min={3}
                max={35}
                step={2}
              />
              <LabelNum
                id={region.magnifierSizeCount}
                min={3}
                max={30}
                step={1}
              />
              <CheckLabel id={region.showCrosshair} />
              {/* label + SizeInput (2 inputs) */}
              {/* <div className="content-edit__line">
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
              </div> */}
              <CheckLabel id={region.showFPS} />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </I18N.Provider>
  )
}
