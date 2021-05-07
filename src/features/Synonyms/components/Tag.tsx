import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions'
import styles from '../styles.module.sass'
import { PaperBucket, Pencil } from '../../../common/icons'

interface ITag {
    id: number
    title: string
}

export const Tag: FC<ITag> = ({ id, title }) => {
  const dispatch = useDispatch()

  const edit = () => {
    dispatch(actions.setEditModeSynonym(id))
  }

  const remove = () => {
    dispatch((actions.removeSynonym(id)))
  }

  return (
    <div className={styles.tagContainer}>
      <div className={styles.tagTitle}>{title}</div>
      <div className={styles.tagButtons}>
        <Pencil onClick={edit} />
        <PaperBucket onClick={remove} />
      </div>
    </div>
  )
}
