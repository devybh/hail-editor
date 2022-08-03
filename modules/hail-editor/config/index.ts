import { defaultsDeep, cloneDeep } from 'lodash'
import Context from '@editor/Core/Context'
import AbstractRow from '@editor/Components/RowComponents/AbstractRow'
import AbstractChar from '@editor/Components/CharComponents/AbstractChar'
import * as RowComponents from '@editor/Components/RowComponents'
import * as CharComponents from '@editor/Components/CharComponents'

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
  toolbox: Toolbox,
  rowMap: Record<string, AbstractRow>
  charMap: Record<string, AbstractChar>
}

export interface Config extends RequiredConfig, OptionalConfig {
}

type MakeConfigOption = RequiredConfig & Partial<OptionalConfig>

const defaultConfig: Partial<RequiredConfig> & Partial<OptionalConfig> = {
  rowMap: { ...RowComponents },
  charMap: { ...CharComponents }
}
export default function makeConfig(option: MakeConfigOption) {
  return defaultsDeep(cloneDeep(defaultConfig), option) as Config
}
