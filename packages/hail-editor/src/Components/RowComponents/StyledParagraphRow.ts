import { AbstractRow } from 'src/Abstracts'

export default class StyledParagraphRow extends AbstractRow {
  update(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
