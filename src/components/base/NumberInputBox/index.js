import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, withHandlers, setPropTypes } from 'recompose'

import withData from '../../behavior/withData'
import withSetData from '../../behavior/withSetData'

import U from '../../../utilities'

const Container = styled.div`
  max-width: fit-content;
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
  width: 50px;

  :focus {
    outline: none;
  }
`

const NumberInputBox = ({ textTitle, numberInput, handleChange }) => (
  <Container>
    <Title>{textTitle}</Title>
    <Input onChange={handleChange} value={numberInput}/>
  </Container>
)

export default compose(
  withSetData,
  withData(null, 'numberInput'),
  withHandlers({
    handleChange: ({ setData, pathToData, min = 1, max = 65535, numberInput }) => (event) => {
      const value = U.trimNumber(event.target.value, min, max)

      if (value !== numberInput) setData(pathToData, value)
    },
  }),
  setPropTypes({
    pathToData: PropTypes.string.isRequired,
    textTitle: PropTypes.string,
    numberInput: PropTypes.number, // it come from withData
    min: PropTypes.number,
    max: PropTypes.number,
  }),

)(NumberInputBox)
