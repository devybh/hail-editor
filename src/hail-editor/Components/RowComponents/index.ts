import AbstractRow from "./AbstractRow";
import ParagraphRow from "./ParagraphRow";
import ImageRow from "./ImageRow";
import YoutubeRow from "./YoutubeRow";
import CodeRow from "./CodeRow";
import HrRow from "./HrRow";
import TextBoxRow from "./TextBoxRow";

export function createRowComponentMap(): Map<string, AbstractRow> {
    const map = new Map();
    map.set('Code', CodeRow);
    map.set('Hr', HrRow);
    map.set('I', ImageRow);
    map.set('P', ParagraphRow);
    map.set('TextBox', TextBoxRow);
    map.set('Youtube', YoutubeRow);
    return map;
}
