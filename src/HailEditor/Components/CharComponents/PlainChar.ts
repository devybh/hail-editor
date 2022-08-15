import { AbstractChar } from '@h/Abstracts'

interface PlainCharProps extends PropsOf<typeof AbstractChar> {
  type: 'PlainChar'
  value: string
}

export default class PlainChar extends AbstractChar {
  constructor(props: PlainCharProps) {
    super(props)
  }

  update(): Promise<void> {
    console.log(this.element)
    return Promise.resolve(undefined)
  }
}
