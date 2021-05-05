import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../common/types'
import { FormTag } from './components/FormTag'
import { Icons } from '../../common/icons'
import { Form } from './components/FormTag/components/Form'
import styles from './styles.module.sass'

export const Synonyms = () => {
  const { editedSynonyms, editMode } = useSelector((state: RootState) => state.synonyms)
  return (
    <div>
      <div className={styles.header}>
        <h4 className={styles.title}>Синонимы</h4>
        <Icons.info />
      </div>
      {!editMode && <Form />}
      {editedSynonyms.map((i) => <FormTag key={i.id} {...i} />)}
    </div>
  )
}
