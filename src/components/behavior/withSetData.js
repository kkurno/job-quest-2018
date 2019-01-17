/**
 * @example
 * // First, you must pass it in compose function
 *  compose(
 *   withSetData,
 *  )(Component)
 * 
 * // Usage
 *  setData('path.to.data.in.store', 1) 
 *  setData('path.to.data.in.store', [])
 *  setData('path.to.data.in.store', {example: ''}) // second parameter can be any type
 */

import { connect } from 'react-redux'

import { setData } from '../../actions'

const mapDispatchToProps = dispatch => ({
  setData: (path, data) => dispatch(setData(path, data))
})

export default component => connect(null, mapDispatchToProps)(component)
