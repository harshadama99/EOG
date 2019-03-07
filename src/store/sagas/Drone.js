import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* fetchDroneDataWatcher(action) {
  const { latitude, longitude } = action;
  const { error, data } = yield call(API.fetchDroneData);
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }
  yield put({ type: actions.DRONE_DATA_RECEIVED, payload: data });
  yield put({
    type: actions.FETCH_WEATHER,
    longitude: data.data[0].longitude,
    latitude: data.data[0].latitude
  });
}

function* droneSaga() {
  yield all([takeEvery(actions.FETCH_DRONE_DATA, fetchDroneDataWatcher)]);
}

export default [droneSaga];
