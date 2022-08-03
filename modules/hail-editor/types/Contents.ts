export type EditorContents = Map<string, FieldValue>;
export type FieldValue = string | RowContents.Unknown[];

namespace RowContents {
  export type Unknown = { T: string } & Record<string, unknown>;
  export type Paragraph = {
    T: 'P';
    C: Char.Unknown[];
    S?: {
      clear: 'both';
      textAlign: CSSStyleDeclaration['textAlign'];
    };
  };
  export type StyledParagraph = {
    T: 'SP';
    V: string;
    className: string;
  };
  export type Image = {
    T: 'I';
    src: string;
    originWidth?: number;
    originHeight?: number;
    style?: {
      float?: 'left' | 'right';
      width?: CSSStyleDeclaration['width'];
      height?: CSSStyleDeclaration['height'];
    };
    caption?: string;
  };
  export type Youtube = {
    T: 'Youtube';
    id: string;
    style?: {
      width?: CSSStyleDeclaration['width'];
      height?: CSSStyleDeclaration['height'];
    };
  };
  export type HorizontalRule = {
    T: 'HR';
    className?: string;
  };
  export type Code = {
    T: 'Code';
    V: string;
  };
}

namespace Char {
  export type Style = Pick<CSSStyleDeclaration, 'fontSize' | 'fontWeight' | 'color' | 'background' | 'textDecoration'>;
  export type Unknown = { T: string; V: string; S?: Style } & Record<string, unknown>;
  export type Plain = {
    T: 'P';
    V: string;
    S?: Style;
  };
  export type Link = {
    T: 'L';
    V: string;
    S?: Style;
  };
  export type Symbol = {
    T: 'S';
    V: string;
  };
}
