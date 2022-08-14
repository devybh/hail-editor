import AbstractCommonClass from '../AbstractCommonClass'

/**
 * extends AbstractCommonClass
 */
export default abstract class AbstractComponent extends AbstractCommonClass {
  static TAG_NAME = 'div'
  protected element: HTMLElement

  readonly isComponent = true

  constructor(public props: AbstractProps.AbstractComponent) {
    super(props)
    this.element = document.createElement((this.constructor as typeof AbstractComponent).TAG_NAME)
  }

  public abstract update(): Promise<void>
}
