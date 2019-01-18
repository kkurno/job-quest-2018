import { all, call, put, select, takeEvery } from 'redux-saga/effects'

import { setData, setLoading, FETCH_JOKE, FETCH_JOKE_CATEGORY } from '../actions'
import { fetchJoke, fetchJokeCategory }from '../services' 

import U from '../utilities'

import { FAILED_TO_GET_JOKE, SOMETHING_WENT_WRONG, BUG } from '../constants/message'

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

function* watchFetchingJokeCategory() {
  try {
    const categories = yield call(fetchJokeCategory)
    const { type, value } = categories

    if (type === 'success') {
      yield put(setData('jokeCategories', value))
    }
    else {
      alert(SOMETHING_WENT_WRONG)
      window.location.reload()
    }
  } catch (e) {
    alert(BUG)
  }
}

export default function* saga() {
  yield all([
    takeEvery(FETCH_JOKE, watchFetchingJoke),
    takeEvery(FETCH_JOKE_CATEGORY, watchFetchingJokeCategory),
  ])
}
