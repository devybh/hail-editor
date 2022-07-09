import './style.scss'
import HailEditor from "./hail-editor";

const element = document.querySelector('#editor-area')!;

const hailEditor = new HailEditor({
    element
});

Object.assign(window, {hailEditor})
