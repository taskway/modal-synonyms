import React, {
  FC, useEffect, useState
} from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions'
import styles from '../styles.module.sass'
import { Button } from '../../../common/components/Button'
import { Input } from '../../../common/components/Input'
import { Close } from '../../../common/icons'

interface IForm {
    id?: number
    title?: string
    edit?: boolean
}

export const Form: FC<IForm> = ({ id, title, edit }) => {
  const dispatch = useDispatch()
  const [synonymTitle, setSynonymTitle] = useState('')
  const [errorText, setErrorText] = useState(false)

  useEffect(() => {
    if (title) {
      setSynonymTitle(title)
    }
  }, [title])

  const formTitle = edit ? 'редактирование синонима' : 'добавление синонима'
  const buttonTitle = edit ? 'Сохранить' : 'Добавить'

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorText) setErrorText(false)
    setSynonymTitle(e.target.value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    save()
  }

  const save = () => {
    if (synonymTitle) {
      if (!id) {
        dispatch(actions.addSynonym(synonymTitle))
      } else {
        dispatch(actions.updateSynonym(id, synonymTitle))
      }
      setSynonymTitle('')
    } else {
      setErrorText(true)
    }
  }

  const close = () => {
    if (id) dispatch(actions.setEditModeSynonym(id))
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>{formTitle}:</div>
      <form onSubmit={onSubmit}>
        <Input value={synonymTitle} error={errorText} onChange={onChange} />
        <div className={styles.formButtonContainer}>
          <Button title={buttonTitle} />
          {edit && <Close onClick={close} />}
        </div>
      </form>
    </div>
  )
}
