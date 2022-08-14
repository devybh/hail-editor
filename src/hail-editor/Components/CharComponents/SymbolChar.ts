import { AbstractChar } from '@h/Abstracts'

export default class SymbolChar extends AbstractChar {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
