import AbstractCommonClass from '@h/Abstracts/AbstractCommonClass'

interface AbstractComponentProps extends PropsOf<typeof AbstractCommonClass> {}

/**
 * extends AbstractCommonClass
 */
export default abstract class AbstractComponent extends AbstractCommonClass {
  /**
   *
   */
  static TAG_NAME = 'div'

  /**
   * @protected
   */
  protected element: HTMLElement

  readonly isComponent = true

  constructor(public props: AbstractComponentProps) {
    super(props)
    this.element = document.createElement((this.constructor as typeof AbstractComponent).TAG_NAME)
  }

  public abstract update(): Promise<void>
}
