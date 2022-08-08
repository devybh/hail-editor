import { AbstractRow } from 'src/Abstracts'

export default class YoutubeRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
