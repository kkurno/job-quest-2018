/**
 *
 *@example
 * createDeepObj('a.b.c', 1) //=> {a:{b:{c:1}}}
 * createDeepObj('a.b.c', [1]) //=> {a:{b:{c:[1]}}}
 */

const createDeepObj = (path, value) => {
  if (path === '') throw new Error("the first parameter must not be empty string")

  const arrayPath = path.split('.')
  let obj = ''
  let braces = ''

  arrayPath.forEach((keyName, i) => {
    braces += '}'
    obj += `{"${keyName}":`

    if (i === arrayPath.length - 1) {
      obj += `${JSON.stringify(value)}${braces}`
    }
  })

  return JSON.parse(obj)
}

export default createDeepObj
