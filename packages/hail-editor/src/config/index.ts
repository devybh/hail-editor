import { defaultsDeep, cloneDeep } from 'lodash'
import Context from '../Core/Context'
import AbstractRow from '../Abstracts/AbstractComponents/AbstractContentComponent/AbstractChildContentComponent/extends/AbstractRow'
import AbstractChar from '../Abstracts/AbstractComponents/AbstractContentComponent/AbstractChildContentComponent/extends/AbstractChar'
import { AllRows } from '../Components/RowComponents'
import { AllChars } from '../Components/CharComponents'

type ButtonName = string
type SelectionState = string

type selectionResolver = (context: Context) => ButtonName[]
type selectionResolveRecord = Record<SelectionState, ButtonName | selectionResolver>

interface Toolbox {
  top: ButtonName[]
  selection: selectionResolver | selectionResolveRecord
}

export interface RequiredConfig {
  element: Element
}

export interface OptionalConfig {
  toolbox: Toolbox
  rowConstructors: Record<string, typeof AbstractRow>
  charConstructors: Record<string, typeof AbstractChar>
  contentsCompressorDictionary: {
    keyEntries: [string, string][]
    valueOfRowTypeEntries: [string, string][]
    valueOfCharTypeEntries: [string, string][]
    entryCompressor: (key: string, value: any) => [key: string, value: any]
  }
}

export interface Config extends RequiredConfig, OptionalConfig {}

type MakeConfigOption = RequiredConfig & Partial<OptionalConfig>

const defaultConfig: Partial<RequiredConfig> & Partial<OptionalConfig> = {
  rowConstructors: { ...AllRows },
  charConstructors: { ...AllChars }
}
export default function makeConfig(option: MakeConfigOption) {
  return defaultsDeep(cloneDeep(defaultConfig), option) as Config
}
