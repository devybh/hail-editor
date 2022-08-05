import AbstractChildContentComponent from './AbstractChildContentComponent'

type Props = ConstructorParameters<typeof AbstractChildContentComponent>[0] & {}

export default abstract class AbstractRow extends AbstractChildContentComponent {
  readonly isRow = true

  constructor(public props: Props) {
    super(props)
  }
}
