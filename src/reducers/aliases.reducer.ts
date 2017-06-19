import { IAlias } from '../interfaces/entities'
import { ADD_ALIAS, UPDATE_ALIAS } from '../actions/aliases.actions'

export type AliasesState = IAlias[]

const initialState: AliasesState = []

export default (state = initialState, action) => {
  switch (action.type) {
  case ADD_ALIAS:
    return state.concat([ { source: '', target: '' } ])

  case UPDATE_ALIAS:
    return state.slice(0, action.index).concat(action.alias).concat(state.slice(action.index + 1))

  default:
    return state
  }
}
