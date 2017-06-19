import * as moment from 'moment'
import { DATEFILTER } from '../actions/filters.actions'

export interface FiltersState {
  date: {
    since: string,
    until: string,
  },
}

const initialState = {
  date: {
    since: moment().startOf('month').format('YYYY-MM-DD'),
    until: moment().endOf('month').format('YYYY-MM-DD'),
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case DATEFILTER:
    return { ...state, date: action.filter }

  default:
    return state
  }
}
