namespace AbstractProps {
  type AbstractCommonClass = {}
  /**
   * extends AbstractCommonClass
   */
  type AbstractComponent = AbstractCommonClass & {}
  /**
   * extends AbstractComponent
   * extends AbstractCommonClass
   */
  type AbstractContentComponent = AbstractComponent & {}
  /**
   * extends AbstractContentComponent
   * extends AbstractComponent
   * extends AbstractCommonClass
   */
  type AbstractChildContentComponent = AbstractContentComponent & {
    type: string
  }
  /**
   * extends AbstractContentComponent
   * extends AbstractComponent
   * extends AbstractCommonClass
   */
  type AbstractParentContentComponent = AbstractContentComponent & {}
  /**
   * extends AbstractChildContentComponent
   * extends AbstractContentComponent
   * extends AbstractComponent
   * extends AbstractCommonClass
   */
  type AbstractRow = AbstractChildContentComponent & {}
  /**
   * extends AbstractChildContentComponent
   * extends AbstractContentComponent
   * extends AbstractComponent
   * extends AbstractCommonClass
   */
  type AbstractChar = AbstractChildContentComponent & {
    value: string
    style: Pick<
      CSSStyleDeclaration,
      'fontSize' | 'fontWeight' | 'color' | 'background' | 'textDecoration'
    >
  }
  /**
   * extends AbstractParentContentComponent
   * extends AbstractContentComponent
   * extends AbstractComponent
   * extends AbstractCommonClass
   */
  type AbstractContainer = AbstractParentContentComponent & {}
  /**
   * extends AbstractChildContentComponent
   * extends AbstractContentComponent
   * extends AbstractComponent
   * extends AbstractCommonClass
   */
  type AbstractTextArea = AbstractParentContentComponent & {}
}
