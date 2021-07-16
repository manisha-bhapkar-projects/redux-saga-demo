import { put, takeLatest, all } from 'redux-saga/effects';
import { LIST_STATION, GET_STATION } from "../actions/actionTypes"
import { RadioStationObject } from '../../components/RadioWidget';
import config from '../../utils/config';
function* fetchPosts() {
    const list = yield fetch(`${config.API_BASE_URL}72953f50-dde5-4555-b13e-358115e87936`)
        .then(response => response.json());
    yield put({ type: LIST_STATION as string, data: list as RadioStationObject });
}

function* actionWatcher() {
    yield takeLatest(GET_STATION, fetchPosts)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}