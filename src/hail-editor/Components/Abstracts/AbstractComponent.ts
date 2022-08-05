type Props = {}

export default abstract class AbstractComponent {
  static TAG_NAME = 'div'
  protected element: HTMLElement

  readonly isComponent = true

  constructor(public props: Props) {
    this.element = document.createElement((this.constructor as typeof AbstractComponent).TAG_NAME)
  }

  public abstract update(): Promise<void>
}
