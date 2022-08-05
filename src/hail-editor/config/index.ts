import { defaultsDeep, cloneDeep } from 'lodash'
import Context from '../Core/Context'
import AbstractRow from '../Components/Abstracts/AbstractContentComponent/AbstractChildContentComponent/AbstractRow'
import AbstractChar from '../Components/Abstracts/AbstractContentComponent/AbstractChildContentComponent/AbstractChar'
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
  rowMap: Record<string, typeof AbstractRow>
  charMap: Record<string, typeof AbstractChar>
}

export interface Config extends RequiredConfig, OptionalConfig {}

type MakeConfigOption = RequiredConfig & Partial<OptionalConfig>

const defaultConfig: Partial<RequiredConfig> & Partial<OptionalConfig> = {
  rowMap: { ...AllRows },
  charMap: { ...AllChars }
}
export default function makeConfig(option: MakeConfigOption) {
  return defaultsDeep(cloneDeep(defaultConfig), option) as Config
}
