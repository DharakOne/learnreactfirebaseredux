import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import projectReducer from './reducers/projectReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

const appStore = createStore(rootReducer, applyMiddleware(thunk))

export default appStore 