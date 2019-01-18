import React  from 'react'
import styled from 'styled-components'
import { compose } from 'recompose'

import withFetchJoke from './components/behavior/withFetchJoke'

import Overlay from './components/base/Overlay'
import Checkbox from './components/base/Checkbox'
import TextInputBox from './components/base/TextInputBox'
import NumberInputBox from './components/base/NumberInputBox'
import CardList from './components/base/CardList'
import Button from './components/base/Button'

import {
  FIRSTNAME_TITLE,
  LASTNAME_TITLE,
  CATEGORY_TITLE,
  AMOUNT_TITLE,
  FETCH_BUTTON,
} from './constants/component'

const OPTION_ROW_HEIGHT = 145

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const OptionColumn1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 70%;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 10;
  padding: 10px;
  border-right: 3px solid white;
`

const OptionColumn2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 10px;
`

const OptionRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: ${OPTION_ROW_HEIGHT}px;
  -webkit-box-shadow: 0 -2px 5px 0 #bfbfbf;
  box-shadow: 0 -2px 10px 0 #bfbfbf;
  background-color: #eaeaea;
`

const ItemRow = styled.div`
  height: calc(100vh - ${OPTION_ROW_HEIGHT}px);
  margin: 15px;

  :focus {
    outline: none;
  }
`

const App = ({ fetchJoke }) => (
  <Container>
    <Overlay pathToData={'loading'}/>
    <ItemRow>
      <CardList pathToData={'jokes'} dataKey={'joke'}/>
    </ItemRow>
    <OptionRow>
      <OptionColumn1>
        <TextInputBox pathToData={'options.firstname'} textTitle={FIRSTNAME_TITLE}/>
        <TextInputBox pathToData={'options.lastname'} textTitle={LASTNAME_TITLE}/>
        <Checkbox pathToData={'options.categories'} textTitle={CATEGORY_TITLE} inline={true} choices={['esdsdiei','zxcxzczeie2']}/>
        <NumberInputBox pathToData={'options.amount'} textTitle={AMOUNT_TITLE} min={1} max={300} />
      </OptionColumn1>
      <OptionColumn2>
        <Button text={FETCH_BUTTON} color={'primary'} handleClick={fetchJoke}/>
      </OptionColumn2>
    </OptionRow>
  </Container>
)

export default compose(
  withFetchJoke,
)(App)
