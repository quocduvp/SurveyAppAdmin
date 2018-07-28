import swal from 'sweetalert'
import axios from 'axios'
import {
    store
} from '../store'
import { statistics_system, statistics_survey_details } from '../../API/apiUrl';
const STATISTIC_SYSTEM = 'STATISTIC_SYSTEM'
const STATISTIC_SURVEYS = 'STATISTIC_SURVEYS'
const FETCH_START = 'FETCH_START'
const FETCH_STOP = 'FETCH_STOP'
const initialState = {
    systems: "",
    surveys: "",
    fetched: true
}
export const statistics = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_START:
            return {
                ...state,
                fetched: true
            }
        case FETCH_STOP:
            return {
                ...state,
                fetched: false
            }
        case STATISTIC_SYSTEM:
            return {
                ...state,
                systems: actions.payload
            }
        case STATISTIC_SURVEYS:
            return {
                ...state,
                surveys: actions.payload
            }
        default:
            return state
    }
}

///actions
export function fetchStatisticSystems() {
    return async dispatch => {
        let settings = await {
            "async": true,
            "crossDomain": true,
            "url": statistics_system,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await dispatch({
            type : FETCH_START
        })
        await axios(settings)
        .then(async r=>{
            await dispatch({
                type : STATISTIC_SYSTEM,
                payload : r.data
            })
            await dispatch({
                type : FETCH_STOP
            })
        }).catch(async err=>{
            await swal({
                title : 'Error',
                icon : 'error',
                text : 'Fetch fails.'
            })
        })
    }
}
export function fetchStatisticSurveysDetails(id) {
    return async dispatch => {
        let settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${statistics_survey_details}/${id}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await dispatch({
            type : FETCH_START
        })
        await axios(settings)
        .then(async r=>{
            await dispatch({
                type : STATISTIC_SURVEYS,
                payload : r.data
            })
            await dispatch({
                type : FETCH_STOP
            })
        }).catch(async err=>{
            await swal({
                title : 'Error',
                icon : 'error',
                text : 'Surveys not found.'
            })
        })
    }
}