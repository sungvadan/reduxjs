import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../store/todoActions'

export function AddTodoForm() {
    const textInput = useRef(null)
    const dispatch = useDispatch()

    const handleClick = async e => {
        e.preventDefault()
        await dispatch(addTodoAction(textInput.current.value))
        textInput.current.value = ''
        textInput.current.focus()
    }

    return <div>
        <input 
            type='text'
            ref={textInput}
            placeholder='add todo'
        />
        <button onClick={e => handleClick(e)}>Add</button>
    </div>
}