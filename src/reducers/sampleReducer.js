import {
    RETRIEVE_LATEST_MOVIES_FETCHING,
    RETRIEVE_LATEST_MOVIES_SUCCESS,
    RETRIEVE_LATEST_MOVIES_FAILURE
} from '../actions/actionTypes';

const initialState= {
    isFetching: false,
    data: [],
    error: false
};

const sampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case RETRIEVE_LATEST_MOVIES_FETCHING:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case RETRIEVE_LATEST_MOVIES_SUCCESS: 
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        case RETRIEVE_LATEST_MOVIES_FAILURE:
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

export default sampleReducer;