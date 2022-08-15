import AbstractChildContentComponent from '../AbstractChildContentComponent'

interface AbstractCharProps extends PropsOf<typeof AbstractChildContentComponent> {
  value: string
  style?: Pick<
    CSSStyleDeclaration,
    'fontSize' | 'fontWeight' | 'color' | 'background' | 'textDecoration'
  >
}

/**
 * extends AbstractChildContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractChar extends AbstractChildContentComponent {
  static TAG_NAME = 'span'

  readonly isChar = true

  constructor(public props: AbstractCharProps) {
    super(props)
  }
}
