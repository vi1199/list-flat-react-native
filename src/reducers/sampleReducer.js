import * as actionTypes from '../actions/actionTypes';

const initialState= {
    data: [],
    isFetching: false,
    error: false
}

export default sampleReducer = (state = initialState, action) => {
    switch(action.Type) {
        case actionTypes.RETRIEVE_MOVIES_FETCHING:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case actionTypes.RETRIEVE_MOVIES_SUCCESS: 
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        
        case actionTypes.RETRIEVE_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                data: action.data
            }
        default:
            return state
    }
}