import AbstractParentContentComponent from '../AbstractParentContentComponent'

interface AbstractAreaProps extends PropsOf<typeof AbstractParentContentComponent> {}

/**
 * extends AbstractParentContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractArea extends AbstractParentContentComponent {
  readonly isTextArea = true

  constructor(public props: AbstractAreaProps) {
    super(props)
  }
}
