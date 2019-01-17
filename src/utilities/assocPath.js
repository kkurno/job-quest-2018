import isObject from './isObject'

const assocPath = (path, val, obj) => {
  if (!Array.isArray(path)) throw Error('the first parameter must be array')

  const idx = path[0];

  if (path.length > 1) {
    const nextObj = (obj !== undefined) ? obj[idx] : {};
    val = assocPath(path.slice(1), val, nextObj);
  }

  if (!isObject(obj)) return {[idx]: val}

  let result = {};

  for (let key in obj) {
    result[key] = obj[key];
  }
  result[idx] = val;

  return result
}

export default assocPath
