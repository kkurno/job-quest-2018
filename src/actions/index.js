export const SET_DATA = 'SET_DATA'
export const FETCH_JOKE = 'FETCH_JOKE'
export const FETCH_JOKE_CATEGORY = 'FETCH_JOKE_CATEGORY'
export const SET_LOADING = 'SET_LOADING'

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

export const fetchJokeCategory = () => ({
  type: FETCH_JOKE_CATEGORY
})

/**
 * @param {Boolean} isLoading
 */

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading
})
