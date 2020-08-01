import React from 'react'
import ReactDom from 'react-dom'

import { App } from './app'


const render = (): void => (
  ReactDom.render(
    <App />,
    document.getElementById('root'),
  )
)

render()
