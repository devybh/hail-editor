import {stringToParagraphs} from "./compress-functions";

export default class ContentsAdapter {

    #array: RowContents.Unknown[] = []

    constructor() {
    }

    pushString(string: string) {
        this.#array.push(...stringToParagraphs(string))
    }
}
