import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, setPropTypes, shouldUpdate } from 'recompose'
import { AutoSizer, List } from 'react-virtualized'

import withData from '../../behavior/withData'

import U from '../../../utilities'

const ROW_HEIGHT = 100

const Text = styled.div`
  padding: 10px;
  margin: 0 30px;
  max-height: ${ROW_HEIGHT - 30}px;
  min-height: 30px;
  overflow: auto;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 5px 0 gray;
  box-shadow: 2px 2px 5px 0 gray;
`

const rowRenderer = ({
  dataKey,
  list,
}) => ({
  key,
  index,
  style,
}) => {
  const text = U.path([dataKey], list[index])

  return (
    <div key={key} style={style}>
      <Text>{text}</Text>
    </div>
  )
}

const CardList = ({ list, ...props }) => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        height={height}
        width={width}
        rowCount={list.length}
        rowHeight={ROW_HEIGHT}
        rowRenderer={rowRenderer({ list, ...props })}
      />
    )}
  </AutoSizer>
)

export default compose(
  withData(null, 'list'),
  shouldUpdate((props, nextProps) => U.compare_carelessly(props.list, nextProps.list)),
  setPropTypes({
    pathToData: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired, // it come from withData
    dataKey: PropTypes.string.isRequired, // used for get data from item objects in the list
  }),
)(CardList)
