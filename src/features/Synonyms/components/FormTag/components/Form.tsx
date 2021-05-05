import React, {
  FC, useCallback, useEffect, useState
} from 'react'
import { useDispatch } from 'react-redux'
import { Icons } from '../../../../../common/icons'
import { addSynonym, updateSynonym, setEditMode } from '../../../actions'
import styles from '../../../styles.module.sass'
import { Button } from '../../../../../common/components/Button'
import { Input } from '../../../../../common/components/Input'

interface IForm {
    id?: number
    title?: string
    edit?: boolean
}

export const Form: FC<IForm> = ({ id, title, edit }) => {
  const dispatch = useDispatch()
  const [synonym, setSynonym] = useState('')
  const [errorText, setErrorText] = useState(false)

  useEffect(() => {
    if (title) {
      setSynonym(title)
    }
  }, [title])

  const formTitle = edit ? 'редактирование синонима' : 'добавление синонима'
  const buttonTitle = edit ? 'Сохранить' : 'Добавить'

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorText) setErrorText(false)
    setSynonym(e.target.value)
  }, [errorText])

  const onSubmit = useCallback((e: any) => {
    e.preventDefault()
    save()
  }, [synonym])

  const save = useCallback(() => {
    if (synonym) {
      if (!id) {
        dispatch(addSynonym(synonym))
      } else {
        dispatch(updateSynonym(id, synonym))
      }
      setSynonym('')
    } else {
      setErrorText(true)
    }
  }, [id, synonym])

  const close = useCallback(() => {
    if (id) dispatch(setEditMode(id))
  }, [id])

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>{formTitle}:</div>
      <form onSubmit={onSubmit}>
        <Input value={synonym} error={errorText} onChange={onChange} />
        <div className={styles.formButtonContainer}>
          <Button title={buttonTitle} />
          {edit && <Icons.close onClick={close} />}
        </div>
      </form>
    </div>
  )
}
