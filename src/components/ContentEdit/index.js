import React, { useState } from 'react'
import './style.css'

import { ButtonReset } from '../Button'
import { CaptureScreenRecorder } from './category/CaptureScreenRecorder'

const Select = ({ className, ...props }) => (
  <select className={`content-select ${className || ''}`} {...props} />
)

export const ContentEdit = ({ categories }) => {
  const [category, setCategory] = useState(categories[0].key)

  const onCategory = (e) => {
    setCategory(e.target.dataset.category)
  }

  return (
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
        <CaptureScreenRecorder
          settings={{
            'screen-recording-fps': 4,
          }}
        />
      </div>
    </div>
  )
}
