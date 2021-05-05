import React, { FC } from 'react'
import { Form } from './components/Form'
import { Tag } from './components/Tag'
import { SynonymType } from '../../types'

export const FormTag: FC<SynonymType> = ({ id, title, edit }) => (
  <div>
    {edit ? <Form id={id} title={title} edit={edit} /> : <Tag id={id} title={title} />}
  </div>
)
