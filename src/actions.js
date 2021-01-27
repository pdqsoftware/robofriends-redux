import  { CHANGE_SEARCH_TEXT } from './constants'

export const setSearchText = (text) => ({
    type: CHANGE_SEARCH_TEXT,
    payload: text
})