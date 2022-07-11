import Context from "./Core/Context";
import AbstractRow from "./Components/RowComponents/AbstractRow";
import {createCharComponentMap, createRowComponentMap} from "./Components";

export default class HailEditor {

    #context: Context

    constructor(private props: { element: Element }) {

        const rowComponentMap = createRowComponentMap()
        const charComponentMap = createCharComponentMap()

        this.#context = new Context({
            ...props,
            rowComponentMap,
            charComponentMap
        })
    }

    registerRowComponent(type: string, component: AbstractRow) {

    }

    registerCharComponent() {

    }


    async setContents(contents: EditorContents) {
        // todo
        // this.#context.dom.setContents(contents)
        // (Object.values(contents) as FieldValue[]).map(rows => {
        //     if (typeof rows === 'string') {
        //
        //     } else {
        //         rows.forEach(row => {
        //             if (typeof row === 'string') {
        //
        //             } else {
        //
        //             }
        //         })
        //     }
        // })
    }

    async getContents({flush = true}: { flush?: boolean }) {
        // todo
        if (flush) {

        }
        //return Map()
    }

}
