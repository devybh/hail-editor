import { defaultsDeep, cloneDeep } from 'lodash'
import Context from '@editor/Core/Context'

type ButtonName = string
type SelectionState = string

type selectionResolver = (context: Context) => ButtonName[]
type selectionResolveRecord = Record<SelectionState, ButtonName | selectionResolver>

interface Toolbox {
  top: ButtonName[]
  selection: selectionResolver | selectionResolveRecord
}

export interface RequiredConfig {
  element: HTMLElement
}

export interface OptionalConfig {
  toolbox: Toolbox
}

export interface Config extends RequiredConfig, OptionalConfig {
}

type MakeConfigOption = RequiredConfig & Partial<OptionalConfig>

const defaultConfig: Partial<RequiredConfig> & Partial<OptionalConfig> = {}
export default function makeConfig(option: MakeConfigOption) {
  return defaultsDeep(cloneDeep(defaultConfig), option) as Config
}
