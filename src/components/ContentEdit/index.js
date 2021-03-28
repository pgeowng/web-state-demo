import React, { useState } from 'react'
import './style.css'

import { ButtonReset } from '../UI'

import { ImageDefault } from './category/ImageDefault'
import { CaptureRegionCapture } from './category/CaptureRegionCapture'
import { CaptureScreenRecorder } from './category/CaptureScreenRecorder'

const categories = [
  {
    key: 'task',
    label: 'Task',
  },
  {
    key: 'general',
    label: 'General',
  },
  {
    key: 'image',
    label: 'Image',
    element: ImageDefault,
  },
  {
    key: 'image-effects',
    label: 'Effects',
    isSubitem: true,
  },
  {
    key: 'image-thumbnail',
    label: 'Thumbnail',
    isSubitem: true,
  },
  {
    key: 'capture',
    label: 'Capture',
  },
  {
    key: 'capture-region-capture',
    label: 'Region capture',
    isSubitem: true,
    element: CaptureRegionCapture,
  },
  {
    key: 'capture-screen-recorder',
    label: 'Screen recorder',
    isSubitem: true,
    element: CaptureScreenRecorder,
  },
  {
    key: 'capture-ocr',
    label: 'OCR',
    isSubitem: true,
  },
  {
    key: 'upload',
    label: 'Upload',
  },
  {
    key: 'upload-file-naming',
    label: 'File naming',
    isSubitem: true,
  },
  {
    key: 'upload-clipboard-upload',
    label: 'Clipboard upload',
    isSubitem: true,
  },
  {
    key: 'upload-uploader-filters',
    label: 'Uploader filters',
    isSubitem: true,
  },
  {
    key: 'action',
    label: 'Action',
  },
  {
    key: 'watch-folders',
    label: 'Watch folders',
  },
  {
    key: 'tools',
    label: 'Tools',
  },
  {
    key: 'advanced',
    label: 'Advanced',
  },
]

export const ContentEdit = () => {
  //const [category, setCategory] = useState('image')
  const [category, setCategory] = useState('0')

  const onCategory = (e) => {
    setCategory(e.target.dataset.category)
  }

  const changeSetting = (e) => {
    console.log('hi')
    // onSettingSet({ key: e.target.dataset.key, value: e.target.value })
  }

  const El = categories[category].element || React.Fragment

  return (
    <div className="content-edit">
      <div className="content-edit__list">
        {categories.map(({ key, label, isSubitem }, idx) => (
          <ButtonReset
            key={key}
            className={`content-edit__item ${
              isSubitem ? 'content-edit__item--subitem' : ''
            } ${idx === category ? 'content-edit__item--selected' : ''}`}
            data-category={idx}
            onClick={onCategory}
          >
            {label}
          </ButtonReset>
        ))}
      </div>
      <div className="content-edit__inner">{<El />}</div>
    </div>
  )
}
