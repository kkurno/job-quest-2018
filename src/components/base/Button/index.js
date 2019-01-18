import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps, setPropTypes } from 'recompose'

const DefaultButtonStyle = {
  padding: '10px',
  borderRadius: '10px',
  color: 'white',
  backgroundColor: 'gray',
  borderColor: 'gray',
  outline: 'none',
}

const PrimaryButtonStyle = {
  ...DefaultButtonStyle,
  color: 'white',
  backgroundColor: '#0050ff',
  borderColor: '#0050ff',
}

const SuccessButtonStyle = {
  ...DefaultButtonStyle,
  color: 'white',
  backgroundColor: '#28a745',
  borderColor: '#28a745',
}

const Button = ({
  handleClick = () => {},
  text,
  style,
}) => (
  <button style={style} onClick={handleClick}>{text}</button>
)

const definedStyle = (color) => {
  switch (color) {
    case 'default': return DefaultButtonStyle
    case 'primary': return PrimaryButtonStyle
    case 'success': return SuccessButtonStyle
    default: return DefaultButtonStyle
  }
}

export default compose(
  withProps(({
    color,
  }) => ({
    style: definedStyle(color)
  })),
  setPropTypes({
    type: PropTypes.string,
    handleClick: PropTypes.func,
  }),
)(Button)
