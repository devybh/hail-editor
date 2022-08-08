import AbstractChildContentComponent from '../AbstractChildContentComponent'

/**
 * extends AbstractChildContentComponent
 * extends AbstractContentComponent
 * extends AbstractComponent
 * extends AbstractCommonClass
 */
export default abstract class AbstractRow extends AbstractChildContentComponent {
  readonly isRow = true

  constructor(public props: AbstractProps.AbstractRow) {
    super(props)
  }
}
