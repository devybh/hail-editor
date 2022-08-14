import { AbstractChar } from '@h/Abstracts'

export default class PlainChar extends AbstractChar {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
