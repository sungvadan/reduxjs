import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { filterReducer } from './FilterReducer'
import { TodoReducer } from './TodoReducer'


const store = createStore(
    combineReducers({
        todos: TodoReducer,
        filter: filterReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

export default store