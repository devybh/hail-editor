import { AbstractChar } from '@h/Abstracts'

export default class LinkChar extends AbstractChar {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
