import axios from 'axios'
import { jokeAPI } from './endpoint'

/**
 * >> fetchJoke <<
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {Array} categories 
 * @param {Number} amount 
 */

const logError = (error) => {
  // check production
  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') return error

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('> response: ',error.response.data)
  } else if (error.request) {
      // The request was made but no response was received
      console.log('> request errror: ', error.request)
  } else {
      // Something happened in setting up the request that triggered an Error
      console.log('> ???: ', error.message)
  }

  return error
}

export const fetchJoke = ({ firstname, lastname, categories, amount }) => {
  const base = `${jokeAPI}/jokes/random/${amount}`
  const firstParam = firstname !== '' ? `?firstName=${firstname}` : '?'
  const secondParam = lastname !== '' ? `&lastName=${lastname}` : '&'
  const thirdParam = categories.length ? `&limitTo=${categories}` : ''
  
  return axios.get(base + firstParam + secondParam + thirdParam).then(res => res.data).catch(logError)
}

export const fetchJokeCategory = () => axios.get(jokeAPI + '/categories').then(res => res.data).catch(logError)
