import initialState from './initialState'
import { SET_DATA } from '../actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
