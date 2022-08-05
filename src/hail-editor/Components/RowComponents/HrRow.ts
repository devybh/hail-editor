import { AbstractRow } from '@editor/Components/Abstracts'

export default class HrRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
