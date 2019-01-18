import axios from 'axios'
import { jokeAPI } from './endpoint'

/**
 * >> fetchJoke <<
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {Array} categories 
 * @param {Number} amount 
 */

export const fetchJoke = ({ firstname, lastname, categories, amount }) => {
  const base = `${jokeAPI}/jokes/random/${amount}`
  const firstParam = firstname !== '' ? `?firstName=${firstname}` : '?'
  const secondParam = lastname !== '' ? `&lastName=${lastname}` : '&'
  const thirdParam = categories.length ? `&limitTo=${categories}` : ''
  
  return axios.get(base + firstParam + secondParam + thirdParam).then(res => res.data).catch(err => err.data)
}
