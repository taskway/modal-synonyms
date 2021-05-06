import React, { FC, useRef } from 'react'
import { Icons } from '../../icons'
import styles from './styles.module.sass'

interface IButton {
    title: string
    loading?: boolean
    disabled?: boolean
}

export const Button: FC<IButton> = ({ title, loading, disabled }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const value = loading ? <Icons.loading /> : title
  let style
  if (loading) {
    style = {
      width: ref.current?.offsetWidth,
      height: ref.current?.offsetHeight
    }
  }
  if (disabled) {
    style = {
      background: 'rgba(52, 66, 115, 0.5)',
      opacity: '0.5'
    }
  }
  return (
    <>
      {loading && <div className={styles.title}>загрузка</div>}
      <button
        style={style}
        ref={ref}
        type="submit"
        className={styles.button}
        disabled={loading || disabled}
      >
        {value}
      </button>
    </>

  )
}
