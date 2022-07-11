import {createCharComponentMap, createRowComponentMap} from "../Components";

export default class Context {

    constructor(readonly props: {
        element: Element
        rowComponentMap: ReturnType<typeof createRowComponentMap>
        charComponentMap: ReturnType<typeof createCharComponentMap>
    }) {
        const shadow = this.props.element.attachShadow({mode: 'closed'})
        shadow.appendChild(Object.assign(document.createElement('div'), {
            innerText: '테스트',
        }))
    }


}
