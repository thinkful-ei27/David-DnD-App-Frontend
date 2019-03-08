import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {loadAuthToken} from './test/components/local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import dashboardReducer from './reducers/dashboard'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//import new reducer
const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    dashboard: dashboardReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}


export default store;
