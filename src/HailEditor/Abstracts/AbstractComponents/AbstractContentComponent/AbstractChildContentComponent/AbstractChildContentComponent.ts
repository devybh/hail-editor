import AbstractContentComponent from '../AbstractContentComponent'

interface AbstractChildContentComponentProps extends PropsOf<typeof AbstractContentComponent> {
  type: string
}

/**
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractChildContentComponent extends AbstractContentComponent {
  readonly isChildContentComponent = true

  constructor(public props: AbstractChildContentComponentProps) {
    super(props)
  }
}
