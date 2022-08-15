import './style.scss'
import { HailEditor, ContentsConvertor } from './HailEditor'
// import { title, subtitle, body } from './SampleContents/Compressed'
import * as SampleContents from './SampleContents/Baisc'

console.log({ HailEditor, SampleContents })

// const editorAreaSelector = '#editor-area'
// const editorArea = document.querySelector(editorAreaSelector)
// if (!editorArea) throw Error(`${editorAreaSelector} is null`)
//
// const Config = makeConfig({
//   element: editorArea
// })
// const hailEditor = new HailEditor(Config)
//
// const contentsMap = new Map(Object.entries({ title, subtitle, body }))
// hailEditor.setContents(contentsMap)
//
// Object.assign(window, { hailEditor })
