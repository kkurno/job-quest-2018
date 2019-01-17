const isObject = (v) => (!Array.isArray(v) && v !== null && typeof v === 'object')

export default isObject
