type EditorContents = Map<string, FieldValue>
type FieldValue = string | RowContents.Unknown[]

namespace RowContents {
    type Unknown = { T: string } & Record<string, unknown>
    type Paragraph = {
        T: 'P'
        C: Char.Unknown[]
        S?: {
            clear: 'both',
            textAlign: CSSStyleDeclaration.textAlign
        }
    }
    type StyledParagraph = {
        T: 'SP',
        V: string,
        className: string
    }
    type Image = {
        T: 'I'
        src: string
        originWidth?: number
        originHeight?: number
        style?: {
            float?: 'left' | 'right'
            width?: CSSStyleDeclaration.width
            height?: CSSStyleDeclaration.height
        }
        caption?: string
    }
    type Youtube = {
        T: 'Youtube'
        id: string
        style?: {
            width?: CSSStyleDeclaration.width
            height?: CSSStyleDeclaration.height
        }
    }
    type HorizontalRule = {
        T: 'HR',
        className?: string
    }
    type Code = {
        T: 'Code',
        V: string
    }
}

namespace Char {
    type Style = PICK<CSSStyleDeclaration, 'fontSize' | 'fontWeight' | 'color' | 'background' | 'textDecoration'>
    type Unknown = ({ T: string, V: string, S?: TextStyle } & Record<string, unknown>)
    type Plain = {
        T: 'P'
        V: string
        S?: Style
    }
    type Link = {
        T: 'L'
        V: string
        S?: Style
    }
    type Symbol = {
        T: 'S'
        V: string
    }
}
