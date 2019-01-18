import initialState from './initialState'
import { SET_DATA, SET_LOADING } from '../actions'
import U from '../utilities'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return U.assocPath(payload.path.split('.'), payload.data, state)
    case SET_LOADING:
      return U.assocPath(['loading'], payload, state)
    default:
      return state
  }
}
