/**
 *
 *@example
 * createDeepObj('a.b.c', 1) //=> {a:{b:{c:1}}}
 * createDeepObj('a.b.c', [1]) //=> {a:{b:{c:[1]}}}
 */

const createDeepObj = (path, value) => {
  if (path === '') throw new Error("don't input empty string in the first parameter")

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
