import { connect } from 'react-redux'

import { fetchJoke } from '../../actions'

const mapDispatchToProps = dispatch => ({
  fetchJoke: () => dispatch(fetchJoke())
})

export default component => connect(null, mapDispatchToProps)(component)
