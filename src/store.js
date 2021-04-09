import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer, rootSaga} from './modules';

const sagaMiddleware = createSagaMiddleware();
var middleware = applyMiddleware(sagaMiddleware);
var componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__ || compose;

const store = createStore(rootReducer, componseEnhancer(
    middleware
));

export default store;

sagaMiddleware.run(rootSaga)