import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, withHandlers, setPropTypes } from 'recompose'

import withData from '../../behavior/withData'
import withSetData from '../../behavior/withSetData'

import Choice from './Choice'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: fit-content;
`

const ChoiceContainer = styled.div`
  display: flex;
  flex-flow: ${props => props.inline ? 'row wrap' : 'column nowrap'};
`

const Title = styled.span`
  margin-right: 5px;
`

const Checkbox = ({ textTitle, choices = [], handleSelect, selectedChoices, inline = false}) => (
  <Container>
    <Title>{textTitle}</Title>
    <ChoiceContainer inline={inline}>
      {choices.map(choice => (
        <Choice
          spaceSize={'4px'}
          key={choice}
          isSelected={selectedChoices.includes(choice)}
          name={choice}
          handleOnClick={handleSelect}
        />
      ))}
    </ChoiceContainer>
  </Container>
)

export default compose(
  withSetData,
  withData(null, 'selectedChoices'),
  withHandlers({
    handleSelect: ({ setData, pathToData, selectedChoices}) => choice => {
      if (selectedChoices.includes(choice)) {
        // unselect
        setData(pathToData, selectedChoices.filter(selectedChoice => selectedChoice !== choice))
      } else {
        // select
        setData(pathToData, [...selectedChoices, choice])
      }
    },
  }),
  setPropTypes({
    pathToData: PropTypes.string.isRequired,
    selectedChoices: PropTypes.array.isRequired, // it come from withData
    choices: PropTypes.array.isRequired,
    textTitle: PropTypes.string,
    inline: PropTypes.bool,
  }),
)(Checkbox)
