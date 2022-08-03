import { createCharComponentMap, createRowComponentMap } from '../Components'

// type RowTypes = (typeof Context). todo

export default class Context {
  constructor(public readonly props: {
    element: Element;
    // rowComponentMap: Map<string, RowComponents>;
    // charComponentMap: ReturnType<typeof createCharComponentMap>;
  }) {
    const shadow = this.props.element.attachShadow({ mode: 'closed' })
    shadow.appendChild(
      Object.assign(document.createElement('div'), {
        innerText: '테스트'
      })
    )
  }


}
