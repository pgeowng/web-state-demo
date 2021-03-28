import React from 'react'
import { CheckLabel, LabelSelect, CheckLabelNum, LabelNum } from '../UI'

const imageFormat = ['PNG', 'JPEG', 'GIF', 'BMP', 'TIFF']
const pngDepth = ['Default', 'Automatically detect', '32 bit', '24 bit']
const gifQuality = [
  'Default .NET encoding (Fast encoding but average quality)',
  'Octree quantizer 256 colors (Slow encoding but better quality)',
  'Octree quantizer 16 colors',
  'Palette quantizer grayscale 256 colors',
]
const existAction = [
  'Ask what to do',
  'Overwrite file',
  'Append number to the filename',
  'Do not save',
]

export const ImageDefault = () => {
  return (
    <>
      <CheckLabel id="image.override">Override image settings</CheckLabel>
      <LabelSelect
        id="image.imageFormat"
        optionEnum={imageFormat}
        oneLine={false}
      >
        Image format:
      </LabelSelect>
      <LabelSelect id="image.pngDepth" optionEnum={pngDepth} oneLine={false}>
        PNG bit depth:
      </LabelSelect>
      <LabelNum id="image.jpegQuality" min={1} max={100} step={1}>
        JPEG quality:
      </LabelNum>
      <LabelSelect
        id="image.gifQuality"
        optionEnum={gifQuality}
        oneLine={false}
      >
        GIF quality:
      </LabelSelect>
      <CheckLabelNum
        id="image.jpegThresholdValue"
        checkId="image.jpegThreshold"
        min={100}
        /* max */
        max={Number.MAX_SAFE_INTEGER}
        step={1}
      >
        If image size bigger than specified size then use JPEG as image format:
      </CheckLabelNum>
      <LabelSelect
        id="image.existAction"
        optionEnum={existAction}
        oneLine={false}
      >
        If file exists:
      </LabelSelect>
    </>
  )
}
