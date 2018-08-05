import axios from 'axios';
import { connect } from 'react-redux';
import {
    RETRIEVE_MOVIES_FETCHING,
    RETRIEVE_MOVIES_SUCCESS,
    RETRIEVE_MOVIES_FAILURE
} from './actionTypes';
import { BASE_API, LATEST_MOVIES, API_KEY, POPULAR } from '../utils/constants';

export const fetchPending = () => ({
    type: RETRIEVE_MOVIES_FETCHING
});

export const fetchSuccess = (response) => ({
    type: RETRIEVE_MOVIES_SUCCESS,
    data: response
});

export const fetchError = (error) => ({
    type: RETRIEVE_MOVIES_FAILURE,
    data: error
});

export const fetchLatestMovies = () => {
    return (dispatch)=> {
        dispatch(fetchPending());
        axios.get(`${BASE_API}/${POPULAR}?api_key=${API_KEY}`).
            then((response)=> {
                dispatch(fetchSuccess(response));
            }).
            catch((error)=> {
                dispatch(fetchError(error));
            });
    };
};