import AbstractContentComponent from '../AbstractContentComponent'

interface AbstractParentContentComponentProps extends PropsOf<typeof AbstractContentComponent> {}

/**
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractParentContentComponent extends AbstractContentComponent {
  readonly isParentContentComponent = true

  constructor(public props: AbstractParentContentComponentProps) {
    super(props)
  }

  protected abstract updateChild(): Promise<void>

  async update() {
    return this.updateChild()
  }
}
