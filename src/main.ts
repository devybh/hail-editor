import './style.scss'
import { HailEditor, makeConfig } from '@editor/index'

const editorAreaSelector = '#editor-area'
const editorArea = document.querySelector(editorAreaSelector)
if (!editorArea) throw Error(`${editorAreaSelector} is null`)

const config = makeConfig({
  element: editorArea
})
const hailEditor = new HailEditor(config)

Object.assign(window, { hailEditor })
