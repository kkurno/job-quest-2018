import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, withHandlers, setPropTypes } from 'recompose'

import withData from '../../behavior/withData'
import withSetData from '../../behavior/withSetData'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Title = styled.span`
  margin-right: 5px;
`

const Input = styled.input.attrs({
  type: 'text',
})`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 3px 0 3px;
  height: 23px;
  width: 150px;

  :focus {
    outline: none;
  }
`

const TextInputBox = ({ textTitle, handleChange, textInput }) => (
  <Container>
    <Title>{textTitle}</Title>
    <Input onChange={handleChange} value={textInput}/>
  </Container>
)

export default compose(
  withSetData,
  withData(null, 'textInput'),
  withHandlers({
    handleChange: ({ setData, pathToData, maxLength = 100, textInput }) => (event) => {
      if (event.target.value.length <= maxLength && event.target.value.length !== textInput.length) {
        setData(pathToData, event.target.value)
      }
    }
  }),
  setPropTypes({
    pathToData: PropTypes.string.isRequired,
    textTitle: PropTypes.string,
    maxLength: PropTypes.number,
    textInput: PropTypes.string, // it come from withData
  }),
)(TextInputBox)
