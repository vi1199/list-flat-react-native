import {
    RETRIEVE_FETCHING,
    RETRIEVE_LATEST_MOVIES_SUCCESS,
    RETRIEVE_FAILURE,
    RETRIEVE_UPCOMING_MOVIES_SUCCESS
} from '../actions/actionTypes';

const initialState= {
    isFetching: false,
    data: [],
    error: false
};

const sampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case RETRIEVE_FETCHING:
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
        case RETRIEVE_UPCOMING_MOVIES_SUCCESS: 
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        case RETRIEVE_FAILURE:
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