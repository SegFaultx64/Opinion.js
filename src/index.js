import React from 'react'

import { blink } from './styles.scss'

const Blink = ({ title }) => {
  return (
    <h1 className={ blink }>{ title }</h1>
  )
}

export default Blink;
