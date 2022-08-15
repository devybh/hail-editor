import AbstractParentContentComponent from '../AbstractParentContentComponent'

interface AbstractContainerProps extends PropsOf<typeof AbstractParentContentComponent> {}

/**
 * extends AbstractParentContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractContainer extends AbstractParentContentComponent {
  readonly isContainer = true

  constructor(public props: AbstractContainerProps) {
    super(props)
  }
}
