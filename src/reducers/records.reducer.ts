import { IRecord } from '../interfaces/entities'
import { RECEIVE_RECORDS } from '../actions/csv.actions'

export type RecordsState = Array<IRecord>

const initialState = []

export default (state = initialState, action) => {

  switch (action.type) {

  case RECEIVE_RECORDS:
    return action.records

  default:
    return state
  }

}
