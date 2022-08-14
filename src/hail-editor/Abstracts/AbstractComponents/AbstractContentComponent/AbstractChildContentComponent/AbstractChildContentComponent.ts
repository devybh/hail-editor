import AbstractContentComponent from '../AbstractContentComponent'

/**
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractChildContentComponent extends AbstractContentComponent {
  readonly isChildContentComponent = true

  constructor(public props: AbstractProps.AbstractChildContentComponent) {
    super(props)
  }
}
