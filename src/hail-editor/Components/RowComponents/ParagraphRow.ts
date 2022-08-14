import { AbstractRow, AbstractChar } from '@h/Abstracts/index'

export type ParagraphRowProps = ConstructorParameters<typeof AbstractRow>[0] & {
  type: 'Paragraph'
  chars: PropsOf<AbstractChar>[]
  style?: {
    clear?: 'both'
    textAlign?: CSSStyleDeclaration['textAlign']
  }
}

export default class ParagraphRow extends AbstractRow {
  constructor(props: ParagraphRowProps) {
    super(props)
  }

  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
