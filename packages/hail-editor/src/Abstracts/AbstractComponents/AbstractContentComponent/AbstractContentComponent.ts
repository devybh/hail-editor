import AbstractComponent from '../AbstractComponent'

/**
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractContentComponent extends AbstractComponent {
  readonly isContentComponent = true

  constructor(public props: AbstractProps.AbstractContentComponent) {
    super(props)
    console.log('todo')
  }
}
