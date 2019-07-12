import { all, fork } from 'redux-saga/effects';

import dog from './modules/dog';

/**
 * rootSaga
 */
export default function* () {
    yield all([ fork(dog) ]);
};
