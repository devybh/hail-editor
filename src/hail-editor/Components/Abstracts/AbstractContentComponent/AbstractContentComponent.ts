import AbstractComponent from '@editor/Components/Abstracts/AbstractComponent'

type Props = ConstructorParameters<typeof AbstractComponent>[0] & {}

export default abstract class AbstractContentComponent extends AbstractComponent {
  readonly isContentComponent = true

  constructor(public props: Props) {
    super(props)
    console.log('todo')
  }
}
