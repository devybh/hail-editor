type EditorContents = Map<string, FieldValue>
type FieldValue = string | UnknownRowContent[]


type AnyRecord = Record<string, any>
type UnknownRowContent = string | ({ T: string } & AnyRecord)

type ParagraphRowContent = {
    T: 'T',
    F: (string | UnknownFragment)[]
    S?: { clear: 'both' }
}

type FragmentStyle = PICK<CSSStyleDeclaration, 'fontSize' | 'fontWeight' | 'color' | 'background'>
type UnknownFragment = ({ T: string, V: string, S: FragmentStyle } & AnyRecord)
type PlainFragment = {
    T: 'P'
    V: string
    S?: FragmentStyle
}
type LinkFragment = {
    T: 'L',
    V: string,
    S?: FragmentStyle
}
type SymbolFragment = {
    T: 'S',
    V: string
}


type ImageRow = {}

