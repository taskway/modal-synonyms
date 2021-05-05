import React, { FC, ReactNode } from 'react'
import { Icons } from '../../common/icons'
import styles from './styles.module.sass'
import { Button } from './components/Button'
import { ButtonType } from './types'

interface IModal {
  children?: ReactNode
  header: string
  buttons: ButtonType[]
}

export const Modal: FC<IModal> = ({ children, header, buttons }) => (
  <div className={styles.modal}>
    <div className={styles.dialog}>
      <header>
        <h3>{header}</h3>
        <Icons.close />
      </header>
      <section>
        {children}
      </section>
      <footer>
        {buttons.map((i: any) => <Button key={i.title} {...i} />)}
      </footer>
    </div>
  </div>
)
