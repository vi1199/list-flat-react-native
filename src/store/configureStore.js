import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);

export default configureStore;