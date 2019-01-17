/**
 *
 *@example
 * createDeepObj(['a','b','c'], 1) //=> {a:{b:{c:1}}}
 * createDeepObj(['a','b','c'], [1]) //=> {a:{b:{c:[1]}}}
 */

const createDeepObj = (path, value) => {
  if (Array.isArray(path)) throw new Error("the first parameter must be array")

  let obj = ''
  let braces = ''

  path.forEach((keyName, i) => {
    obj += `{"${keyName}":`
    braces += '}'

    if (i === path.length - 1) {
      obj += `${JSON.stringify(value)}${braces}`
    }
  })

  return path.length ? JSON.parse(obj) : []
}

export default createDeepObj
