// type EditorContents = Map<string, FieldValue>
// type FieldValue = string | RowContents.Unknown[]
//
// namespace RowContents {
//   type Unknown = { type: string } & Record<string, unknown>
//   type Paragraph = {
//     rowType: 'Paragraph'
//     chars: Char.Unknown[]
//     style?: {
//       clear: 'both'
//       textAlign: CSSStyleDeclaration['textAlign']
//     }
//   }
//   type StyledParagraph = {
//     rowType: 'StyledParagraph'
//     value: string
//     className: string
//   }
//   type Image = {
//     rowType: 'Image'
//     src: string
//     originWidth?: number
//     originHeight?: number
//     style?: {
//       float?: 'left' | 'right'
//       width?: CSSStyleDeclaration['width']
//       height?: CSSStyleDeclaration['height']
//     }
//     caption?: string
//   }
//   type Youtube = {
//     rowType: 'Youtube'
//     id: string
//     style?: {
//       width?: CSSStyleDeclaration['width']
//       height?: CSSStyleDeclaration['height']
//     }
//   }
//   type HorizontalRule = {
//     rowType: 'HorizontalRule'
//     className?: string
//   }
//   type Code = {
//     rowType: 'Code'
//     value: string
//   }
// }
//
// namespace Char {
//   type Style = Pick<CSSStyleDeclaration, 'fontSize' | 'fontWeight' | 'color' | 'background' | 'textDecoration'>
//
//   interface Unknown {
//     charType: string
//     value: string
//     style?: Style
//
//     [p: string]: unknown
//   }
//
//   interface Plain extends Unknown {
//     charType: 'Plain'
//   }
//
//   interface Link {
//     charType: 'Link'
//     value: string
//     style?: Style
//   }
//
//   interface Symbol {
//     charType: 'Symbol'
//     value: string
//     style?: Style
//   }
// }
