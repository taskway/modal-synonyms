import React, { FC } from 'react'
import styles from '../styles.module.sass'
import { ButtonType } from '../types'

export const Button: FC<ButtonType> = ({ background, onClick, title }) => (
  <div style={{ background }} className={styles.button} onClick={onClick}>{title}</div>
)
