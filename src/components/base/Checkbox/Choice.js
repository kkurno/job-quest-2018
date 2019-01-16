import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'

import { ReactComponent as TickIcon } from '../../../assets/icons/tick_icon.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Frame = styled.span`
  display: inline-block;
  height: 22px;
  width: 22px;
  border: 1px solid gray;
  border-radius: 3px;
  text-align: center;
`

const Choice = ({ name = '', isSelected = false, handleClick }) => (
  <Container>
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
