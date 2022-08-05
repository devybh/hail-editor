import { AbstractRow } from '@editor/Components/Abstracts'

export default class StyledParagraphRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
