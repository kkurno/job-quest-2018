// used for union two arrays (without duplicate)

import uniq from './uniq'

const union = (array1, array2) => uniq(array1.concat(array2))

export default union
