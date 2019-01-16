/**
 *used for breaking into object
 *
 *@example
 *  path(['a', 'b'], {a: {b: 1 }}) //=> 1
 *  path(['a', 'b'], {c: {b: 1}}) //=> undefined
 *  path(['a', 'b', 'c'], {a: {b: 1}}) //=> undefined
 */

const path = (paths, objData) => {
  let currentValue = objData

  for (let i = 0; i < paths.length; i++) {
    currentValue = currentValue[paths[i]]
    if (typeof currentValue === 'undefined') break
  }

  return currentValue
}

export default path
