import { assert, expect, test } from 'vitest'
import { stringToParagraphs } from '@editor/Utilities/compress-functions'
import ParagraphRow from '@editor/Components/RowComponents/ParagraphRow'// Edit an assertion and save to see HMR in action

test('stringToParagraphs', () => {
  expect(stringToParagraphs('AB')).toEqual([{ T: 'P', C: [{ T: 'P', V: 'A' }, { T: 'P', V: 'B' }] }] as ParagraphRow[])
  expect(stringToParagraphs('AB\nCD')).toEqual([
    { T: 'P', C: [{ T: 'P', V: 'A' }, { T: 'P', V: 'B' }] },
    { T: 'P', C: [{ T: 'P', V: 'C' }, { T: 'P', V: 'D' }] }
  ] as ParagraphRow[])
  expect(stringToParagraphs('AB\n\nCD')).toEqual([{ T: 'P', C: [{ T: 'P', V: 'A' }, { T: 'P', V: 'B' }] }, {
    T: 'P',
    C: []
  }, { T: 'P', C: [{ T: 'P', V: 'C' }, { T: 'P', V: 'D' }] }] as ParagraphRow[])
})
