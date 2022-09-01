import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import  shareReducer  from './share';
import  thunk from 'redux-thunk';
import { sessionReducer } from './sessionReducer';
import  userReducer  from './user'
import uiReducer from './ui';

const rootReducer = combineReducers ({
  share: shareReducer,
  session: sessionReducer,
  user: userReducer,
  ui: uiReducer
})



let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore;
