import axios from 'axios';
import { connect } from 'react-redux';
import {
    RETRIEVE_FETCHING,
    RETRIEVE_LATEST_MOVIES_SUCCESS,
    RETRIEVE_FAILURE,
    RETRIEVE_UPCOMING_MOVIES_SUCCESS
} from './actionTypes';
import { BASE_API, LATEST_MOVIES, API_KEY, POPULAR, UP_COMING } from '../utils/constants';

export const fetchPending = () => ({
    type: RETRIEVE_FETCHING
});

export const fetchError = (error) => ({
    type: RETRIEVE_FAILURE,
    data: error
});

//latest movies
export const fetchLatestMoviesSuccess = (response) => ({
    type: RETRIEVE_LATEST_MOVIES_SUCCESS,
    data: response
});
export const fetchLatestMovies = () => {
    return (dispatch)=> {
        dispatch(fetchPending());
        axios.get(`${BASE_API}/${POPULAR}?api_key=${API_KEY}`)
            .then((response)=> {
                dispatch(fetchLatestMoviesSuccess(response));
            })
            .catch((error)=> {
                dispatch(fetchError(error));
            });
    };
};

//upcoming movies
export const fetchUpComingMoviesSuccess = (response) => ({
    type: RETRIEVE_UPCOMING_MOVIES_SUCCESS,
    data: response
});
export const fetchUpComingMovies = () => {
    return (dispatch) => {
        dispatch(fetchPending());
        axios.get(`${BASE_API}/${UP_COMING}?api_key=${API_KEY}`)
            .then((response)=> {
                dispatch(fetchUpComingMoviesSuccess(response));
            })
            .catch((error)=> {
                dispatch(fetchError(error));
            });
    }
};