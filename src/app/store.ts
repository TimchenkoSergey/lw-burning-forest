import { createStore } from 'redux';

import { reducer } from './reducers';
import { INITIAL_STATE } from './constants';

export const getStore = () => {
    return createStore(
        reducer,
        INITIAL_STATE,
    );
};
