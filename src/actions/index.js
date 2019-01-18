export const SET_DATA = 'SET_DATA'
export const FETCH_JOKE = 'FETCH_JOKE'

/**
 * @example
 * setData('path.to.set.data.to.store', 1000)
 * setData('path.to.set.data.to.store', ['a','b'])
 * setData('path.to.set.data.in.store', {a: 1})
 * @param {String} path 
 * @param {*} data
 */

export const setData = (path, data) => ({
  type: SET_DATA,
  payload: {
    path,
    data,
  },
})

export const fetchJoke = () => ({
  type: FETCH_JOKE
})
