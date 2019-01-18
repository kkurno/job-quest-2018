import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

const Tag = ({ title, text, color }) => (
  <span style={{ color }}>{title}{text}</span>
)

export default compose(
  setPropTypes({
    title: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }),
)(Tag)
