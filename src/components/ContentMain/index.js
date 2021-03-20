import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { Button } from '../Button'
import { BindingRow } from './BindingRow'

export const ContentMain = ({ bindings, selectedIdx, reducer }) => {
  const onAdd = () => reducer({ type: 'add' })
  const onEdit = () => reducer({ type: 'edit', idx: selectedIdx })
  const onRemove = () => reducer({ type: 'remove', idx: selectedIdx })
  const onDuplicate = () => reducer({ type: 'duplicate', idx: selectedIdx })

  const onMoveUp = () => reducer({ type: 'move-up', idx: selectedIdx })

  const onMoveDown = () => reducer({ type: 'move-down', idx: selectedIdx })

  const onRestore = () => reducer({ type: 'restore' })

  return (
    <div className="content-main">
      <div className="content-main__toolbar">
        <Button onClick={onAdd}>Add...</Button>
        <Button onClick={onEdit}>Edit...</Button>
        <Button onClick={onRemove}>Remove...</Button>
        <Button onClick={onDuplicate}>Duplicate...</Button>
        <Button onClick={onMoveUp} className="button--icon">
          <FontAwesomeIcon className="button--img" icon={faArrowUp} />
        </Button>
        <Button onClick={onMoveDown} className="button--icon">
          <FontAwesomeIcon className="button--img" icon={faArrowDown} />
        </Button>
        <Button onClick={onRestore}>Restore default hotkeys...</Button>
      </div>
      <div className="content-main__list">
        {bindings.map(({ idx, desc, mapping, status }) => (
          <BindingRow
            key={idx}
            onEdit={() => reducer({ type: 'edit', idx })}
            onMap={(newMapping) =>
              reducer({ type: 'map', idx, mapping: newMapping })
            }
            status={status}
            description={desc}
            mapping={mapping}
            isSelected={selectedIdx === idx}
          />
        ))}
      </div>
    </div>
  )
}
