import AbstractContentComponent from '../AbstractContentComponent'

/**
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractParentContentComponent extends AbstractContentComponent {
  readonly isParentContentComponent = true

  constructor(public props: AbstractProps.AbstractParentContentComponent) {
    super(props)
  }

  protected abstract updateChild(): Promise<void>

  async update() {
    return this.updateChild()
  }
}
