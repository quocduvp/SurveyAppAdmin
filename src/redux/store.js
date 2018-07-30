import { createStore,applyMiddleware } from 'redux'
// import logger from 'redux-logger' //development mode
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { rootReducer } from './reducers/rootReducer';

// const middleware = applyMiddleware(thunk,logger,ReduxPromise)
const middleware = applyMiddleware(thunk,ReduxPromise)
export const store = createStore(rootReducer, middleware)