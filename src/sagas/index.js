import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { setData, FETCH_JOKE } from '../actions'
import { fetchJoke }from '../services' 

import U from '../utilities'

function* watchFetchingJoke() {
  try {
    const options = yield select((state) => U.path(['options'], {}, state))
    const joke = yield call(fetchJoke, options)
    const { type, value } = joke

    if (type === 'success') yield put(setData('jokes', value))
    else alert('Failed to get jokes. Please try again')
  } catch (e) {
    alert('Congratulations! you have found a bug.')
    console.log(e)
  }
}

export default function* saga() {
  yield all([
    takeLatest(FETCH_JOKE, watchFetchingJoke)
  ])
}
