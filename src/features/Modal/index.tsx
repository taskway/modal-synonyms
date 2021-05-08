import React, { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.sass'
import { Button } from './components/Button'
import { actions } from '../Synonyms/actions'
import { Close } from '../../common/icons'

interface IModal {
  children?: ReactNode
}

const HEADER = 'Редактирование группы синонимов поисковых фраз'

export const Modal: FC<IModal> = ({ children }) => {
  const dispatch = useDispatch()
  const buttons = [
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
  return (
    <div className={styles.modal}>
      <div className={styles.dialog}>
        <header>
          <h3>{HEADER}</h3>
          <Close />
        </header>
        <section>
          {children}
        </section>
        <footer>
          {buttons.map((i) => <Button key={i.title} {...i} />)}
        </footer>
      </div>
    </div>
  )
}
