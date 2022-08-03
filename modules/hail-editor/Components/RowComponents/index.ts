import AbstractRow from './AbstractRow';
import ParagraphRow from './ParagraphRow';
import ImageRow from './ImageRow';
import YoutubeRow from './YoutubeRow';
import CodeRow from './CodeRow';
import HrRow from './HrRow';
import StyledParagraphRow from './StyledParagraphRow';

export function createRowComponentMap(): Map<string, AbstractRow> {
  const map = new Map();
  map.set('Code', CodeRow);
  map.set('HR', HrRow);
  map.set('I', ImageRow);
  map.set('P', ParagraphRow);
  map.set('SP', StyledParagraphRow);
  map.set('Youtube', YoutubeRow);
  return map;
}
