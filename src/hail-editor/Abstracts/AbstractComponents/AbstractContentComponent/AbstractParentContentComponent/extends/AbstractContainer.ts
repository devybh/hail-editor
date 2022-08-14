import AbstractParentContentComponent from '../AbstractParentContentComponent'
/**
 * extends AbstractParentContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractContainer extends AbstractParentContentComponent {
  readonly isContainer = true

  constructor(public props: AbstractProps.AbstractContainer) {
    super(props)
  }
}
