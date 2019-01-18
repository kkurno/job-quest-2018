import { connect } from 'react-redux'

import { fetchJokeCategory } from '../../actions'

const mapDispatchToProps = dispatch => ({
  fetchJokeCategory: () => dispatch(fetchJokeCategory())
})

export default component => connect(null, mapDispatchToProps)(component)
