import Context from './Core/Context'
import AbstractRow from './Abstracts/AbstractComponents/AbstractContentComponent/AbstractChildContentComponent/extends/AbstractRow'
// import { createCharComponentMap, createRowComponentMap } from './Components'
import AbstractComponent from './Abstracts/AbstractComponents/AbstractComponent'
import AbstractChar from './Abstracts/AbstractComponents/AbstractContentComponent/AbstractChildContentComponent/extends/AbstractChar'
// import { EditorContents } from './types/Contents'
import { Config } from './config'

console.log('test')

export default class HailEditor {
  #context: Context

  constructor(private props: Config) {
    // const rowComponentMap = createRowComponentMap()
    // const charComponentMap = createCharComponentMap()

    this.#context = new Context({
      ...props
      // rowComponentMap,
      // charComponentMap
    })
  }

  registerComponent(type: string, ComponentClass: typeof AbstractRow | typeof AbstractChar) {
    if (ComponentClass.prototype instanceof AbstractRow) {
      // this.#context.props.rowComponentMap.set(type, ComponentClass)
    } else if (ComponentClass instanceof AbstractChar) {
      // this.#context.props.charComponentMap.set(type, ComponentClass)
    } else {
      throw Error('component is not class extended AbstractRow | AbstractChr')
    }
  }

  async setContents(contents: Map<string, string | string[] | Record<string, any>>) {
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

  async getContents({ flush = true }: { flush?: boolean }) {
    // todo
    if (flush) {
    }
    // return Map()
  }

  async destory() {
    // todo
  }
}
