import initialState from './initialState'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ACTION_NAME':
      return {
        ...state,
        /* keyname: payload */
      }
    default:
      return state
  }
}
