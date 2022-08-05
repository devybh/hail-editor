import { AbstractRow } from '@editor/Components/Abstracts'

export default class ImageRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
