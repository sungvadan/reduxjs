import {connect, useDispatch, useSelector} from 'react-redux'
import React, { useCallback }  from 'react'
import { filteredTodoSelector, todoSelector } from '../store/TodoSelector'
import { deleteTodoAction, toggleTodoAction } from '../store/todoActions'

function TodoItem({todo, onToogle, onDelete}) {
    return <li><label htmlFor="">
            <input type="checkbox" checked={todo.completed} onChange={() => onToogle(todo)} /> {todo.title}
            <button onClick={() => onDelete(todo)}>x</button>
        </label>
    </li>
}

export function TodoList({todos, onToogle, onDelete}) {
    return <ul>
        {todos.map(todo => <TodoItem key={`todo-${todo.id}`} todo={todo} onToogle={onToogle} onDelete={onDelete}/>)}
    </ul>
}

export function TodoListStore() {
    const todos = useSelector(filteredTodoSelector)
    const dispatch = useDispatch()
    const onToogle = useCallback((todo) => {
        dispatch(toggleTodoAction(todo))
    })
    const onDelete = useCallback((todo) => {
        dispatch(deleteTodoAction(todo))
    })
    return <TodoList todos={todos} onToogle={onToogle} onDelete={onDelete}/>
}


// export const TodoListStore = connect(
//     (state) => ({
//         todos: todoSelector(state) 
//     }),
//     (dispatch) => ({
//         onToogle: todo => dispatch(toggleTodoAction(todo))
//     })
// )(TodoList)
