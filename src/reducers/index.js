import initialState from './initialState'
import { SET_VALUE } from '../actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VALUE:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
