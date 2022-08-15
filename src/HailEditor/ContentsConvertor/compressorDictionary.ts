type originValue = string
type compressedValue = string
type dictionaryValues = Record<originValue, compressedValue>
type keyName = string
export type CompressorDictionary = {
  keyRecord: dictionaryValues
  valueRecord: Record<keyName, dictionaryValues>
}
export default function getCompressorDictionary(): CompressorDictionary {
  return {
    keyRecord: {
      type: 'T',
      style: 'S',
      chars: 'C',
      value: 'V',
      originWidth: 'OW',
      originHeight: 'OH'
    },
    valueRecord: {
      type: {
        Paragraph: 'P',
        StyledParagraph: 'S',
        Image: 'I',
        Code: 'C',
        Youtube: 'Y',
        Plain: 'PL',
        Link: 'L'
      }
    }
  }
}
