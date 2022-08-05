import AbstractContentComponent from '@editor/Components/Abstracts/AbstractContentComponent/AbstractContentComponent'

type Props = ConstructorParameters<typeof AbstractContentComponent>[0] & {
  type: string
}

export default abstract class AbstractChildContentComponent extends AbstractContentComponent {
  readonly isChildContentComponent = true

  constructor(public props: Props) {
    super(props)
  }
}
