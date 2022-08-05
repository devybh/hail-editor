import AbstractComponent from '../../AbstractComponent'
import AbstractParentContentComponent from '@editor/Components/Abstracts/AbstractContentComponent/AbstractParentContentComponent/AbstractParentContentComponent'

type Props = ConstructorParameters<typeof AbstractParentContentComponent>[0] & {
  type: string
}

export default abstract class AbstractTextArea extends AbstractParentContentComponent {
  readonly isTextArea = true

  constructor(public props: Props) {
    super(props)
  }
}
