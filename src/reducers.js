import  {
    CHANGE_SEARCH_TEXT,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

// Set the initial state of redux 'state'
const initialState = {
    searchText: ''
}

// This is the reducer function - called searchRobots - which is what it does!
// Remember to include a default in the switch to just return the unaltered state
export const searchRobots = (state = initialState, action = {}) => {
    // console.log(`action.type: ${action}.type`)
    const actionType = action.type
    console.log(`action.type: ${actionType}`)

    switch(action.type) {
        case CHANGE_SEARCH_TEXT:
            // The state is read-only so return a new complete state that includes the required modification to searchtext
            // return Object.assign({}, state, { searchText: action.payload })
            return { ...state, searchText: action.payload }
        default:
            console.log('default case selected!')
            return state
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state , { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload , isPending: false })
        default:
            return state
    }
}