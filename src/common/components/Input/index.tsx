import React, { FC } from 'react'
import styles from './styles.module.sass'
import { Icons } from '../../icons'

interface IInput {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export const Input: FC<IInput> = ({ value, onChange, error }) => (
  <div>
    <input
      id="synonym"
      className={styles.formInput}
      type="text"
      placeholder="Введите название"
      value={value}
      onChange={onChange}
    />
    {error && <div className={styles.alert}><span><Icons.alert /></span> Текст ошибки</div>}
  </div>
)