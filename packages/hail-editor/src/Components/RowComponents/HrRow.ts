import { AbstractRow } from 'src/Abstracts'

export default class HrRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
