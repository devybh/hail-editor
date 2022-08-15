import PlainChar from '@h/Components/CharComponents/PlainChar'
import { AbstractChar } from '@h/Abstracts'
import ParagraphRow from '@h/Components/RowComponents/ParagraphRow'

function stringToPlainCharPropsList(string: string): PropsOf<typeof PlainChar>[] {
  return string.split('').map((value) => ({ type: 'PlainChar', value }))
}

function makeParagraphRowPropsFromString(string: string): PropsOf<typeof ParagraphRow> {
  return {
    type: 'Paragraph',
    chars: stringToPlainCharPropsList(string)
  }
}

const title = [makeParagraphRowPropsFromString('This is a Title')]
const subtitle = [
  makeParagraphRowPropsFromString('This is a Subtitle'),
  makeParagraphRowPropsFromString('It will support Multi-Rows')
]
const body = [
  makeParagraphRowPropsFromString('(1) this Is a Body'),
  makeParagraphRowPropsFromString(''),
  makeParagraphRowPropsFromString('(2) Multi-Rows')
]

export { title, subtitle, body }
