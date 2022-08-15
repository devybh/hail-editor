import AbstractComponent from '../AbstractComponent'

export interface AbstractContentComponentProps extends PropsOf<typeof AbstractComponent> {}

/**
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractContentComponent extends AbstractComponent {
  readonly isContentComponent = true

  constructor(public props: AbstractContentComponentProps) {
    super(props)
    console.log('todo')
  }
}
