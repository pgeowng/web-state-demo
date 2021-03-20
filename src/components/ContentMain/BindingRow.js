import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import { ButtonWhite } from '../Button'
import { InputWhite } from '../Input'

const statusMap = {
  working: 'input--success',
  warning: 'input--warning',
  failure: 'input--failure',
}

export const BindingRow = ({
  isSelected,
  description,
  mapping,
  status,
  onEdit,
  onMap,
}) => {
  /* remapping code */
  return (
    <div className="content-main__item">
      <ButtonWhite
        onClick={onEdit}
        className="button--icon content-main__field"
        style={{ flexGrow: '0' }}
      >
        <FontAwesomeIcon className="button--img" icon={faCog} />
      </ButtonWhite>
      <InputWhite
        className={`${
          isSelected ? 'input--success' : ''
        } content-main__desc content-main__field`}
        value={description}
      />
      <ButtonWhite className="content-main__field content-main__mapping">
        {mapping}
      </ButtonWhite>
      <InputWhite
        className={`input--box ${statusMap[status]} content-main__field`}
        value=""
        disabled
      />
    </div>
  )
}
