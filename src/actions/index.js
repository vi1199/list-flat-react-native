import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from './actionTypes';
import { BASE_API, LATEST_MOVIES, API_KEY } from '../utils/constants';

/*
 export const fetchMovies = ()=> {
    return (dispatch)=> {
        dispatch(fetchPending())
        axios.get(`${BASE_API}/${LATEST_MOVIES}?api_key=${API_KEY}`)
        .then(response=> {
            dispatch(fetchSuccess(response.original_title))
        })
        .catch(error=> {
            dispatch(fetchError(error))
        });
    }
}
  
 */

 export function fetchMovies () {
     return (dispatch) {
         dispatch(fetchPending())
         axios.get(`${BASE_API}/${LATEST_MOVIES}?api_key=${API_KEY}`)
         .then(response => {
             dispatch(fetchSuccess(response))
         })
         .catch(error => {
             dispatch(fetchError(error))
         })
     }
 }


export const fetchPending = ()=> ({
    type: actionTypes.RETRIEVE_MOVIES_FETCHING
})

export const fetchSuccess = (response)=> ({
    type: actionTypes.RETRIEVE_MOVIES_SUCCESS,
    data: response
})

export const fetchError = (error)=> ({
    type: actionTypes.RETRIEVE_MOVIES_FAILURE,
    data: error
})