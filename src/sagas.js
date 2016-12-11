import {takeLatest} from 'redux-saga'
import {select,call,put} from 'redux-saga/effects'
import axios from 'axios'
import {loadRepos} from './actions'

export function* helloSaga(){
  console.log('Hello Saga');
}

/*
  1. make an api call if you get an GET_REPOS action ( watcher )
      username

*/

export function* getRepos(){
  const username = yield select((state)=>state.username)
  const url = `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  const repos = yield call(()=>axios.get(url))
  yield put(loadRepos(username,repos))
}

export function* getReposWatcher(){
  yield takeLatest('GET_REPOS',getRepos)
}