import { CHANGE_SEARCH_TEXT } from './constants'

const initialState = {
    searchText: ''
}

// This is the reducer - called searchRobots - which is what it does!
export const searchRobots = (state = initialState, action = {}) => {
    switch(action.type) {
        case: CHANGE_SEARCH_TEXT:
            return Object.assign({}, state, searchText: action.payload)
    }
}