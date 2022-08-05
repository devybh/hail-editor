import { AbstractRow } from '@editor/Components/Abstracts'

export default class CodeRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
