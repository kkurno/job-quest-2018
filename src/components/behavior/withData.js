/**
 * @example
 * // if you want to assign "pathToData" by yourself
 * compose(
 *   withData('path.to.data.in.store', 'propName')
 * )(Component)
 *
 * // if you don't want to assign "pathToData" please input null (it will be assigned automatically when the component had it)
 * compose(
 *   withData(null, 'propName')
 * )(Component)
 */

import { connect } from 'react-redux'

import U from '../../utilities'

const mapStateToProps = (inputPath, propName) => (state, { pathToData = '' }) => {
  const path = inputPath ? inputPath.split('.') : pathToData.split('.')
  return {[propName]: U.path(path, undefined, state)}
}

export default (pathToData, propName) => component => connect(mapStateToProps(pathToData, propName))(component)
