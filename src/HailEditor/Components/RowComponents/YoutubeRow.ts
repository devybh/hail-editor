import { AbstractRow } from '@h/Abstracts'

export default class YoutubeRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
