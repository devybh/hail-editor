import { AbstractChar, AbstractRow } from '@editor/Components/Abstracts'

type Props = ConstructorParameters<typeof AbstractRow>[0] & {
  type: 'Paragraph'
  chars: ConstructorParameters<typeof AbstractChar>[0][]
  style?: {
    clear?: 'both'
    textAlign?: CSSStyleDeclaration['textAlign']
  }
}

export default class ParagraphRow extends AbstractRow {
  constructor(props: any) {
    super(props)
  }

  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
