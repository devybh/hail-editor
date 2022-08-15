import { AbstractRow } from '@h/Abstracts'

export default class CodeRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
