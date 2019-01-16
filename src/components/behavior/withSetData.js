import { connect } from 'react-redux'

import U from '../../utilities'
import { setData } from '../../actions'

const mapDispatchToProps = dispatch => ({
  setData: (path, data) => dispatch(setData(U.createDeepObj(path, data)))
})

export default component => connect(null, mapDispatchToProps)(component)
