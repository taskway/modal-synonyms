import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Icons } from '../../../../../common/icons'
import { removeSynonym, setEditMode } from '../../../actions'
import styles from '../../../styles.module.sass'

interface ITag {
    id: number
    title: string
}

export const Tag: FC<ITag> = ({ id, title }) => {
  const dispatch = useDispatch()

  const edit = useCallback(() => {
    dispatch(setEditMode(id))
  }, [id])

  const remove = useCallback(() => {
    dispatch((removeSynonym(id)))
  }, [id])

  return (
    <div className={styles.tagContainer}>
      <div className={styles.tagTitle}>{title}</div>
      <div className={styles.tagButtons}>
        <Icons.pencil onClick={edit} />
        <Icons.paperBucket onClick={remove} />
      </div>
    </div>
  )
}
