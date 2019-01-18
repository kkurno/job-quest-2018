import initialState from './initialState'
import { SET_DATA, SET_LOADING } from '../actions'
import U from '../utilities'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
    /* payload structure for SET_DATA
      payload = {
        path: 'path.to.data.in.store',
        data: any type (string, number, array, ...)
      }
    */
      return U.assocPath(payload.path.split('.'), payload.data, state)
    case SET_LOADING:
    // payload: Boolean
      return U.assocPath(['loading'], payload, state)
    default:
      return state
  }
}
