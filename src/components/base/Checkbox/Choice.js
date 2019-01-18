import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'

import { ReactComponent as TickIcon } from '../../../assets/icons/tick_icon.svg'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-right: ${props => props.spaceSize};
  margin-bottom: ${props => props.spaceSize};
`

const Frame = styled.span`
  display: inline-block;
  height: 22px;
  width: 22px;
  border: 1px solid gray;
  border-radius: 3px;
  text-align: center;
  background-color: white;
`

const Choice = ({ name = '', isSelected = false, handleClick, spaceSize }) => (
  <Container spaceSize={spaceSize}>
    <Frame onClick={handleClick}>
      { isSelected ? <TickIcon /> : null }
    </Frame>
    &nbsp;{name}
  </Container>
)

export default compose(
  withHandlers({
    handleClick: ({ handleOnClick = () => {}, name = '' }) => () => {
      handleOnClick(name)
    } 
  })
)(Choice)
