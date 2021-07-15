import React from 'react'
import { Provider } from 'react-redux'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoFilterStore } from './components/TodoFilter'
import {TodoListStore} from './components/TodoList'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <TodoListStore />
      <TodoFilterStore />
      <AddTodoForm />
    </Provider>
  )
}

export default App
