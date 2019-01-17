import initialState from './initialState'
import { SET_DATA } from '../actions'
import U from '../utilities'

/*payload interface

  payload = {
    path: 'path.to.data.in.store',
    data: any type (string, number, array, ...)
  }
*/

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return U.assocPath(payload.path.split('.'), payload.data, state)
    default:
      return state
  }
}
