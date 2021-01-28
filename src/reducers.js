import { CHANGE_SEARCH_TEXT } from './constants'

// Set the initial state of redux 'state'
const initialState = {
    searchText: ''
}

// This is the reducer function - called searchRobots - which is what it does!
export const searchRobots = (state = initialState, action = {}) => {
    // console.log(`action.type: ${action}.type`)
    const actionType = action.type
    console.log(`action.type: ${actionType}`)

    switch(action.type) {
        case CHANGE_SEARCH_TEXT:
            return Object.assign({}, state, { searchText: action.payload })
        default:
            console.log('default case selected!')
            return state
    }
}