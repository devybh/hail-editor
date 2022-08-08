import AbstractChildContentComponent from '../AbstractChildContentComponent'

/**
 * extends AbstractChildContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractChar extends AbstractChildContentComponent {
  static TAG_NAME = 'span'

  readonly isChar = true

  constructor(public props: AbstractProps.AbstractChar) {
    super(props)
  }
}
