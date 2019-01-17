export const SET_DATA = 'SET_DATA'

export const setData = (path, data) => ({
  type: SET_DATA,
  payload: {
    path,
    data,
  },
})
