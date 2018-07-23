import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { rootReducer } from './reducers/rootReducer';

const middleware = applyMiddleware(thunk,logger,ReduxPromise)
export const store = createStore(rootReducer, middleware)