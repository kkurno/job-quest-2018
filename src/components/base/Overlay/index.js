import React from 'react'
import { compose } from 'recompose'

import withData from '../../behavior/withData' 

const style = {
  zIndex: 999,
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.3)',
  pointerEvent: 'none',
}

export default compose(
  withData(null, 'isLoading')
)(({ isLoading }) => (isLoading ? <div style={style}></div> : null))
