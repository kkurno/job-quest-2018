import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, withHandlers, setPropTypes } from 'recompose'

import withData from '../../behavior/withData'
import withSetData from '../../behavior/withSetData'

const Title = styled.span`
  margin-right: 5px;
`

const Input = styled.input.attrs({
  type: 'text',
  size: 15,
})`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 3px 0 3px;
  height: 23px;

  :focus {
    outline: none;
  }
`

const TextInputBox = ({ titleText, handleChange, inputText }) => (
  <div>
    <Title>{titleText}</Title>
    <Input onChange={handleChange} value={inputText}/>
  </div>
)

export default compose(
  setPropTypes({
    pathToData: PropTypes.string.isRequired,
    titleText: PropTypes.string,
    inputText: PropTypes.string, // it come from withData
  }),
  withSetData,
  withData(null, 'inputText'),
  withHandlers({
    handleChange: ({ setData, pathToData }) => (event) => {
      setData(pathToData, event.target.value)
    }
  })
)(TextInputBox)
