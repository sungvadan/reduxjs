export const UPDATE_FILTER = 'UPDATE_FILTER'
export function filterReducer(state = null, action) {
    switch (action.type) {
        case UPDATE_FILTER:
            return action.payload
        default:
            return state
    }
} 