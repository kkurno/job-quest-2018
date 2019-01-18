/**
 *used for breaking into object
 *
 *@example
 *  path(['a', 'b'], 1, {a: {b: 1 }}) //=> 1
 *  path(['a', 'b'], undefined, {c: {b: 1}}) //=> undefined
 *  path(['a', 'b', 'c'], 2, {a: {b: {d: 1}}}) //=> 2
 */

const path = (paths, defalutValue, objData) => {
  let currentValue = objData

  for (let i = 0; i < paths.length; i++) {
    currentValue = currentValue[paths[i]]
    if (typeof currentValue === 'undefined') break
  }

  return currentValue !== undefined ? currentValue : defalutValue
}

export default path
