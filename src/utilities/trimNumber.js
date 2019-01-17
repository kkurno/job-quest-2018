/**
 * @param {String} value
 * @param {Number} min
 * @param {Number} max
 * @return {min} - if the value is lower than min or it is empty string
 * @return {max} - if the value is greater than max
 * @return {own value (without non numeric character)} - if the value has non numeric included but it still depend on
 * min-max case (that means after remove non numeric character. Then it will continue to the min-max case).
 */

const getMinOrMaxOrOwnValue = (value, min, max) => {
  if (value < min) return min
  if (value > max) return max
  return value
}

const trimNumber = (value, min, max) => {
  if (typeof min !== 'number' && typeof max !== 'number') throw Error('the second and the third parameter must be number')
  if (typeof value === 'number') return getMinOrMaxOrOwnValue(value, min, max)
  if (typeof value === 'string') {
    const valueWithoutNonNumeric = value.replace(/\D/g, '')
    return valueWithoutNonNumeric !== '' ? getMinOrMaxOrOwnValue(parseInt(valueWithoutNonNumeric), min, max) : min
  }
  throw Error('the first parameter must be number or string')
}

export default trimNumber
