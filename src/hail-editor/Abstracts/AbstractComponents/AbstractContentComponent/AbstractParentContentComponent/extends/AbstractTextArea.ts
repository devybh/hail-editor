import AbstractParentContentComponent from '../AbstractParentContentComponent'

/**
 * extends AbstractParentContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractTextArea extends AbstractParentContentComponent {
  readonly isTextArea = true

  constructor(public props: AbstractProps.AbstractTextArea) {
    super(props)
  }
}
