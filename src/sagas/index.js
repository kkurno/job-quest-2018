import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { setData, setLoading, FETCH_JOKE } from '../actions'
import { fetchJoke }from '../services' 

import U from '../utilities'

import { FAILED_TO_GET_JOKE, BUG } from '../constants/message'

function* watchFetchingJoke() {
  yield put(setLoading(true))
  try {
    const options = yield select((state) => U.path(['options'], {}, state))
    const joke = yield call(fetchJoke, options)
    const { type, value } = joke

    if (type === 'success') yield put(setData('jokes', value))
    else alert(FAILED_TO_GET_JOKE)
  } catch (e) {
    alert(BUG)
  }
  yield put(setLoading(false))
}

export default function* saga() {
  yield all([
    takeLatest(FETCH_JOKE, watchFetchingJoke)
  ])
}
