import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'

import withData from '../../behavior/withData'
import withSetData from '../../behavior/withSetData'

import Choice from './Choice'

const Container = styled.div`
  padding: 4px 6px;
  border: 1px solid gray;
  border-radius: 8px;
`

const Title = styled.div`
  text-align: center;
  border-bottom: 1px dashed gray;
  margin-bottom: 4px;
`

const Space = styled.div`
  height: 4px;
  width: 100%;
`

const Checkbox = ({ titleText = '', choices = [], handleSelect, selectedChoices}) => (
  <Container>
    <Title>{ titleText }</Title>
    {
      choices.map(
        choice => (
          <React.Fragment key={choice}>
            <Choice
              isSelected={selectedChoices.includes(choice)}
              name={choice}
              handleOnClick={handleSelect}
            />
            <Space />
          </React.Fragment>
        )
      )
    }
  </Container>
)

Checkbox.propTypes = {
  titleText: PropTypes.string,
  choices: PropTypes.array,
  selectedChoices: PropTypes.array.isRequired,
}

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
)(Checkbox)
