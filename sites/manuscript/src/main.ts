import './style.scss'
import * as HailEditor from 'hail-editor'
import { title, subtitle, body } from './sampleContents'

console.log(HailEditor)

// const editorAreaSelector = '#editor-area'
// const editorArea = document.querySelector(editorAreaSelector)
// if (!editorArea) throw Error(`${editorAreaSelector} is null`)
//
// const config = makeConfig({
//   element: editorArea
// })
// const hailEditor = new HailEditor(config)
//
// const contentsMap = new Map(Object.entries({ title, subtitle, body }))
// hailEditor.setContents(contentsMap)
//
// Object.assign(window, { hailEditor })
