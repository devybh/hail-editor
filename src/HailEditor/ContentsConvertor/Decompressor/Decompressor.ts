// import { AbstractRowProps } from '../../Abstracts/AbstractComponents/AbstractContentComponent/AbstractChildContentComponent/extends/AbstractRow'
// import { ParagraphRowProps } from ''
// import { AbstractCharProps } from '../../Abstracts/AbstractComponents/AbstractContentComponent/AbstractChildContentComponent/extends/AbstractChar'

export default class Decompressor {}

// type UnknownCompressedObject = AbstractRowProps & Record<string, any>
// type Decompressor =
//   | (<R extends AbstractRowProps>(compressedContent: string) => R)
//   | (<R extends AbstractRowProps>(compressedContent: UnknownCompressedObject) => R)

// export const decompressStrategies = new Map<string, Decompressor>()
//
// const stringToDefaultRowProps = (str: string) =>
//   ({
//     type: 'Paragraph',
//     chars: stringToChars(str)
//   } as ParagraphRowProps)
//
// decompressStrategies.set('string', stringToDefaultRowProps as Decompressor)
//
// const decompressFromObject = ((compressedContent: UnknownCompressedObject) => {
//   Object.entries(compressedContent).map(([key, value]) => [rowDecompressKeyMap.get(key), value])
//   // ({
//   //   type: 'Paragraph',
//   //   chars: stringToChars(compressedContent)
//   // } as ParagraphRowProps))
//
//   return null
// }) as Decompressor
// decompressStrategies.set('object', decompressFromObject)
//
// // ['I', (compressedContent: AnyCompressedContent) => ({ type: 'Image' })],
// // ['C', (compressedContent: AnyCompressedContent) => ({ type: 'Code' })],
// // ['HR', (compressedContent: AnyCompressedContent) => ({ type: 'Hr' })],
// // ['SP', (compressedContent: AnyCompressedContent) => ({ type: 'StyledParagraph' })],
// // ['YT', (compressedContent: AnyCompressedContent) => ({ type: 'Youtube' })]
//
// const stringToChars = (str: string) =>
//   str.split('').map(
//     (value) =>
//       ({
//         type: 'Plain',
//         value
//       } as AbstractCharProps)
//   )
