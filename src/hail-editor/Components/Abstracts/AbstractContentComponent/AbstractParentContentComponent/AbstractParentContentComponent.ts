import AbstractContentComponent from '@editor/Components/Abstracts/AbstractContentComponent/AbstractContentComponent'

type Props = ConstructorParameters<typeof AbstractContentComponent>[0] & {}

export default abstract class AbstractParentContentComponent extends AbstractContentComponent {
  readonly isParentContentComponent = true

  constructor(public props: Props) {
    super(props)
  }

  protected abstract updateChild(): Promise<void>

  async update() {
    return this.updateChild()
  }
}
