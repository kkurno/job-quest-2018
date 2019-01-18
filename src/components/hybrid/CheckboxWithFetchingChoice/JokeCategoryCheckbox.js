import { compose, lifecycle } from 'recompose'

import withData from '../../behavior/withData'
import withFetchJokeCategory from '../../behavior/withFetchJokeCategory' 

import Checkbox from '../../base/Checkbox'

export default compose(
  withFetchJokeCategory,
  withData('jokeCategories', 'choices'),
  lifecycle({
    componentDidMount() {
      const { fetchJokeCategory } = this.props
      fetchJokeCategory()
    }
  }),
)(Checkbox)
