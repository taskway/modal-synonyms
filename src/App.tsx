import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from './features/Modal'
import { Synonyms } from './features/Synonyms'
import { clearSynonyms, saveSynonyms } from './features/Synonyms/actions'

export const App: FC = () => {
  const dispatch = useDispatch()
  const structure = {
    header: 'Редактирование группы синонимов поисковых фраз',
    buttons: [
      {
        title: 'Сохранить изменения',
        background: '#5E9574',
        onClick: useCallback(() => dispatch(saveSynonyms()), [])
      },
      {
        title: 'Очистить синонимы',
        background: '#955E5E',
        onClick: useCallback(() => dispatch(clearSynonyms()), [])
      }
    ]
  }

  return (
    <div>
      <Modal header={structure.header} buttons={structure.buttons}>
        <Synonyms />
      </Modal>
    </div>
  )
}
