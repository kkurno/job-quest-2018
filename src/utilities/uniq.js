/**
 * @example
 * 
 * uniq([1,2,1,3,2,4]) // => [1,2,3,4]
 * uniq(['1','2'], ['1','2']) // => ['1','3']
 * uniq([{a: '1'}, {b: '2'}, {a: '1'}]) // => [{a: '1'}, {b: '2'}]
 */

const uniq = (array) => {
  let output = []
  let overlap = {}

  array.forEach(value => {
    const stringifiedValue = JSON.stringify(value)

    if (!overlap[stringifiedValue]) {
      overlap[stringifiedValue] = true
      output.push(value)
    }
  })

  return output
}

export default uniq
