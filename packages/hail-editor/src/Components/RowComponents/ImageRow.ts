import { AbstractRow } from 'src/Abstracts'

export default class ImageRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
