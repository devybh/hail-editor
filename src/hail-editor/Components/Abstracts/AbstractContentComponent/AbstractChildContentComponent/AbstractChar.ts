import AbstractChildContentComponent from './AbstractChildContentComponent'

type Props = ConstructorParameters<typeof AbstractChildContentComponent>[0] & {
  type: string
  value: string
  style: Pick<
    CSSStyleDeclaration,
    'fontSize' | 'fontWeight' | 'color' | 'background' | 'textDecoration'
  >
}

export default abstract class AbstractChar extends AbstractChildContentComponent {
  static TAG_NAME = 'span'

  readonly isChar = true

  constructor(public props: Props) {
    super(props)
  }
}
