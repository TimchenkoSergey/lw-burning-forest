import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { MainContainer } from './components';
import { getStore } from './store';

const rootElement = document.querySelector('#react-app');

if (rootElement) {
    ReactDOM.render(
        <Provider store={ getStore() }>
            <MainContainer />
        </Provider>,
        rootElement,
    );
}
