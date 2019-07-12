import { combineReducers } from 'redux';

import { reducer as dog } from './modules/dog';

export default combineReducers({
    // 3rd party reducers

    // Application reducers
    dog,
});
