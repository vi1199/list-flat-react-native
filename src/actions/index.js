import axios from 'axios';
import { connect } from 'react-redux';
import {
    RETRIEVE_LATEST_MOVIES_FETCHING,
    RETRIEVE_LATEST_MOVIES_SUCCESS,
    RETRIEVE_LATEST_MOVIES_FAILURE
} from './actionTypes';
import { BASE_API, LATEST_MOVIES, API_KEY, POPULAR, UP_COMING } from '../utils/constants';

export const fetchLatestMoviesPending = () => ({
    type: RETRIEVE_LATEST_MOVIES_FETCHING
});

export const fetchLatestMoviesSuccess = (response) => ({
    type: RETRIEVE_LATEST_MOVIES_SUCCESS,
    data: response
});

export const fetchLatestMoviesError = (error) => ({
    type: RETRIEVE_LATEST_MOVIES_FAILURE,
    data: error
});

export const fetchLatestMovies = () => {
    return (dispatch)=> {
        dispatch(fetchLatestMoviesPending());
        axios.get(`${BASE_API}/${POPULAR}?api_key=${API_KEY}`)
            .then((response)=> {
                dispatch(fetchLatestMoviesSuccess(response));
            })
            .catch((error)=> {
                dispatch(fetchLatestMoviesError(error));
            });
    };
};

export const fetchUpComingMovies = () => {
    return (dispatch) => {
        dispatch(fetchPending());
        axios.get(`${BASE_API}/${UP_COMING}?api_key=${API_KEY}`)
            .then((response)=> {
                dispatch(fetchSuccess(response));
            })
            .catch((error)=> {
                dispatch(fetchError(error));
            });
    }
};