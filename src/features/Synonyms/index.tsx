import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../common/types'
import { Icons } from '../../common/icons'
import { Form } from './components/Form'
import styles from './styles.module.sass'
import { Tag } from './components/Tag'
import { actions } from './actions'
import { Modal } from '../Modal'

export const Synonyms: FC = () => {
  const { synonyms, editMode } = useSelector((state: RootState) => state.synonyms)
  const dispatch = useDispatch()
  const structure = {
    header: 'Редактирование группы синонимов поисковых фраз',
    buttons: [
      {
        title: 'Сохранить изменения',
        background: '#5E9574',
        onClick: () => console.log('Синонимы сохранены')
      },
      {
        title: 'Очистить синонимы',
        background: '#955E5E',
        onClick: () => dispatch(actions.clearSynonyms())
      }
    ]
  }
  return (
    <Modal header={structure.header} buttons={structure.buttons}>
      <div>
        <div className={styles.header}>
          <h4 className={styles.title}>Синонимы</h4>
          <Icons.info />
        </div>
        {!editMode && <Form />}
        {synonyms.map((i) => {
          if (i.edit) {
            return <Form key={i.id} id={i.id} title={i.title} edit={i.edit} />
          }
          return <Tag key={i.id} id={i.id} title={i.title} />
        })}
      </div>
    </Modal>
  )
}
