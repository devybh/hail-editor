import { set } from 'lodash'
import { AbstractArea, AbstractChar, AbstractRow, AbstractContainer } from '@h/Abstracts'

interface Token {
  todo: unknown
}

interface Context {
  todo: unknown
}

interface ResolverParam {
  token: Token
  context: Context
}

type TextResolver = ({ token, context }: ResolverParam) => PropsOf<typeof AbstractRow>
type TagResolver = ({ token, context }: ResolverParam) => PropsOf<typeof AbstractRow>

export interface HtmlParserConfig {
  HtmlParser: {
    TextResolvers: TextResolver[]
    TagResolvers: Record<string, TagResolver[]>
  }
}

interface CompressorConfig {
  Dictionaries: {
    /**
     * {OriginalKeyName: CompressedKeyName}
     *
     * (ex) {"Paragraph": "P"}
     */
    Key: Record<string, string>
    /**
     * {KeyName: {OriginalValue: CompressedValue}}
     *
     * (ex) {"type": {"Paragraph": "P"}}
     */
    ValueOf: Record<string, Record<string, string>>
  }
}

interface EditorConfig {
  HtmlParser: HtmlParserConfig
  Compressor: CompressorConfig
  Editor: {
    Components: {
      Container: Record<string, AbstractContainer>
      Row: Record<string, AbstractRow>
      Area: Record<string, AbstractArea>
      Char: Record<string, AbstractChar>
    }
    // Shortcuts: Record<string, AbstractShortcut>
    // PointerEventHandlers: Record<string, AbstractPointerEventHandler>
    // Jobs: Record<string, AbstractJob>
    MutationObserver: {
      Contents: ((context: Context) => void)[]
      Selection: ((context: Context) => void)[]
    }
  }
}

function getDefaultCompressorConfig() {
  const Config = {} as CompressorConfig
  set(Config, 'HtmlParser.TextResolvers', [])
  set(Config, 'HtmlParser.TagResolvers', {})
  set(Config, 'Dictionaries.Key', {
    type: 'T',
    style: 'S',
    chars: 'C',
    value: 'V',
    originWidth: 'OW',
    originHeight: 'OH'
  })
  set(Config, 'Dictionaries.ValueOf.type', {
    Paragraph: 'P',
    StyledParagraph: 'S',
    Image: 'I',
    Code: 'C',
    Youtube: 'Y',
    Plain: 'PL',
    Link: 'L'
  })
  return Config
}

function getDefaultEditorConfig() {
  const Config = {} as EditorConfig
  set(Config, 'Compressor', getDefaultCompressorConfig())
  set(Config, 'Editor.Components.Body', {})
  set(Config, 'Editor.Components.Row', {})
  set(Config, 'Editor.Components.Area', {})
  set(Config, 'Editor.Components.Char', {})
  set(Config, 'Editor.Shortcuts', {})
  set(Config, 'Editor.PointerEventHandlers', {})
  set(Config, 'Editor.Jobs', {})
  set(Config, 'Editor.MutationObserver.Contents', [])
  set(Config, 'Editor.MutationObserver.Selection', [])
  return Config
}

export function makeCompressorConfig() {}
