import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import saga from './sagas'
import GlobalStyle from './GlobalStyle'
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ),
)

sagaMiddleware.run(saga)

const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
