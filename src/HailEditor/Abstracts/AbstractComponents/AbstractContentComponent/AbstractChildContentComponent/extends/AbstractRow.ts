import AbstractChildContentComponent from '../AbstractChildContentComponent'

interface AbstractRowProps extends PropsOf<typeof AbstractChildContentComponent> {}

/**
 * extends AbstractChildContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractRow extends AbstractChildContentComponent {
  readonly isRow = true

  constructor(public props: AbstractRowProps) {
    super(props)
  }
}
