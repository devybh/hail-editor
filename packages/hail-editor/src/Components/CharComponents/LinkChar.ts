import { AbstractChar } from 'src/Abstracts'

export default class LinkChar extends AbstractChar {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
