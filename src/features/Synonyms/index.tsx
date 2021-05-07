import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../common/types'
import { Form } from './components/Form'
import styles from './styles.module.sass'
import { Tag } from './components/Tag'
import { Modal } from '../Modal'
import { Info } from '../../common/icons'

export const Synonyms: FC = () => {
  const synonyms = useSelector((state: RootState) => state.synonyms)
  const editMode = synonyms.some((synonym) => synonym.edit)
  return (
    <Modal>
      <div>
        <div className={styles.header}>
          <h4 className={styles.title}>Синонимы</h4>
          <Info />
        </div>
        {!editMode && <Form />}
        {synonyms.map((synonym) => (synonym.edit
          ? <Form key={synonym.id} id={synonym.id} title={synonym.title} edit={synonym.edit} />
          : <Tag key={synonym.id} id={synonym.id} title={synonym.title} />
        ))}
      </div>
    </Modal>
  )
}
