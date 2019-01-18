import { compose, withProps } from 'recompose'

import withData from '../../behavior/withData'

import Tag from '../../base/Tag'

export default compose(
  withData(null, 'jokes'),
  withProps(({ jokes = [] }) => ({
    text: jokes.length
  })),
)(Tag)