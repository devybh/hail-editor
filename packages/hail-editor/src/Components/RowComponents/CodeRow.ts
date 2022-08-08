import { AbstractRow } from 'src/Abstracts'

export default class CodeRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
