import { IAlias } from '../interfaces/entities'

export const ADD_ALIAS = 'aliases/ADD'
export const UPDATE_ALIAS = 'aliases/UPDATE'

export const addAlias = () => ({ type: ADD_ALIAS })
export const updateAlias = (index: number, alias: IAlias) =>
  ({ type: UPDATE_ALIAS, index, alias })
