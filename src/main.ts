import './style.scss'
import { HailEditor, makeConfig } from '@editor/index'

makeConfig({
  element: document.querySelector('#editor-area')!
})

const hailEditor = new HailEditor(
  makeConfig({
    element: document.querySelector('#editor-area')!
  })
)

Object.assign(window, { hailEditor })
